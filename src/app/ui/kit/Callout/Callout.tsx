import "./Callout.scss"

import { ReactNode } from "react"

interface CalloutProps {
  children: ReactNode
}

function Callout(props: CalloutProps) {
  return (
    <div className="callout">{props.children}</div>
  )
}

export default Callout
