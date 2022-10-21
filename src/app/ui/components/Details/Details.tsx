import "./Details.scss"

import { ReactNode, useEffect, useRef, useState } from "react"
import { classWithModifiers } from "utils/common"
import { humanizeDate } from "utils/date"

import Icon from "../Icon/Icon"

interface DetailsProps {
  date?: Date
  summary: ReactNode
  children: ReactNode
}

function Details(props: DetailsProps) {
  const innerRef = useRef<HTMLDivElement>(null)
  const [expanded, setExpanded] = useState(false)
  const [height, setHeight] = useState<number>()
  useEffect(() => {
    if (!innerRef.current) return
    setHeight(innerRef.current.scrollHeight)
  }, [])
  return (
    <div className="details" aria-expanded={expanded}>
      <div className="details__header" onClick={() => setExpanded(!expanded)}>
        <div className="details__left">
          {props.date && (
            <div className="details__date">{humanizeDate("ru", props.date)}</div>
          )}
          <div className="details__summary">{props.summary}</div>
        </div>
        <div className="details__right" onClick={() => setExpanded(!expanded)}>
          <Icon className={classWithModifiers("details__chevron", expanded && "up")} name="chevron" />
          <Icon className="details__more" name="ch" />
        </div>
      </div>
      <div className={classWithModifiers("details__body", expanded && "expanded")} style={{ "--details-height": height }} aria-hidden={!expanded}>
        <div className="details__inner" ref={innerRef}>{props.children}</div>
      </div>
    </div>
  )
}

export default Details
