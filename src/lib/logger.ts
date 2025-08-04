// src/lib/logger.ts
import { datadogLogs } from "@datadog/browser-logs";

export type LogLevel = "debug" | "info" | "warn" | "error";


if (typeof window !== "undefined") {
  datadogLogs.init({
    clientToken: process.env.NEXT_PUBLIC_DD_CLIENT_TOKEN!,
    site: "ap1.datadoghq.com",
    service: "my-nextjs-app",
    env: process.env.NEXT_PUBLIC_DATADOG_ENV || "local",
    forwardErrorsToLogs: true,
  });
}

class Logger {
  constructor(private level: LogLevel = "info") {}

  private levelPriority: Record<LogLevel, number> = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
  };

  private shouldLog(level: LogLevel): boolean {
    return this.levelPriority[level] >= this.levelPriority[this.level];
  }

  log(level: LogLevel, message: string, meta?: object) {
    if (!this.shouldLog(level)) return;

    const consoleFn = level === "debug" ? "log" : level;
    console[consoleFn](`[${level.toUpperCase()}] ${message}`, meta || "");

    if (typeof window !== "undefined") {
        switch (level) {
            case "info":
            datadogLogs.logger.info(message, meta);
            break;
            case "warn":
            datadogLogs.logger.warn(message, meta);
            break;
            case "error":
            datadogLogs.logger.error(message, meta);
            break;
            case "debug":
            datadogLogs.logger.debug(message, meta);
            break;
        }
    }
  }

  debug(msg: string, meta?: object) { this.log("debug", msg, meta); }
  info(msg: string, meta?: object) { this.log("info", msg, meta); }
  warn(msg: string, meta?: object) { this.log("warn", msg, meta); }
  error(msg: string, meta?: object) { this.log("error", msg, meta); }
}

// ✅ アプリ全体で共通のインスタンス
export const logger = new Logger("info");
