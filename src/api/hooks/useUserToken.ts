import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { useLocalStorage } from "react-use"
import { useJWT } from "utils/transform/jwt"

/**
 * Access user's token (as a `string`).
 * 
 * Checks if it's presented in `search query` and `localStorage`.
 * 
 * If it's presented in `search query`, it will be saved to `localStorage`
 * and `token` field will be removed from `search query`.
 */
function useUserToken(): string | undefined {
  const [searchParams, setSearchParams] = useSearchParams()
  const [userToken, setUserToken] = useLocalStorage<string>("user-token")

  useEffect(() => {
    const tokenParam = searchParams.get("token")
    if (tokenParam === null) return

    setUserToken(tokenParam)

    // Remove `token` from search params.
    searchParams.delete("token")
    setSearchParams(searchParams)
  }, [searchParams])

  return userToken
}

export function useUserJWT() {
  const userToken = useUserToken()
  const userJWT = useJWT(userToken)

  return userJWT
}

export default useUserToken
