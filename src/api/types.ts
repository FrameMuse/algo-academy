type Method = "POST" | "GET" | "PATCH" | "PUT" | "DELETE"

export interface QueryAction<T = unknown> {
  method: Method
  endpoint: `/${string}`
  body?: unknown
  params?: Record<string | number, unknown>
  headers?: Record<string, string>
}

export interface QueryResponse<T = unknown> {
  nativeResponse?: Response
  error?: Error
  status?: number
  headers?: Headers
  payload?: T
}

export type BodyType = "arrayBuffer" | "blob" | "formData" | "json" | "text"
