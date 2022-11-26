import { Buffer } from "buffer"
import { useMemo } from "react"

interface JWTPayload {
  token_type: "Bearer"

  iat: number // in seconds
  exp: number // in seconds
}

/**
 * The JWT used to make authenticated requests to API endpoints.
 */
class JWT<P = unknown> {
  payload: JWTPayload & P
  /**
   * `Authorization` header.
   */
  authorization: string

  constructor(readonly token: string) {
    this.payload = Object.freeze(JWT.parse<P>(token))
    this.authorization = `${this.payload.token_type} ${token}`
  }

  /**
   * Gets how long is **remaining** (in milliseconds) until a JWT expires.
   */
  get expiryTime(): number {
    const now = Date.now()
    const expireTime = this.payload.exp * 1000

    return expireTime - now
  }

  /**
   * Computes how long is remaining (in milliseconds) until a JWT expires.
   */
  public static getTimeToExpire(jwt?: string | null): number {
    if (!jwt) { return 30000 } // default to 5 minutes

    const now = Date.now()
    let exp
    try {
      const payload = JWT.parse(jwt)
      exp = payload.exp * 1000
    } catch (e: any) {
      console.error(e)
      exp = now + 30000 // default to 5 minutes from now
    }
    return exp - now
  }

  /**
   * Parses a JWT and returns the payload as a JSON object.
   *
   * Note that this function does NOT validate the signature, or any of the fields within the payload
   * (such as expiry)! However, it can be useful as a client side sanity check that the JWT is valid
   * and has the expected data in payload -> before submission to server for actual verification.
   *
   * Will throw if input is not parseable as a valid JWT.
   * 
   * https://stackoverflow.com/questions/38552003/how-to-decode-jwt-token-in-javascript-without-using-a-library
   */
  public static parse<T>(token: string): JWTPayload & T {
    const tokenParts = token.split(".")
    if (tokenParts.length < 3) {
      throw new Error("ParsingError: Wrong JWT token format.", { cause: { token } })
    }

    return JSON.parse(Buffer.from(tokenParts[1], "base64").toString())
  }
}

/**
 * User's **JWT** token.
 */
export function useJWT<T>(token?: string | null): JWT<T> | null {
  return useMemo(() => {
    if (token == null) return null

    return new JWT(token)
  }, [token])
}

export default JWT
