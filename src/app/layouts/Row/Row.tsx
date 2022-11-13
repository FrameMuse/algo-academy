import "./Row.scss"

import { CSSProperties, ReactNode } from "react"

interface RowProps {
  justifyContent?: CSSProperties["justifyContent"]
  alignItems?: CSSProperties["alignItems"]
  children: ReactNode
}

function Row(props: RowProps) {
  return (
    <div className="row" style={{ justifyContent: props.justifyContent, alignItems: props.alignItems }}>{props.children}</div>
  )
}

export default Row
