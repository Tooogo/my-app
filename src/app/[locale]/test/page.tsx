import { headers } from 'next/headers';
import { edgeLogger } from '@/lib/logger.edge';
import { markSeen } from '@/lib/requestLogGuard';

type LocaleParams = Promise<{ locale: 'en' | 'ja' }>;

export default async function TestPage({ params }: { params: LocaleParams }) {

  const { locale } = await params;

  const h = await headers();
  const requestId = h.get('x-request-id') ?? String(Date.now());
  const path = h.get('x-pathname') ?? '/unknown';
  const url = h.get('x-url') ?? '';
  const method = h.get('x-method') ?? 'GET';
  const rsc = (h.get('rsc') ?? 'false') === 'true';
  const accept = h.get('accept') ?? 'unknown';
  const user_agent = h.get('user-agent') ?? 'unknown';
  const accept_language = h.get('accept-language') ?? 'unknown';
  const referer = h.get('referer') ?? 'none';
  const x_test_run = h.get('x_test_run') ?? 'none';

  await edgeLogger('page-view', {
    request_id: requestId,
    path,
    url,
    method,
    rsc,
    accept,
    user_agent,
    accept_language,
    referer,
    x_test_run,
  });

  markSeen(requestId, 'page-view');

  return (
    <main>
      <h1>TEST OK</h1>
      <p>locale: <b>{locale}</b></p>
      <p>path: <code>{path}</code></p>
    </main>
  );
}
