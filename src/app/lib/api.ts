const API_BASE_URL = (import.meta.env.VITE_API_URL || `${window.location.protocol}//${window.location.hostname}:3000`)
  .replace(/\/$/, "");

export class ApiError extends Error {
  constructor(message: string, readonly status: number) {
    super(message);
    this.name = "ApiError";
  }
}

export async function apiRequest<T>(path: string, init?: RequestInit): Promise<T> {
  let response: Response;
  try {
    response = await fetch(`${API_BASE_URL}${path}`, {
      ...init,
      credentials: "include",
      headers: {
        ...(init?.body ? { "Content-Type": "application/json" } : {}),
        ...init?.headers,
      },
    });
  } catch {
    throw new ApiError("Tidak dapat terhubung ke backend. Pastikan server backend aktif.", 0);
  }

  const data = await response.json().catch(() => null) as { error?: string } | null;
  if (!response.ok) {
    throw new ApiError(data?.error || `Permintaan backend gagal (${response.status}).`, response.status);
  }
  if (data === null) throw new ApiError("Backend mengembalikan respons yang tidak valid.", response.status);
  return data as T;
}
