import "./ReadMore.scss"

import { ReactNode, useState } from "react"
import { toggleState } from "utils/common"

import Expander from "../Expander/Expander"

interface ReadMoreProps {
  children: ReactNode
  /**
   * After expanding, the button will not appear again.
   * 
   * @default true
   */
  stayExpanded?: boolean
}

function ReadMore(props: ReadMoreProps) {
  const [expanded, setExpanded] = useState(false)

  const stayExpanded = props.stayExpanded ?? true

  const buttonText = expanded ? "read less" : "read more"
  return (
    <>
      <button className="read-more" type="button" hidden={stayExpanded && expanded} onClick={toggleState(setExpanded)}>{buttonText}</button>
      <Expander expanded={expanded} noTransition={stayExpanded}>
        {props.children}
      </Expander>
    </>
  )
}

export default ReadMore
