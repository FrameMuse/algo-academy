import "./Headings.scss"

import { ReactNode } from "react"
import { classMerge, classWithModifiers } from "utils/common"

interface HeadingsProps {
  white?: boolean
  className?: string
  children: ReactNode
}

function Headings(props: HeadingsProps) {
  return (
    <div className={classMerge(classWithModifiers("headings", props.white && "white"), props.className)}>
      {props.children}
    </div>
  )
}

export default Headings
