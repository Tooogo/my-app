// src/middleware.ts
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// ここはあなたの実ルーティングに合わせて保守（例）
const LOCALES = new Set(['en', 'ja'] as const);
const ALLOWED_BY_LOCALE: Record<string, Set<string>> = {
  en: new Set(['', '/', '/test', '/ok']), // /en, /en/test, /en/ok
  ja: new Set(['', '/', '/test', '/ok']),
};

export function middleware(request: NextRequest) {
  const { pathname, href } = request.nextUrl;

  // 既存ヘッダを継承
  const h = new Headers(request.headers);

  // 追記ヘッダ（元の Accept 等は上書きしない）
  h.set('x-pathname', pathname);
  h.set('x-url', href);
  h.set('x-method', request.method);

  // Edgeでも動くUUID（Nodeの 'crypto' モジュールは使わない）
  const reqId =
    request.headers.get('x-request-id') ??
    (globalThis.crypto?.randomUUID?.() ??
      `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`);
  h.set('x-request-id', reqId);

  // ---- ここがポイント：404候補をマーキング ----
  let suspect404 = '0';
  const segs = pathname.split('/').filter(Boolean); // '' を除去
  const locale = segs[0];

  if (LOCALES.has(locale as any)) {
    // 例: /en/test -> restPath = '/test', /en -> ''
    const restPath =
      segs.length <= 1 ? '' : `/${segs.slice(1).join('/')}`;

    const allowed = ALLOWED_BY_LOCALE[locale] ?? new Set<string>();
    if (!allowed.has(restPath)) suspect404 = '1';
  }
  // ルート直下の不明パス（/foo 等）は suspect404 のまま '0'（root not-found側で拾うのでOK）
  h.set('x-suspect-404', suspect404);

  return NextResponse.next({ request: { headers: h } });
}

export const config = {
  // 必要に応じて適用範囲を絞る
  matcher: ['/((?!_next|static|favicon.ico).*)'],
};