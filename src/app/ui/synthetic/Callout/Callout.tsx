import "./Callout.scss"

import { ReactNode } from "react"
import { classWithModifiers } from "utils/common"

interface CalloutProps {
  color?: "red"
  children: ReactNode
}

function Callout(props: CalloutProps) {
  return (
    <div className={classWithModifiers("callout", props.color)}>{props.children}</div>
  )
}

export default Callout
