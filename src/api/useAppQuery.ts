import { useQuery, UseQueryOptions } from "@tanstack/react-query"

import appQuery from "./appQuery"
import { getActionQueryKey, QueryClientError } from "./helpers"
import { QueryAction, QueryResponse } from "./types"

function useAppQuery<T>(action: QueryAction<T>, options?: Omit<UseQueryOptions<QueryResponse<T>>, "queryFn" | "queryKey">) {
  return useQuery<QueryResponse<T>>(getActionQueryKey(action), {
    cacheTime: Number(process.env.REACT_APP_API_CACHE_TIME),
    refetchOnWindowFocus: () => false,
    retry(_failureCount, error) {
      if (error instanceof QueryClientError) {
        return false
      }

      return true
    },
    /**
     * Try every 10, 20, 30, ... "seconds", depending on `failureCount`.
     * 
     * if `failureCount` more than 50, retry delay clumps to 5 "minutes".
     */
    retryDelay(failureCount) {
      if (failureCount > 50) {
        return 10 * 1000 * 60 // 5 minutes
      }

      return failureCount * 5 * 1000
    },
    queryFn: async () => {
      const response = await appQuery(action)
      if (response.error) {
        throw response.error
      }

      return response
    },
    ...options
  })
}

export default useAppQuery
