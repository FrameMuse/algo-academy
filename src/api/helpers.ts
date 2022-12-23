import { createQuery } from "utils/common"

import queryClient from "./client"
import { QueryAction, QueryResponse } from "./types"

export class QueryError extends Error { }
export class QueryClientError extends Error {
  action: QueryAction
  response: QueryResponse

  constructor(action: QueryAction, response: QueryResponse) {
    super(response.payload.message)

    this.name = QueryClientError.name
    this.action = action
    this.response = response
  }
}
export class QueryServerError extends Error {
  action: QueryAction
  response: QueryResponse

  constructor(action: QueryAction, response: QueryResponse) {
    super(response.payload.message)

    this.name = QueryServerError.name
    this.action = action
    this.response = response
  }
}

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
  const host = process.env.REACT_APP_API_HOST
  const url = new URL(action.endpoint, host)

  if (action.params) {
    url.search = createQuery(action.params)
  }

  return url
}

export function getActionQueryKey(action: QueryAction): string[] {
  return [action.endpoint, action.operationId]
}

export function refetchActionQueries(action: QueryAction) {
  return queryClient.refetchQueries(getActionQueryKey(action))
}

export function invalidateActionQuery(action: QueryAction) {
  const queryKey = getActionQueryKey(action)

  queryClient.invalidateQueries({ queryKey })
}
