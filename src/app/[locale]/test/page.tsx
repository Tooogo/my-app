// src/app/[locale]/test/page.tsx
import { headers } from 'next/headers';
import { edgeLogger } from '@/lib/logger.edge';

type Props = { params: { locale: string } };

export default async function TestPage({ params }: Props) {
  const h = await headers(); // ← あなたの環境都合で非同期のままでOK
  const path = h.get('x-pathname') ?? 'unknown';

  await edgeLogger('page-view' /* or 'not-found-in-locale' */, {
    request_id: h.get('x-request-id') ?? '',
    path: h.get('x-pathname') ?? 'unknown',
    url: h.get('x-url') ?? 'unknown',            // ← ここ重要
    method: h.get('x-method') ?? 'unknown',
    rsc: h.get('x-rsc') === '1',
    accept: h.get('x-accept') ?? '',
    user_agent: h.get('user-agent') ?? 'unknown',
    accept_language: h.get('accept-language') ?? 'unknown',
    referer: h.get('referer') ?? 'none',
    x_test_run: h.get('x-test-run') ?? 'none',
  });

  return (
    <main>
      <h1>TEST OK</h1>
      <p>locale: <b>{params.locale}</b></p>
      <p>path: <code>{path}</code></p>
    </main>
  );
}
