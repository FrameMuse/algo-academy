import { HTMLAttributes, useContext } from "react"
import { classWithModifiers } from "utils/common"

import tabRouterContext from "./tabRouterContext"

interface TabLinkProps extends HTMLAttributes<HTMLButtonElement> {
  to: string
}

function TabLink(props: TabLinkProps) {
  const [tab, setTab] = useContext(tabRouterContext)

  // return cloneElement(props.children, {
  //   onClick: () => setTab(props.to)
  // })

  const className = props.className && classWithModifiers(props.className, props.to === tab && "active")

  return (
    <button type="button" {...props} className={className} onClick={() => setTab(props.to)}>
      {props.children}
    </button>
  )
}

export default TabLink
