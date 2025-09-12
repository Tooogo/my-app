// src/app/[locale]/not-found.tsx
import { headers } from 'next/headers';
import { edgeLogger } from '@/lib/logger.edge';

export default async function NotFound() {
  const h = await headers();
  await edgeLogger('not-found-in-locale', {
    request_id: h.get('x-request-id') || '',
    path: h.get('x-pathname') || 'unknown',
    url: h.get('x-url') || 'unknown',
    method: h.get('x-method') || 'unknown',
    rsc: h.get('x-rsc') === '1',
    accept: h.get('x-accept') || '',
    user_agent: h.get('user-agent') || 'unknown',
    accept_language: h.get('accept-language') || 'unknown',
    referer: h.get('referer') || 'none',
    x_test_run: h.get('x-test-run') || 'none',
  });


  return (
    <div>
      <h1>404 Page not found</h1>
      <p>The page you&apos;re looking for doesn&apos;t exist.</p>
    </div>
  );
}
