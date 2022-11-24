import { APIActions } from "api/data"
import { buildQueryActionURL } from "api/helpers"

type AuthType = "github" | "google" | "facebook"

function useUserGetAuthLink(): (type: AuthType) => string {
  function getAuthLink(type: AuthType) {
    let action = APIActions.getOauth2Google()
    if (type === "github") {
      action = APIActions.getOauth2Github()
    }
    if (type === "facebook") {
      action = APIActions.getOauth2Facebook()
    }

    const url = buildQueryActionURL(action)
    return url.toString()
  }

  return getAuthLink
}

export default useUserGetAuthLink
