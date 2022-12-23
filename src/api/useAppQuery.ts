import { QueryObserverResult, QueryObserverSuccessResult, useQuery, UseQueryOptions } from "@tanstack/react-query"

import appQuery from "./appQuery"
import { getActionQueryKey } from "./helpers"
import { QueryAction, QueryResponse } from "./types"

interface UseAppQueryOptions<T, E> extends Omit<UseQueryOptions<QueryResponse<T>, E>, "queryFn" | "queryKey"> {

}

/**
 * By default will make requests with `suspense` and `useErrorBoundary` being `true`,
 * but it will check if `Options` **has** `enabled` field, making payload nullable.
 */
function useAppQuery<T, E, Options extends UseAppQueryOptions<T, E>>(action: QueryAction<T>, options?: Options): Options extends ({ enabled: boolean }) ? QueryObserverResult<QueryResponse<T>, E> : QueryObserverSuccessResult<QueryResponse<T>, E> {
  const isDynamiclyEnabled = options?.enabled != null

  const queryResult = useQuery<QueryResponse<T>, E>({
    // Disable suspense and error throwing if query enabled dynamicly
    suspense: !isDynamiclyEnabled,
    useErrorBoundary: !isDynamiclyEnabled,
    ...options,

    queryKey: getActionQueryKey(action),
    queryFn: () => appQuery(action)
  })

  if (isDynamiclyEnabled) {
    if (queryResult.status !== "success") {
      return queryResult as never
    }
  }

  if (queryResult.status !== "success") {
    throw new Error(`Something went wrong at ${action.endpoint}.`, { cause: { queryResult } })
  }

  return queryResult
}

export default useAppQuery
