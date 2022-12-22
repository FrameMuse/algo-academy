import "./Code.scss"

import useTheme from "app/ui/synthetic/Theme/useTheme"
import { ReactNode } from "react"
import { classWithModifiers } from "utils/common"

interface CodeInlineProps {
  children: ReactNode
}

function CodeInline(props: CodeInlineProps) {
  const theme = useTheme()

  return (
    <code className={classWithModifiers("code-inline", theme === "dark" && "dark")}>{props.children}</code>
  )
}

export default CodeInline
