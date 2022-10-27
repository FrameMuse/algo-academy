import "./Details.scss"

import { ReactNode, useEffect, useRef, useState } from "react"
import { classWithModifiers } from "utils/common"


interface DetailsProps {
  defaultExapded?: boolean
  summary: ReactNode
  children: ReactNode
}

function Details(props: DetailsProps) {
  const innerRef = useRef<HTMLDivElement>(null)
  const [expanded, setExpanded] = useState<boolean>(props.defaultExapded ?? false)
  const [height, setHeight] = useState<number>()
  useEffect(() => {
    if (!innerRef.current) return
    setHeight(innerRef.current.scrollHeight)
  }, [expanded])
  return (
    <div className="details" aria-expanded={expanded}>
      <div className="details__summary" onClick={() => setExpanded(!expanded)}>
        <div className="details__text">{props.summary}</div>
      </div>
      <div className={classWithModifiers("details__body", expanded && "expanded")} style={{ "--details-height": height }} aria-hidden={!expanded}>
        <div className="details__inner" ref={innerRef}>{props.children}</div>
      </div>
    </div>
  )
}

export default Details
