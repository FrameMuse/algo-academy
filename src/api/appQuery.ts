import _ from "lodash"
import { toast } from "react-toastify"
import { isDictionary } from "utils/common"
import JWT from "utils/transform/jwt"

import { buildActionURL, isResponseOk, QueryClientError, QueryError, QueryServerError } from "./helpers"
import { QueryAction, QueryResponse } from "./types"

// eslint-disable-next-line @typescript-eslint/ban-types
function bodyTransform(body: unknown, type: ("multipart/form-data" | "application/json") | (string & {})): FormData | string | null {
  if (body == null) return null

  if (type === "multipart/form-data") {
    if (body instanceof FormData) {
      return body
    }

    if (!isDictionary(body)) throw new Error("Not implemented.")
  }

  if (type === "application/json") {
    if (typeof body === "string") {
      return body
    }

    if (isDictionary(body) || body instanceof Array) {
      return JSON.stringify(body)
    }
  }

  throw new Error("Not implemented.")
}

function resolveActionBody(action: QueryAction) {
  if (action.body == null) return null

  const contentType = action.headers?.["Content-Type"] ?? "application/json"
  return bodyTransform(action.body, contentType)
}

function resolveActionContentType(contentType?: QueryAction["contentType"]) {
  if (contentType === "formData") {
    return "multipart/form-data"
  }

  return "application/json"
}

async function fetchAction(action: QueryAction): Promise<Response> {
  // Create new instance to make sure we're not changing original `action` object.
  action = { ...action }
  action.headers ||= {}
  action.headers["Content-Type"] ||= resolveActionContentType(action.contentType)

  const url = buildActionURL(action)
  const body = resolveActionBody(action)

  if (body instanceof FormData) {
    // Remove `Content-Type` when `body` is `FormData` to make browser put `boundary` by itself.
    // https://stackoverflow.com/questions/39280438/fetch-missing-boundary-in-multipart-form-data-post
    delete action.headers["Content-Type"]
  }

  return fetch(url, {
    method: action.method,
    body,
    headers: action.headers
  })
}

/**
 * Currenly supports only `JSON` content type for response.
 */
async function handleResponse<T>(response: Response, action: QueryAction<T>): Promise<QueryResponse<T>> {
  const queryResponse: QueryResponse<T> = {
    nativeResponse: response,
    status: response.status,
    headers: response.headers,
    payload: {} as any
  }

  // Empty responses.
  if ([203, 204].includes(response.status)) {
    return queryResponse
  }


  // Check if contentful responses have correct content type.
  if (!response.headers.get("content-type")?.startsWith("application/json")) {
    throw new QueryError("Content Type is not of JSON types.", { cause: { response, action } })
  }

  try {
    const payload = await response.json()
    return {
      ...queryResponse,
      payload
    }
  } catch (error) {
    if (error instanceof Error) {
      return {
        ...queryResponse,
        error
      }
    }

    throw error
  }
}

/**
 * Parsing user's JWT token.
 */
function getAuthorization() {
  try {
    const userToken = localStorage.getItem("user-token")
    const userTokenParsed = JSON.parse(userToken ?? `""`) as string

    const userJWT = new JWT(userTokenParsed)
    return userJWT.authorization
  } catch (error) {
    console.error(error)

    return ""
  }
}

async function appQuery<T>(action: QueryAction<T>): Promise<QueryResponse<T>> {
  try {
    // Create new instance to make sure we're not changing original `action` object.
    // Set authorization to the action headers.
    action = { ...action }
    action.headers ||= {}
    action.headers.Authorization ||= getAuthorization()


    // Other doings...
    const response = await fetchAction(action)
    const queryResponse = await handleResponse(response, action)


    if (response.status >= 500) {
      throw new QueryServerError(action, queryResponse)
    }

    if (response.status >= 400) {
      throw new QueryClientError(action, queryResponse)
    }


    if (!isResponseOk(queryResponse, true)) {
      throw new QueryError("Query Response is not ok.")
    }

    return queryResponse
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[DEVELOPMENT ONLY ERROR]", error)
    }

    if (error instanceof QueryClientError) {
      toast.error(`[${_.startCase(action.operationId)}]: ${error.message}`)

      throw error
    }

    if (error instanceof QueryServerError) {
      toast.error(`Server error: ${error.message}`)

      throw error
    }

    if (error instanceof Error) {
      toast.error(error.message)

      throw error
    }

    throw error
  }
}

export default appQuery
