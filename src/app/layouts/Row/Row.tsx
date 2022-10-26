import "./Row.scss"

import { CSSProperties, ReactNode } from "react"

interface RowProps {
  alignItems?: CSSProperties["alignItems"]
  children: ReactNode
}

function Row(props: RowProps) {
  return (
    <div className="row" style={{ alignItems: props.alignItems }}>{props.children}</div>
  )
}

export default Row
