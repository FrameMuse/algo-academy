import { QueryObserverLoadingResult, QueryObserverSuccessResult, useQuery, UseQueryOptions } from "@tanstack/react-query"

import appQuery from "./appQuery"
import { getActionQueryKey } from "./helpers"
import { QueryAction, QueryResponse } from "./types"

function useAppQuery<T, E>(action: QueryAction<T>, options?: Omit<UseQueryOptions<QueryResponse<T>, E>, "queryFn" | "queryKey">):
  NonNullable<typeof options>["enabled"] extends true ? QueryObserverLoadingResult<QueryResponse<T>, E> : QueryObserverSuccessResult<QueryResponse<T>, E> {
  const queryResult = useQuery<QueryResponse<T>, E>({
    ...options,

    suspense: true,
    useErrorBoundary: true,

    queryKey: getActionQueryKey(action),
    queryFn: () => appQuery(action)
  })

  if (queryResult.status === "loading") {
    if (options?.enabled === false) {
      return queryResult as never
    }
  }

  if (queryResult.status !== "success") {
    throw new Error("Something went wrong.", { cause: { queryResult } })
  }

  return queryResult
}

export default useAppQuery
