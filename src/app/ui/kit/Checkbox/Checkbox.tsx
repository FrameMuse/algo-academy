import "./Checkbox.scss"

import _ from "lodash"
import { DetailedHTMLProps, InputHTMLAttributes } from "react"
import { classMerge } from "utils/common"

import Icon from "../Icon/Icon"

export interface CheckboxProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> { }

function Checkbox(props: CheckboxProps) {
  return (
    <label className={classMerge("checkbox", props.className)} style={props.style}>
      <input {..._.omit(props, "children", "style")} type="checkbox" className="checkbox__input" />
      <div className="checkbox__appearance">
        <Icon className="checkbox__icon" name="check" />
      </div>
      {props.children && (
        <div className="checkbox__label">{props.children}</div>
      )}
    </label>
  )
}

export default Checkbox
