import "./Column.scss"

import { CSSProperties, ReactNode } from "react"

interface ColumnProps {
  justifyItems?: CSSProperties["alignItems"]
  children: ReactNode
}

function Column(props: ColumnProps) {
  return (
    <div className="column" style={{ justifyItems: props.justifyItems }}>{props.children}</div>
  )
}

export default Column
