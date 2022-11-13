import "./Buttons.scss"

import { ReactNode } from "react"
import { classWithModifiers } from "utils/common"

interface ButtonsProps {
  children: ReactNode
  spaceBetween?: boolean
}

function Buttons(props: ButtonsProps) {
  return (
    <div className={classWithModifiers("buttons", props.spaceBetween && "space-between")}>{props.children}</div>
  )
}

export default Buttons
