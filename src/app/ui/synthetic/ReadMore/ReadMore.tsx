import "./ReadMore.scss"

import { ReactNode, useState } from "react"
import { toggleState } from "utils/common"

import Expander from "../Expander/Expander"

interface ReadMoreProps {
  children: ReactNode
}

function ReadMore(props: ReadMoreProps) {
  const [expanded, setExpanded] = useState(false)

  const buttonText = expanded ? "show less" : "read more"
  return (
    <>
      <button className="read-more" type="button" onClick={toggleState(setExpanded)}>{buttonText}</button>
      <Expander expanded={expanded}>
        {props.children}
      </Expander>
    </>
  )
}

export default ReadMore
