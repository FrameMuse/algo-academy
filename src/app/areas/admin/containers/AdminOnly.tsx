import { ReactNode } from "react"
import { useAppSelector } from "store/hooks"
import { UserType } from "store/reducers/user/types"

interface AdminOnlyProps {
  children: ReactNode
}

function AdminOnly(props: AdminOnlyProps) {
  const user = useAppSelector(state => state.user)

  console.log(user)

  if (!user.signed) return null
  if (user.type < UserType.Admin) return null

  return <>{props.children}</>
}

export default AdminOnly
