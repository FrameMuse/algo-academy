import { createQuery } from "utils/common"

import { QueryAction, QueryResponse } from "./types"

export class QueryError extends Error { }
export class QueryClientError extends Error { }
export class QueryServerError extends Error { }

// export async function resolveBodyType(contentType?: string): Promise<void> {
//   if (contentType?.startsWith("application/json")) {
//     return 
//   }

//   return 1
// }

export function isResponseOk<T>(response: QueryResponse<T>, throwError = false): response is Required<typeof response> {
  if (response.error) {
    if (throwError) {
      throw response.error
    }

    return false
  }

  if (response.status == null) {
    return false
  }

  if (![203, 204].includes(response.status)) {
    if (response.payload == null) {
      return false
    }
  }

  if (response.headers == null || !response.nativeResponse?.ok) {
    return false
  }

  return true
}

export function buildActionURL<T>(action: QueryAction<T>): URL {
  const host = "https://algo-academy.online/"
  const url = new URL(action.endpoint, host)

  if (action.params) {
    url.search = createQuery(action.params)
  }

  return url
}

export { }
