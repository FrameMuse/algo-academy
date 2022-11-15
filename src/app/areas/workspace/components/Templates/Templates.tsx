import "./Templates.scss"

import TabLinks from "app/layouts/TabLinks/TabLinks"
import Button from "app/ui/kit/Button/Button"
import { useState } from "react"
import { classWithModifiers } from "utils/common"
import useAppCopyToClipboard from "utils/hooks/useAppCopyToClipboard"

import { WorkspaceCode } from "../.."

interface Template {
  name: string
  content: string
  runTime: string
  space: string
}

interface TemplatesProps {
  templates: Template[]
}

function Templates(props: TemplatesProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const template = props.templates[activeIndex]

  const { copyToClipboard } = useAppCopyToClipboard()
  return (
    <div className="templates">
      <div className="templates__menu">
        <TabLinks>
          {props.templates.map((template, index) => (
            <button
              className={classWithModifiers("tab-links__link", index === activeIndex && "active")}
              type="button"
              onClick={() => setActiveIndex(index)}
              key={index}
            >
              {template.name}
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

export default Templates
