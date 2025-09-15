// src/app/[locale]/not-found.tsx
import { headers } from 'next/headers';
import { edgeLogger } from '@/lib/logger.edge';

export default async function NotFoundInLocale() {
  console.log('Rendering NotFoundInLocale page');
  const h = await headers();

  // 内部プリフェッチ/データ要求は除外
  const isInternal =
    h.get('x-nextjs-data') === '1' ||
    h.get('next-router-prefetch') === '1' ||
    h.get('x-middleware-prefetch') === '1';

  // ★ ミドルウェアで「404候補」と判定されたときのみログする
  const shouldLog = !isInternal && h.get('x-suspect-404') === '1';

  if (shouldLog) {
    const requestId = h.get('x-request-id') ?? String(Date.now());
    const path = h.get('x-pathname') ?? '/unknown';
    const url = h.get('x-url') ?? '';
    const method = h.get('x-method') ?? 'GET';
    const user_agent = h.get('user-agent') ?? 'unknown';
    const accept_language = h.get('accept-language') ?? 'unknown';
    const referer = h.get('referer') ?? 'none';

    await edgeLogger('not-found-in-locale', {
      request_id: requestId,
      path,
      url,
      method,
      user_agent,
      accept_language,
      referer,
    });
  }

  return (
    <main>
      <h1>Page Not Found</h1>
    </main>
  );
}
