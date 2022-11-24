import { useQuery, UseQueryOptions } from "@tanstack/react-query"

import appQuery from "./appQuery"
import { QueryError } from "./helpers"
import { QueryAction, QueryResponse } from "./types"

function useAppQuery<T>(action: QueryAction<T>, options?: Omit<UseQueryOptions<QueryResponse<T>>, "queryFn" | "queryKey">) {
  return useQuery<QueryResponse<T>>([action.endpoint], {
    ...options,
    refetchOnWindowFocus: () => false,
    retry(_failureCount, error) {
      return !(error instanceof QueryError)
    },
    retryDelay(failureCount) {
      if (failureCount > 3) {
        return failureCount * 5 * 1000
      }

      if (failureCount > 50) {
        return 5 * 1000 * 60 // 5 minutes
      }

      return 3 * 1000
    },
    queryFn: async () => {
      const response = await appQuery(action)
      if (response.error) {
        throw response.error
      }

      return response
    },
    onError(error) {
      options?.onError?.(error)

      // if (error instanceof Error) {
      //   toast.error("Error while fetching request: " + error.message)
      //   return
      // }
      // toast.error("Error while fetching request.")
    },
  })
}

export default useAppQuery
