import { ReactNode, useContext } from "react"

import tabRouterContext from "./tabRouterContext"

interface TabRouteProps {
  path: string
  children: ReactNode
}

function TabRoute(props: TabRouteProps) {
  const [tab] = useContext(tabRouterContext)

  if (tab !== props.path) {
    return null
  }

  return <>{props.children}</>
}

export default TabRoute
