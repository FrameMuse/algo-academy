import "./Box.scss"

import { HTMLAttributes } from "react"

interface BoxProps extends HTMLAttributes<HTMLElement> { }

function Box(props: BoxProps) {
  return (
    <div {...props} className="box" />
  )
}

export default Box
