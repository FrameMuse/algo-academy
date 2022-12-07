import PopupUserAuth from "app/areas/user/popups/PopupUserAuth"
import Column from "app/layouts/Column/Column"
import Headings from "app/layouts/Headings/Headings"
import Button from "app/ui/kit/Button/Button"
import ErrorCover from "app/ui/synthetic/ErrorCover/ErrorCover"
import LoaderCover from "app/ui/synthetic/Loader/LoaderCover"
import { ReactNode, Suspense } from "react"
import { Modal } from "react-modal-global"
import { useAppSelector } from "store/hooks"
import { UserType } from "store/reducers/user/types"

import ErrorBoundary from "./ErrorBoundary/ErrorBoundary"

interface QueryBoundaryProps {
  /**
   * - When providen `UserType`, will check if user is signed in and compare user type.
   * - When provided `boolean`, will only check if user is signed in.
   */
  userType?: UserType | boolean
  children: ReactNode
}

/**
 * Provides:
 * - Error boundary
 * - Suspense boundary
 * - User access level boundary
 */
function QueryBoundary(props: QueryBoundaryProps) {
  const errorDefinedFallback = (error: Error) => (
    <ErrorCover>
      <Column justifyItems="center">
        <Headings>
          <h4>{error.name}</h4>
          <p>{error.message}</p>
        </Headings>
      </Column>
    </ErrorCover>
  )
  const errorUnknownFallback = (
    <ErrorCover>
      <Column justifyItems="center">
        <Headings>
          <h4>Error</h4>
          <p>Something went wrong.</p>
        </Headings>

        <p>Try again in a few minutes.</p>
      </Column>
    </ErrorCover>
  )
  const suspenseFallback = <LoaderCover />

  const user = useAppSelector(state => state.user)
  const userGuestFallback = (
    <div style={{ margin: "0 auto", textAlign: "center" }}>
      <Column justifyItems="center">
        <Headings>
          <h4>{"You're"} not signed</h4>
          <p>To start, please, log in.</p>
        </Headings>

        <Button onClick={() => Modal.open(PopupUserAuth)}>Log In</Button>
      </Column>
    </div>
  )
  const userLackOfAcessFallback = (
    <div style={{ margin: "0 auto", textAlign: "center" }}>
      <Column justifyItems="center">
        <Headings>
          <h4>Access dinied</h4>
          <p>You lack of access rights.</p>
        </Headings>
      </Column>
    </div>
  )

  if (props.userType != null) {
    if (!user.signed) return userGuestFallback

    if (typeof props.userType === "number") {
      if (user.type < props.userType) return userLackOfAcessFallback
    }
  }

  return (
    <ErrorBoundary fallback={(_reset, error) => error ? errorDefinedFallback(error) : errorUnknownFallback}>
      <Suspense fallback={suspenseFallback}>
        {/* <UserBoundary fallback={userFallback} userType={props.userType}> */}
        {props.children}
        {/* </UserBoundary> */}
      </Suspense>
    </ErrorBoundary >
  )
}

export default QueryBoundary
