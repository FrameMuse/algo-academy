import "./Templates.scss"

import TabLinks from "app/layouts/TabLinks/TabLinks"
import Button from "app/ui/kit/Button/Button"
import useTheme from "app/ui/synthetic/Theme/useTheme"
import { useState } from "react"
import { classWithModifiers } from "utils/common"
import useAppCopyToClipboard from "utils/hooks/useAppCopyToClipboard"

import { WorkspaceCode } from "../.."

interface Snippet {
  label: string
  content: string
  runTime: string
  space: string
}

interface TemplatesProps {
  snippets: Snippet[]
}

/**
 * TODO: Rename other related things to `Snippets` insteand of `Templates`.
 */
function Snippets(props: TemplatesProps) {
  const theme = useTheme()

  const [activeIndex, setActiveIndex] = useState<number>(0)

  const template = props.snippets[activeIndex] as Snippet | undefined
  if (template == null) return null

  const { copyToClipboard } = useAppCopyToClipboard()
  return (
    <div className={classWithModifiers("templates", theme)}>
      <div className="templates__menu">
        <TabLinks>
          {props.snippets.map((template, index) => (
            <button
              className={classWithModifiers("tab-links__link", index === activeIndex && "active")}
              type="button"
              onClick={() => setActiveIndex(index)}
              key={index}
            >
              {template.label}
            </button>
          ))}
        </TabLinks>
      </div>
      <div className="templates__container">
        <WorkspaceCode>{template.content}</WorkspaceCode>
      </div>
      <div className="templates__bottom">
        <Button size="small" onClick={() => copyToClipboard(template.content)}>Copy to Clipboard</Button>
        <div className="templates__info">
          <div><strong>Run Time:</strong> {template.runTime}</div>
          <div><strong>Space:</strong> {template.space}</div>
        </div>
      </div>
    </div>
  )
}

export default Snippets
