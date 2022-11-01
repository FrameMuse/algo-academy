import "./Box.scss"

import { HTMLAttributes } from "react"
import { classMerge } from "utils/common"

interface BoxProps extends HTMLAttributes<HTMLElement> { }

function Box(props: BoxProps) {
  return (
    <div {...props} className={classMerge("box", props.className)} />
  )
}

export default Box
