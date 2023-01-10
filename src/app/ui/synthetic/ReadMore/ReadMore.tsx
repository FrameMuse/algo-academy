import "./ReadMore.scss"

import { ReactNode, useState } from "react"
import { toggleState } from "utils/common"

import Expander from "../Expander/Expander"

interface ReadMoreProps {
  children: ReactNode
  /**
   * @default
   * "..."
   */
  splitter?: string
}

function ReadMore(props: ReadMoreProps) {
  const [expanded, setExpanded] = useState(false)

  const buttonText = expanded ? "read less" : "read more"
  return (
    <div className="read-more">
      <span hidden={expanded}>{props.splitter ?? "..."}</span>
      {" "}
      <button className="read-more__button" type="button" onClick={toggleState(setExpanded)}>{buttonText}</button>
      <Expander expanded={expanded}>
        {props.children}
      </Expander>
    </div>
  )
}

export default ReadMore
