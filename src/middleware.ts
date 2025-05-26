import { NextRequest, NextResponse } from 'next/server'
import { getSession } from './lib/session'; // getSession 関数をインポート


export async function middleware(request: NextRequest) {
  const session = await getSession(); // getSession 関数でセッション情報を取得
  const { pathname } = request.nextUrl;
  console.log('session:', session)
  console.log("pathname:", request.nextUrl.pathname);

  // ログインしないと入れないサイトを指定
  const protectedRoutes = [
    '/en/submit/',
    '/jp/submit/',
    '/en/mypage/',
    '/jp/mypage/',
    /^\/en\/family\/[^/]+\/edit\/$/,
    /^\/jp\/family\/[^/]+\/edit\/$/,
  ];

  // `protectedRoutes` のいずれかにマッチするかチェック
  const isProtectedRoute = protectedRoutes.some(route => new RegExp(route).test(pathname));
  console.log("enter")
  console.log("isProtected", isProtectedRoute)
  console.log("route", pathname)
  if (isProtectedRoute && !session) {
    console.log("redirect")
    return NextResponse.redirect(new URL('/login', request.url)); // 未ログインなら/loginへリダイレクト
  }

  console.log("exit")
  return NextResponse.next(); // 他のケースではそのまま進む
}


// middlewareを適用するルートを指定（全てのページに適用）
/*
export const config = {
  matcher: ['/:path*'], // 全てのページに対してmiddlewareを適用
};
*/

export const config = {
  matcher: [
    '/en/submit',
    '/en/submit/',
    '/ja/submit',
    '/ja/submit/',
    '/en/mypage',
    '/en/mypage/',
    '/ja/mypage',
    '/ja/mypage/',
    '/en/family/:id/edit',
    '/en/family/:id/edit/',
    '/ja/family/:id/edit',
    '/ja/family/:id/edit/',
  ],
};
