// src/lib/pageLogger.ts
import 'server-only';

type V = string | number | boolean | null | undefined;
export type PageLogMeta = Record<string, V>;

const DD_URL   = 'https://http-intake.logs.ap1.datadoghq.com/api/v2/logs';
const SERVICE  = process.env.DD_SERVICE || 'my-next-app';
const ENV      = process.env.NODE_ENV === 'production' ? 'production' : 'dev';
const REGION   = process.env.VERCEL_REGION ?? 'unknown';

export async function pageLogger(message: string, meta: PageLogMeta = {}) {
  // ローカル確認用
  console.log('[PAGE]', message, meta);

  const apiKey = process.env.DD_API_KEY;
  if (!apiKey) return;

  const ddtags = [
    `service:${SERVICE}`,
    `env:${ENV}`,
    `region:${REGION}`,
    'runtime:node',
    'layer:page',
  ].join(',');

  const body = [{
    message,
    ddsource: 'nextjs',
    ddtags,
    service: SERVICE,
    // undefined を除去
    ...Object.fromEntries(Object.entries(meta).filter(([, v]) => v !== undefined)),
  }];

  try {
    await fetch(DD_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'DD-API-KEY': apiKey },
      body: JSON.stringify(body),
    });
  } catch (err) {
    console.error('Failed to send page log', err);
  }
}
