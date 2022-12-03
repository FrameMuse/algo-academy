import { QueryClient } from "@tanstack/react-query"

import { QueryClientError } from "./helpers"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
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
      }
    }
  }
})
export default queryClient
