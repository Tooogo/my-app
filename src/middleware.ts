import { NextRequest, NextResponse } from 'next/server';
import { getSession } from './lib/session/getSession';
import { ROUTE_PATHS, ROUTE_ACCESS } from './lib/routes/accessMap';
import type { RouteKey } from './lib/routes/keys';
import { edgeLogger } from './lib/logger.edge';
import { AuthStatus } from './types/auth';

export async function middleware(request: NextRequest) {
  const start = performance.now();
  const { pathname } = request.nextUrl;
  const userAgent = request.headers.get('user-agent') ?? 'unknown';
  const referer = request.headers.get('referer') ?? 'none';
  const acceptLanguage = request.headers.get('accept-language') ?? 'unknown';
  const forwardedFor = request.headers.get('x-forwarded-for') ?? '';
  const ip = forwardedFor.split(',')[0]?.trim() || 'unknown';
  const reqHeaders = new Headers(request.headers);
  reqHeaders.set('x-pathname', pathname);

    // ✅ OK: Web Crypto API（Edge対応）
  const requestId = request.headers.get('x-request-id') ?? crypto.randomUUID();
  reqHeaders.set('x-request-id', requestId);

  const res = NextResponse.next({ request: { headers: reqHeaders } });
  res.headers.set('x-request-id', requestId);


  try {

    /*
    // テスト用のエラー強制発生（開発時のみ） --- IGNORE ---
    if (process.env.NODE_ENV !== 'production' && request.headers.get('x-test-mw-error') === '1') {
    throw new Error('mw-forced-error');
    }
    */

    const session = await getSession();
    const role = session?.role || 'guest';

    edgeLogger('Middleware Access Start', {
      url: pathname,
      method: request.method,
      role,
      ip,
      user_agent: userAgent,
      referer,
      accept_language: acceptLanguage,
    });

    const matchedKey = (Object.keys(ROUTE_PATHS) as RouteKey[]).find((key) => {
      const raw = typeof ROUTE_PATHS[key] === 'function' ? ROUTE_PATHS[key](':id') : ROUTE_PATHS[key];
      return new RegExp('^' + raw.replace(':id', '[^/]+') + '/?$').test(pathname);
    });

    let response: NextResponse;
    let status = 200;

    if (!matchedKey) {
      response = NextResponse.next({ request: { headers: reqHeaders } });
    } else if (!session) {
      response = NextResponse.redirect(new URL('/login', request.url));
      status = 302;
    } else {
      const allowed = ROUTE_ACCESS[matchedKey];
      if (!allowed.includes(session.role)) {
        response = NextResponse.redirect(new URL('/not-found', request.url));
        status = 302;
      } else {
        response = NextResponse.next({ request: { headers: reqHeaders } });
      }
    }

    const duration = performance.now() - start;

    edgeLogger('Middleware Completed', {
      url: pathname,
      method: request.method,
      status,
      role,
      auth: session ? AuthStatus.authenticated : AuthStatus.unauthenticated,
      duration_ms: duration,
      ip,
      user_agent: userAgent,
      referer,
      accept_language: acceptLanguage,
    });
    return response;
  } catch (err) {
    
    const duration = performance.now() - start;
    await edgeLogger('Middleware Exception', {
      url: pathname,
      method: request.method,
      status: 500,
      role: 'guest',
      auth: AuthStatus.unauthenticated,
      duration_ms: duration,
      ip,
      user_agent: userAgent,
      referer,
      accept_language: acceptLanguage,
      error_message: err instanceof Error ? err.message : String(err),
    });

    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export const config = { matcher: ['/:path*'] };
