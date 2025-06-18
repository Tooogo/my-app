import { NextRequest, NextResponse } from 'next/server'
import { getSession } from './lib/session/getSession';
import { ROUTE_PATHS, ROUTE_ACCESS } from './lib/routes/accessMap';
import type { RouteKey } from './lib/routes/keys';


export async function middleware(request: NextRequest) {
  const session = await getSession();
  console.log('Session:', session);
  const response = NextResponse.next();
  const { pathname } = request.nextUrl;

  const matchedKey = (Object.keys(ROUTE_PATHS) as RouteKey[]).find((key) => {
    const pathPattern = ROUTE_PATHS[key];
    const raw = typeof pathPattern === 'function' ? pathPattern(':id') : pathPattern;
    const pattern = '^' + raw.replace(':id', '[^/]+') + '/?$';
    return new RegExp(pattern).test(pathname);
  });

  // 権限管理対象外のルートだった場合はそのまま通過
  if (!matchedKey) return response;
  //　ログインしていない場合はログインページへリダイレクト
  if (!session) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  // 権限がなければ404エラーを返す
  const allowed = ROUTE_ACCESS[matchedKey];
  if (!allowed.includes(session.role)) {
    return NextResponse.redirect(new URL('/not-found', request.url));
  }
  // ログインしていて権限がある場合はそのまま通過
  return response;
}


export const config = {
  matcher: ['/:path*'],
};