// src/middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  // ここでは “新規ヘッダだけ” を作る（元のヘッダは触らない）
  const override = new Headers();

  // 相関ID（常に“文字列”）
  const rid =
    req.headers.get('x-req-id') ||           // Artillery が付ける
    req.headers.get('x-request-id') ||        // 既存があれば流用
    `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  override.set('x-request-id', rid);

  // 診断用（すべて文字列で）
  override.set('x-pathname', req.nextUrl.pathname);
  override.set('x-url', req.url);
  override.set('x-method', req.method);

  const accept = req.headers.get('accept') || '';
  const isRSC = /\b(text|application)\/x-component\b|\bnext-action\b/i.test(accept);
  override.set('x-rsc', isRSC ? '1' : '');
  override.set('x-accept', accept);

  // ここで “追加” だけ行い、元ヘッダはフレームワークに任せる
  return NextResponse.next({ request: { headers: override } });
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|robots.txt|site.webmanifest).*)'],
};
