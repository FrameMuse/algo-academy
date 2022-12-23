import { QueryClient } from "@tanstack/react-query"
import _ from "lodash"
import { toast } from "react-toastify"

import { QueryClientError } from "./helpers"

const cacheTime = process.env.NODE_ENV === "development" ? 0 : Number(process.env.REACT_APP_API_CACHE_TIME)

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime,
      staleTime: cacheTime,

      suspense: true,
      useErrorBoundary: true,

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
      onError(error) {
        if (error instanceof QueryClientError) {
          toast.error(`[${_.startCase(error.action.operationId)}] - ${error.message}`)

          return { error }
        }

        if (error instanceof Error) {
          toast.error("Query Error: " + error.message)

          return { error }
        }
      },
    }
  }
})
export default queryClient
