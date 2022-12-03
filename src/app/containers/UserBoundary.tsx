import { ReactNode } from "react"
import { useAppSelector } from "store/hooks"
import { UserType } from "store/reducers/user/types"

export interface UserBoundaryProps {
  /**
   * The minumin user privileges that user should have to get access.
   * 
   * `undefined` means any user (including anonymous).
   */
  userType?: UserType
  fallback?: ReactNode
  children: ReactNode
}

function UserBoundary(props: UserBoundaryProps) {
  const user = useAppSelector(state => state.user)

  if (props.userType && user.type < props.userType) {
    return <>{props.fallback}</>
  }

  return <>{props.children}</>
}

export default UserBoundary
