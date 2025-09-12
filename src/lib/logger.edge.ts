// src/lib/logger.edge.ts
// Datadog Logs v2 (Edge対応・安全化版)

type Primitive = string | number | boolean | null;
export type LogMeta = Record<string, unknown>;

const MAX_STR_LEN = 2000;

function truncate(s: string): string {
  return s.length > MAX_STR_LEN ? s.slice(0, MAX_STR_LEN) + '…(truncated)' : s;
}

function stringifySafe(obj: unknown): string {
  try {
    // Headers など iterable を見やすい形に
    if (typeof Headers !== 'undefined' && obj instanceof Headers) {
      return truncate(JSON.stringify(Object.fromEntries(obj.entries())));
    }
    if (obj instanceof URL) return obj.toString();
    if (obj instanceof Date) return obj.toISOString();
    if (obj instanceof Error) {
      const base = `${obj.name}: ${obj.message}`;
      const stack = (obj.stack ?? '').split('\n').slice(0, 5).join('\n');
      return truncate(stack ? `${base}\n${stack}` : base);
    }
    // 配列やプレーンオブジェクト
    return truncate(JSON.stringify(obj));
  } catch {
    return truncate(String(obj));
  }
}

function coerce(v: unknown): Primitive {
  if (v === undefined) return null;
  const t = typeof v;
  if (t === 'string') return truncate(v as string);
  if (t === 'number') return Number.isFinite(v as number) ? (v as number) : String(v) as unknown as Primitive;
  if (t === 'boolean') return v as boolean;
  // 残りはオブジェクト → 文字列化
  return stringifySafe(v);
}

function sanitize(meta: LogMeta): Record<string, Primitive> {
  const out: Record<string, Primitive> = {};
  for (const [k, v] of Object.entries(meta || {})) {
    out[k] = coerce(v);
  }
  return out;
}

export async function edgeLogger(message: string, meta: LogMeta = {}) {
  // 1) ローカル標準出力（開発時の確認用）
  //    ここでも sanitize 済みを出すとデバッグが楽
  const attributes = sanitize(meta);
  // eslint-disable-next-line no-console
  console.log(`[EDGE] ${message}`, attributes);

  // 2) APIキーが無ければ送信スキップ
  const apiKey = process.env.DD_API_KEY;
  if (!apiKey) {
    // eslint-disable-next-line no-console
    console.warn('DD_API_KEY is not set. Skipping Datadog log.');
    return;
  }

  // 3) Datadog Logs v2 送信（AP1）
  const payload = [
    {
      // 推奨フィールド
      ddsource: 'nextjs-edge',
      service: process.env.DD_SERVICE || 'my-app',
      ddtags: `env:${process.env.NODE_ENV || 'development'}`,
      message: truncate(message),
      // 明示的に timestamp を入れておくと並びが安定
      timestamp: Date.now(),
      attributes,
    },
  ];

  try {
    const res = await fetch('https://http-intake.logs.ap1.datadoghq.com/api/v2/logs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'DD-API-KEY': apiKey,
      },
      body: JSON.stringify(payload),
      // Edge/ブラウザ送信の信頼性向上
      keepalive: true,
    });
    if (!res.ok) {
      // eslint-disable-next-line no-console
      console.error('Datadog log rejected', res.status, await res.text());
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Failed to send log to Datadog', err);
  }
}
