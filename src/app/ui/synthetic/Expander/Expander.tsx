import "./Expander.scss"

import { ReactNode, useEffect, useRef, useState } from "react"
import { classMerge, classWithModifiers } from "utils/common"

interface ExpanderProps {
  className?: string
  noTransition?: boolean

  expanded: boolean
  children: ReactNode
}

function Expander(props: ExpanderProps) {
  const innerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState<number | undefined>()

  useEffect(() => {
    if (!innerRef.current) return

    const minimalHeight = Math.min(innerRef.current.scrollHeight, innerRef.current.clientHeight, innerRef.current.offsetHeight)
    setHeight(minimalHeight)
  }, [props.expanded, props.children])

  return (
    <div className={classWithModifiers("expander", props.expanded && "expanded", props.noTransition && "no-transition")} aria-hidden={!props.expanded} style={{ "--height": height }}>
      <div className={classMerge("expander__inner", props.className)} ref={innerRef}>
        {props.children}
      </div>
    </div>
  )
}

export default Expander
