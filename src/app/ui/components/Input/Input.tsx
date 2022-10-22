import "./Input.scss"

import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from "react"

export interface InputStrainType<V> {
  title: string
  value: V
}

interface InputProps<V> extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  strains?: InputStrainType<V>[]
  onChange?: (event: ChangeEvent<HTMLInputElement>, strain?: InputStrainType<V>) => void
}

function Input<V>(props: InputProps<V>) {
  return (
    <label className="input">
      <input className="input__input" {...props} placeholder={props.placeholder + (props.required ? "*" : "")} />
    </label>
  )
}

export default Input
