import "./Box.scss"

import { HTMLAttributes } from "react"
import { classMerge, classWithModifiers } from "utils/common"

interface BoxProps extends HTMLAttributes<HTMLElement> {
  color?: "gray"
}

function Box(props: BoxProps) {
  return (
    <div {...props} className={classMerge(classWithModifiers("box", props.color), props.className)} />
  )
}

export default Box
