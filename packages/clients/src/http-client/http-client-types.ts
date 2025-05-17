export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface RequestOptions<TBody = unknown> {
  body?: TBody;
  headers?: Record<string, string>;
  getToken?: GetTokenFn;
  queryParams?: Record<string, string | number | boolean>;
  timeout?: number;
  retries?: number;
  retryDelay?: number;
  responseType?: "json" | "text" | "blob" | "arraybuffer";
  signal?: AbortSignal;
}

export type GetTokenFn = () => Promise<string | null>;

export interface FetchClientOptions extends RequestInit {
  timeout?: number;
  retries?: number;
  retryDelay?: number;
}
