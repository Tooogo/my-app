// app/not-found.tsx
import { headers } from 'next/headers';
import { edgeLogger } from '@/lib/logger.edge';

export default async function NotFound() {
  const h = await headers();
  const pathname = h.get('x-pathname') ?? 'unknown'; 
  const userAgent = h.get('user-agent') ?? 'unknown';
  const referer = h.get('referer') ?? 'none';
  const acceptLanguage = h.get('accept-language') ?? 'unknown';
  const ip = (h.get('x-forwarded-for') ?? '').split(',')[0]?.trim() || 'unknown';

  await edgeLogger('Page Not Found', {
    url: pathname,
    status: 404,
    ip,
    user_agent: userAgent,
    referer,
    accept_language: acceptLanguage,
  });

  return (
    <main style={{ padding: 24 }}>
      <h1>404 Not Found</h1>
      <p>ページが見つかりませんでした。</p>
    </main>
  );
}
