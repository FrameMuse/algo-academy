import "./Box.scss"

import { ReactNode } from "react"

interface BoxProps {
  children: ReactNode
}

function Box(props: BoxProps) {
  return (
    <div className="box">{props.children}</div>
  )
}

export default Box
