import { NextRequest, NextResponse } from 'next/server'
import { getSession } from './lib/session'; // getSession 関数をインポート


export async function middleware(request: NextRequest) {
  const session = await getSession(); // getSession 関数でセッション情報を取得
  const { pathname } = request.nextUrl;
  console.log('session:', session)

  // ログインしないと入れないサイトを指定
  const protectedRoutes = [
    '/en/submit/',
    '/jp/submit/',
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


// // middlewareを適用するルートを指定（全てのページに適用）
// export const config = {
//   matcher: ['/:path*'], // 全てのページに対してmiddlewareを適用
// };

export const config = {
  matcher: [
    // 実際にログイン制限をかけたいページだけを明示的に記述
    '/en/family/:id/edit/', // 必要なら ja も追加
    '/ja/family/:id/edit/',
  ],
};


