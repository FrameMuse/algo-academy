import "./Textarea.scss"

import _ from "lodash"
import { HTMLAttributes } from "react"
import { classMerge } from "utils/common"

interface TextareaProps extends HTMLAttributes<HTMLTextAreaElement> { }

function Textarea(props: TextareaProps) {
  return (
    <label className="textarea">
      {props.children && (
        <div className="textarea__label">{props.children}</div>
      )}
      <textarea {..._.omit(props, "children")} className={classMerge("textarea__appearance", props.className)} />
    </label>
  )
}

export default Textarea
