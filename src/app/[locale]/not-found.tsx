// src/app/[locale]/not-found.tsx
import { headers } from 'next/headers';
import { edgeLogger } from '@/lib/logger.edge';

export default async function NotFound() {
  // 同一 request をミドルウェアと突合できるようにログを残す
  const h = await headers();
  edgeLogger('Page Not Found', {
    request_id: h.get('x-request-id'),
    url: h.get('x-pathname'),
    user_agent: h.get('user-agent') ?? 'unknown',
    accept_language: h.get('accept-language') ?? 'unknown',
  });

  return (
    <div>
      <h1>404 Page not found</h1>
      <p>The page you&apos;re looking for doesn&apos;t exist.</p>
    </div>
  );
}
