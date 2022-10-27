import "./FAQ.scss"

import { ReactNode } from "react"

export function FAQ(props: { children: ReactNode }) {
  return (
    <div className="faq">{props.children}</div>
  )
}

export default FAQ