import { useEffect, useState } from "react"
import JWT from "utils/transform/jwt"

import useUserToken from "./useUserToken"

/**
 * User's **JWT** token.
 */
function useUserJWT<T>(): JWT<T> | null {
  const [jwt, setJwt] = useState<JWT<T> | null>(null)
  const userToken = useUserToken()

  useEffect(() => {
    if (userToken == null) return

    setJwt(new JWT(userToken))
  }, [userToken])

  return jwt

  // Setup interval to refetch an access token.
  //
  // An alternative would be to do this on demand when fetching from authed API endpoints
  // if our current token has expired...
  //
  // But this would increase latency when its actually needed and
  // we'd need to be careful to avoid multiple simultanious refreshes if fetching
  // multiple endpoints asyncronously.
  // useEffect(() => {
  //   // mutable box for the current timer reference
  //   const curTimer: { current?: number } = {}

  //   // callback that does the update...
  //   function updater() {
  //     doRefresh()
  //       .then((token) => {
  //         // don't try to perform more refreshes if this one failed
  //         if (!token) { return }

  //         curTimer.current = window.setTimeout(updater, _getJwtTimeToExp(token) - 10000)
  //       })
  //   }

  //   // trigger the first update just before the current JWT expires
  //   curTimer.current = window.setTimeout(updater, _getJwtTimeToExp(jwtRef.current) - 10000)

  //   // clear the active timer on unmount of HOC
  //   return () => window.clearTimeout(curTimer.current)
  // }, [])



  /**
   * Helper function which fetches an updated access token from API by swapping the
   * refresh token for a jwt. This will need to be called periodically
   * to ensure the access token does not expire
   */
  // try {
  //   const data = await res.json()
  //   if (data.jwt && data.profile) {
  //     // pass through old value if profile is unchanged - since we don't
  //     // want to re-render when just fetching a jwt
  //     setNetState((old) => !old.profile || old.profile.id !== data.profile.id ? { profile: data.profile } : old)
  //     return data.jwt
  //   } else {
  //     setNetState({ error: data.error || "Unknown auth error - response code: " + res.status })
  //   }
  // } catch (e) {
  //   // then the response was NOT a json object
  //   setNetState({ error: "Invalid response from auth server" })
  // }
  return null
}
