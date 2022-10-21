import "./FAQ.scss"

import { ReactNode, useEffect, useRef, useState } from "react"
import { classWithModifiers } from "utils/common"

interface FAQClauseProps {
  summary: ReactNode
  children: ReactNode
}

function FAQClause(props: FAQClauseProps) {
  const innerRef = useRef<HTMLDivElement>(null)
  const [expanded, setExpanded] = useState<boolean>(false)
  const [height, setHeight] = useState<number | undefined>()
  useEffect(() => {
    if (!innerRef.current) return
    setHeight(innerRef.current.scrollHeight)
  }, [])
  return (
    <div className="faq__clause" aria-expanded={expanded}>
      <div className="faq__summary" aria-details="show more" onClick={() => setExpanded(!expanded)}>
        <div className="faq__title">{props.summary}</div>
      </div>
      <div className={classWithModifiers("faq__content", expanded && "expanded")} aria-hidden={!expanded} style={{ "--height": height }}>
        <div className="faq__inner" ref={innerRef}>{props.children}</div>
      </div>
    </div>
  )
}

export default FAQClause
