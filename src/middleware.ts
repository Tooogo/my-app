import { NextRequest, NextResponse } from 'next/server'
import { getSession } from './lib/session'; // getSession 関数をインポート


export async function middleware(request: NextRequest) {
  const session = await getSession(); // getSession 関数でセッション情報を取得
  const { pathname } = request.nextUrl;
  console.log('session:', session)

  // ログインしないと入れないサイトを指定
  const protectedRoutes = [
    '/en/submit/',
    /^\/en\/family\/[^/]+\/edit\/$/,
  ];

  // `protectedRoutes` のいずれかにマッチするかチェック
  const isProtectedRoute = protectedRoutes.some(route =>
    typeof route === 'string' ? pathname === route : route.test(pathname)
  );

  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL('/en', request.url)); // 未ログインなら/loginへリダイレクト
  }


  return NextResponse.next(); // 他のケースではそのまま進む
}

// middlewareを適用するルートを指定（全てのページに適用）
export const config = {
  matcher: ['/:path*'], // 全てのページに対してmiddlewareを適用
};
