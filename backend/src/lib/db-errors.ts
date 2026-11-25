export function isDatabaseUnavailable(error: unknown) {
  const seen = new Set<unknown>();
  let current = error;

  while (typeof current === "object" && current !== null && !seen.has(current)) {
    seen.add(current);
    const failure = current as { code?: unknown; message?: unknown; cause?: unknown };
    if (failure.code === "ECONNREFUSED" || failure.code === "CONNECTION_REFUSED") return true;
    if (typeof failure.message === "string" && /ECONNREFUSED|connect timeout|connection terminated/i.test(failure.message)) return true;
    current = failure.cause;
  }

  return false;
}