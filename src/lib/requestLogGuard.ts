// src/lib/requestLogGuard.ts
const seen = new Map<string, Set<string>>();

export function hasSeen(reqId: string, event: string) {
  return seen.get(reqId)?.has(event) ?? false;
}

export function markSeen(reqId: string, event: string) {
  let set = seen.get(reqId);
  if (!set) {
    set = new Set();
    seen.set(reqId, set);
    // リクエスト終了後に自然にGCさせたいので軽くTTL
    setTimeout(() => seen.delete(reqId), 15_000).unref?.();
  }
  set.add(event);
}
