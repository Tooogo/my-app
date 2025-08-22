// src/app/[...not-found]/page.tsx
import { headers } from 'next/headers';
import { edgeLogger } from '@/lib/logger.edge';

export default async function CatchAllNotFound() {
  const h = await headers();
  const pathname = h.get('x-pathname') ?? 'unknown';
  const ua = h.get('user-agent') ?? 'unknown';

  await edgeLogger('Page Not Found (catch-all)', {
    url: pathname,
    status: 404,
    user_agent: ua,
  });

  return (
    <main style={{ padding: 24 }}>
      <h1>404 Not Found</h1>
      <p>ページが見つかりませんでした。</p>
    </main>
  );
}
