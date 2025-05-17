export class FetchClientError extends Error {
  constructor(message: string, public response?: Response) {
    super(message);
    this.name = "FetchClientError";
    if (response) {
      this.status = response.status;
    }
  }
  status?: number;
}

export async function fetchClient(
  url: RequestInfo,
  options: RequestInit = {},
  getToken?: () => Promise<string | null>
): Promise<Response> {
  const headers = new Headers(options.headers);

  if (getToken) {
    const token = await getToken();
    if (token) headers.set("Authorization", `Bearer ${token}`);
  }

  if (!headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  try {
    const response = await fetch(url, { ...options, headers });
    if (!response.ok) {
      throw new FetchClientError(`HTTP error: ${response.status}`, response);
    }
    return response;
  } catch (error) {
    if (error instanceof FetchClientError) {
      throw error;
    }
    throw new FetchClientError("Request failed");
  }
}
