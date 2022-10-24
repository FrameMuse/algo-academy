import { NavLink, NavLinkProps } from "react-router-dom"
import { classWithModifiers } from "utils/common"

interface ClassNameState {
  isActive: boolean
  isPending: boolean
}

interface AppNavLinkProps extends NavLinkProps {
  className?: string
}

function AppNavLink(props: AppNavLinkProps) {
  function className({ isActive, isPending }: ClassNameState): string | undefined {
    if (props.className == null) return

    return classWithModifiers(props.className, isActive && "active", isPending && "pending")
  }

  return (
    <NavLink {...props} className={className} />
  )
}

export default AppNavLink
