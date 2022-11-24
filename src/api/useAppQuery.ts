import { useQuery, UseQueryOptions } from "@tanstack/react-query"
import { toast } from "react-toastify"

import { buildQueryActionURL, isResponseOk, QueryError } from "./helpers"
import { useUserJWT } from "./hooks/useUserToken"
import { QueryAction, QueryResponse } from "./types"

async function fetchAction(action: QueryAction): Promise<Response> {
  const url = buildQueryActionURL(action)

  return fetch(url, {
    method: action.method,
    body: action.body ? JSON.stringify(action.body) : undefined,
    headers: {
      "Content-Type": "application/json",
      ...action.headers
    }
  })
}

/**
 * Currenly supports only `JSON` content type.
 */
async function handleResponse<T>(response: Response, action: QueryAction<T>): Promise<QueryResponse<T>> {
  if (!response.headers.get("content-type")?.startsWith("application/json")) {
    throw new QueryError("Content Type is not of JSON types.", { cause: { response, action } })
  }

  try {
    const payload = await response.json()
    return {
      nativeResponse: response,
      status: response.status,
      headers: response.headers,
      payload
    }
  } catch (error) {
    if (error instanceof Error) {
      return {
        nativeResponse: response,
        status: response.status,
        error
      }
    }

    throw error
  }
}

export async function appQuery<T>(action: QueryAction<T>): Promise<QueryResponse<T>> {
  try {
    const response = await fetchAction(action)
    const queryResponse = await handleResponse(response, action)


    if (!isResponseOk(queryResponse)) {
      throw new QueryError("Query Response is not ok.")
    }

    return queryResponse
  } catch (error) {
    if (error instanceof Error) {
      return { error }
    }

    throw error
  }
}

function useAppQuery<T>(action: QueryAction<T>, options?: Omit<UseQueryOptions<QueryResponse<T>>, "queryFn" | "queryKey">) {
  const userJWT = useUserJWT()

  return useQuery<QueryResponse<T>>([action.endpoint], {
    ...options,
    refetchInterval: userJWT?.expiryTime,
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
      if (userJWT?.authorization) {
        action.headers ||= {}
        action.headers["Authorization"] = userJWT.authorization
      }

      const response = await appQuery(action)
      if (response.error) {
        throw response.error
      }

      return response
    },
    onError(error) {
      if (error instanceof Error) {
        toast.error("Error while fetching request: " + error.message)
        return
      }
      toast.error("Error while fetching request.")
    },
  })
}

export default useAppQuery
