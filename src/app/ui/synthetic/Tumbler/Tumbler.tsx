import "./Tumbler.scss"

import { useState } from "react"
import { classWithModifiers } from "utils/common"

interface TumblerProps {
  leftText?: string
  rightText?: string
  checked?: boolean
  defaultChecked?: boolean
  type?: string
  onChange?: (checked: boolean) => void
}

function Tumbler(props: TumblerProps) {
  const [checked, setChecked] = useState(props.checked ?? props.defaultChecked ?? false)
  function updateChecked(value: boolean) {
    setChecked(value)
    props.onChange?.(value)
  }
  return (
    <div className={classWithModifiers("tumbler", props.type)}>
      {props.leftText && (
        <span className={classWithModifiers("tumbler__text", !checked && "active")} onClick={() => updateChecked(false)}>
          {props.leftText}
        </span>
      )}
      <div className="tumbler-shift" onClick={() => updateChecked(!checked)}>
        <div className={classWithModifiers("tumbler-shift__circle", checked ? "right" : "left")}></div>
      </div>
      {props.rightText && (
        <span className={classWithModifiers("tumbler__text", checked && "active")} onClick={() => updateChecked(true)}>
          {props.rightText}
        </span>
      )}
    </div>
  )
}

export default Tumbler
