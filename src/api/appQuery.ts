import { toast } from "react-toastify"
import { isDictionary } from "utils/common"
import FileTransform from "utils/transform/file"
import JWT from "utils/transform/jwt"

import { buildActionURL, isResponseOk, QueryError } from "./helpers"
import { QueryAction, QueryResponse } from "./types"

// eslint-disable-next-line @typescript-eslint/ban-types
function bodyTransform(body: unknown, type: ("multipart/form-data" | "application/json") | (string & {})): FormData | string | null {
  if (body == null) return null

  if (type === "multipart/form-data") {
    if (!isDictionary(body)) throw new Error("Not implemented.")

    const formData = new FormData
    try {
      mapFormData(body).forEach(([key, value]) => {
        formData.append(key, value)
      })
    } catch (error) {
      console.log(error)
    }
    // throw new Error
    return formData
  }

  if (type === "application/json") {
    if (typeof body === "string") {
      return body
    }

    if (isDictionary(body)) {
      return JSON.stringify(body)
    }
  }

  throw new Error("Not implemented.")
}

function mapFormData(value: unknown, key?: string | number): [string, Blob | string][] {
  const result: [string, Blob | string][] = []
  console.log(value)
  if (typeof value === "string") {
    if (/^data:.*?;base64,.*$/gi.test(value)) {
      const file = FileTransform.dataURIToBlob(value)

      if (key) {
        result.push([String(key), file])
        return result
      }
    }
  }

  if (value instanceof Array) {
    value.forEach(value2 => {
      const key2 = (key ?? "") + "[]"

      // result.push([key2, (value instanceof Blob) ? value : String(value)])
      // console.log(value2, typeof value2 === "object")
      result.push(...((typeof value2 === "object") ? mapFormData(value2, key2) : [[key2, value2]] as never))
    })
    return result
  }

  if (isDictionary(value)) {
    Object.keys(value).forEach(key2 => {
      const value2 = value[key2]
      const key3 = key ? `${key}[${key2}]` : key2
      // console.log(mapFormData(value2, key3))
      result.push(...mapFormData(value2, key3))
    })
    return result
  }

  result.push([String(key ?? ""), (value instanceof Blob) ? value : String(value)])
  // console.log(result)
  return result
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

  return fetch(url, {
    method: action.method,
    body,
    headers: action.headers
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

async function appQuery<T>(action: QueryAction<T>): Promise<QueryResponse<T>> {
  try {
    // Parsing user's JWT token
    const userToken = localStorage.getItem("user-token")
    const userTokenParsed = JSON.parse(userToken ?? "") as string

    const userJWT = new JWT(userTokenParsed)

    // Create new instance to make sure we're not changing original `action` object.
    // Set it to the action headers.
    action = { ...action }
    action.headers ||= {}
    action.headers.Authorization ||= userJWT.authorization


    // Other doings...
    const response = await fetchAction(action)
    const queryResponse = await handleResponse(response, action)

    if (!isResponseOk(queryResponse)) {
      throw new QueryError("Query Response is not ok.")
    }

    return queryResponse
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error(error)
    }

    if (error instanceof Error) {
      toast.error("Error while fetching request: " + error.message)

      return { error }
    }

    throw error
  }
}

export default appQuery
