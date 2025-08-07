type LogMetaValue = string | number | boolean | null;
export type LogMeta = Record<string, LogMetaValue>;

export async function edgeLogger(message: string, meta: LogMeta = {}) {
  console.log(`[EDGE] ${message}`, meta);

  if (!process.env.DD_API_KEY) {
    console.warn("DD_API_KEY is not set. Skipping Datadog log.");
    return;
  }

  try {
    await fetch("https://http-intake.logs.ap1.datadoghq.com/api/v2/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "DD-API-KEY": process.env.DD_API_KEY,
      },
      body: JSON.stringify([
        {
          ddsource: "nextjs-edge",
          ddtags: "env:production",
          message,
          ...meta,
        },
      ]),
    });
  } catch (err) {
    console.error("Failed to send log to Datadog", err);
  }
}
