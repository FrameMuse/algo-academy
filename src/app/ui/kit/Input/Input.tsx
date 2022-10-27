import "./Input.scss"

import { DetailedHTMLProps, InputHTMLAttributes } from "react"

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string
}

function Input(props: InputProps) {
  return (
    <label className="input">
      <div className="input__label">{props.label}</div>
      <input className="input__input" {...props} placeholder={props.placeholder + (props.required ? "*" : "")} />
    </label>
  )
}

export default Input
