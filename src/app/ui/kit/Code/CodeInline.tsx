import "./Code.scss"

import { ReactNode } from "react"

interface CodeInlineProps {
  children: ReactNode
}

function CodeInline(props: CodeInlineProps) {
  return (
    <code className="code-inline">{props.children}</code>
  )
}

export default CodeInline
