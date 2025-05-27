import { NextRequest, NextResponse } from 'next/server'
import { getSession } from './lib/session'; // getSession 関数をインポート


export async function middleware(request: NextRequest) {
  const session = await getSession(); // getSession 関数でセッション情報を取得
  const { pathname } = request.nextUrl;
  console.log('session:', session)
  console.log("pathname:", request.nextUrl.pathname);
  console.log("url:", request.url);

  // ログインしないと入れないサイトを指定
  const protectedRoutes = [
    '/en/submit/',
    '/jp/submit/',
    '/en/mypage/',
    '/jp/mypage/',
    /^\/en\/family\/[^/]+\/edit\/$/,
    /^\/jp\/family\/[^/]+\/edit\/$/,
  ];
  const isProtectedRoute = protectedRoutes.some(route => new RegExp(route).test(pathname));
  console.log("enter");
  console.log("isProtected", isProtectedRoute);
  console.log("route", pathname);

  // 保護されたページに未ログインでアクセス → /login にリダイレクト
  if (isProtectedRoute && !session) {
    console.log("redirect to login");
    return NextResponse.redirect(new URL('/login', request.url));
  }


  console.log("exit");
  return NextResponse.next();
}


export const config = {
  matcher: [
    '/en/submit',
    '/ja/submit/',
    '/en/mypage',
    '/ja/mypage/',
  ],
};