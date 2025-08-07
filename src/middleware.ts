import { NextRequest, NextResponse } from 'next/server';
import { getSession } from './lib/session/getSession';
import { ROUTE_PATHS, ROUTE_ACCESS } from './lib/routes/accessMap';
import type { RouteKey } from './lib/routes/keys';
import { edgeLogger } from './lib/logger.edge';
import { AuthStatus } from './types/auth';

export async function middleware(request: NextRequest) {
  const start = performance.now();
  const session = await getSession();
  const { pathname } = request.nextUrl;
  const role = session?.role || 'guest';
  const userAgent = request.headers.get('user-agent') ?? 'unknown';
  const referer = request.headers.get('referer') ?? 'none';
  const acceptLanguage = request.headers.get('accept-language') ?? 'unknown';
  const forwardedFor = request.headers.get('x-forwarded-for') ?? '';
  const ip = forwardedFor.split(',')[0]?.trim() || 'unknown';

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
    response = NextResponse.next();
  } else if (!session) {
    response = NextResponse.redirect(new URL('/login', request.url));
    status = 302;
  } else {
    const allowed = ROUTE_ACCESS[matchedKey];
    if (!allowed.includes(session.role)) {
      response = NextResponse.redirect(new URL('/not-found', request.url));
      status = 302;
    } else {
      response = NextResponse.next();
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
}

export const config = { matcher: ['/:path*'] };
