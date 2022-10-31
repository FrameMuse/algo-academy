import "./FAQ.scss"

import Icon from "app/ui/kit/Icon/Icon"
import { ReactNode, useLayoutEffect, useRef, useState } from "react"
import { classWithModifiers } from "utils/common"

interface FAQClauseProps {
  summary: ReactNode
  children: ReactNode
}

function FAQClause(props: FAQClauseProps) {
  const innerRef = useRef<HTMLDivElement>(null)
  const [expanded, setExpanded] = useState<boolean>(false)
  const [height, setHeight] = useState<number | undefined>()

  useLayoutEffect(() => {
    if (!innerRef.current) return

    setHeight(innerRef.current.scrollHeight)
  }, [expanded])

  return (
    <div className="faq__clause" aria-expanded={expanded}>
      <div className={classWithModifiers("faq__summary", expanded && "expanded")} onClick={() => setExpanded(!expanded)} aria-details="Toggle content display">
        <Icon name={expanded ? "minus" : "plus"} className="faq__icon" />
        <div className="faq__title">{props.summary}</div>
      </div>
      <div className={classWithModifiers("faq__content", expanded && "expanded")} style={{ "--height": height }} aria-hidden={!expanded}>
        <div className="faq__inner" ref={innerRef}>{props.children}</div>
      </div>
    </div>
  )
}

export default FAQClause
