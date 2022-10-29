import "./Field.scss"

import _ from "lodash"
import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, ReactNode, useId, useRef, useState } from "react"
import { classWithModifiers, isDictionary } from "utils/common"
import PhoneNumber from "utils/transform/phonenumber"

import Icon, { IconName } from "../Icon/Icon"

export type FieldConstraint = [RegExp | string, string]

export interface FieldProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  width?: string
  iconName?: IconName
  validity?: boolean
  customValidity?: string
  children?: ReactNode
  constraints?: FieldConstraint[]
  dataList?: Record<string | number, string | number> | (string | number)[]
  onIconClick?(): void
}

function Field(props: FieldProps) {
  const id = useId()

  const [invalid, setInvalid] = useState(false)
  const [focused, setFocused] = useState(false)

  const prevValue = useRef<string>("")
  function onChange(event: ChangeEvent<HTMLInputElement>) {
    const target = event.currentTarget

    if (props.type !== "tel" && props.maxLength) {
      target.value = target.value.slice(0, props.maxLength)
    }

    if (props.type === "tel") {
      const phoneNumber = PhoneNumber.parse(target.value)
      const phoneNumberLength = PhoneNumber.getLength(phoneNumber)

      if (phoneNumberLength > (props.maxLength ?? Infinity)) {
        target.value = prevValue.current
        return
      }

      // const diff = prevValue.current.length - target.value.length
      // if (diff > 0) {
      //   if (isNaN(parseInt(_.last(prevValue.current) || ""))) {
      //     phoneNumber = Number(String(phoneNumber).slice(0, phoneNumberLength - diff))
      //   }
      // }

      // target.value = PhoneNumber.formatByTemplate(phoneNumber, "+1 (###) ### ##-##")
      // prevValue.current = target.value
      target.value = PhoneNumber.format(phoneNumber)
      prevValue.current = target.value
    }


    if (props.constraints) {
      target.setCustomValidity("")
      for (const [constraint, errorMessage] of props.constraints) {
        if (constraint instanceof RegExp) {
          if (!constraint.test(target.value)) {
            target.setCustomValidity(errorMessage)
            break
          }
        } else {
          if (constraint !== target.value) {
            target.setCustomValidity(errorMessage)
            break
          }
        }
      }
    }

    const invalid = !target.checkValidity()
    if (invalid && target.validationMessage === "") {
      target.setCustomValidity(props.customValidity || "")
    }
    setInvalid(invalid)

    props.onChange?.(event)
  }

  const pattern = props.pattern || (props.type === "datetime-local" ? "[0-9]{2}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}" : undefined)
  const dataListId = `${id}-datalist`
  return (
    <label className="field" style={{ "--input-width": props.width }}>
      {props.children && (
        <div className="field__label">{props.children}</div>
      )}
      <div className={classWithModifiers("field__appearance", invalid && "invalid", focused && "focused", props.disabled && "disabled")}>
        <input
          {..._.omit(props, "iconName", "customValidity", "children", "onIconClick", "dataList")}
          className="field__input"
          maxLength={props.type === "tel" ? undefined : props.maxLength}
          placeholder={props.placeholder && (props.placeholder + (props.required ? "*" : ""))}

          list={dataListId}
          pattern={pattern}

          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={onChange}
        />
        {props.iconName && (
          <Icon className={classWithModifiers("field__icon", !!props.onIconClick && "clickable")} name={props.iconName} onClick={props.onIconClick} />
        )}
      </div>
      {props.validity && (
        <span className={classWithModifiers("field__validity", invalid && "active")} aria-hidden={!invalid}>{props.customValidity || "Данные введены неверно"}</span>
      )}

      <datalist id={dataListId}>
        {props.dataList instanceof Array && (
          props.dataList.map((value, index) => (
            <option value={value.toString()} key={index} />
          ))
        )}

        {isDictionary(props.dataList) && (
          Object.entries(props.dataList).map(([key, value], index) => (
            <option value={value.toString()} key={index}>{key}</option>
          ))
        )}
      </datalist>
    </label>
  )
}

export default Field
