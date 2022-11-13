import "./Selector.scss"

import { Children, Dispatch, ReactNode, useRef, useState } from "react"
import { useClickAway } from "react-use"
import { classWithModifiers } from "utils/common"

import DropDown from "../DropDown/DropDown"
import Icon from "../Icon/Icon"
import { SelectorType } from "./Selector.types"

interface SelectorProps<V> {
  name?: string
  width?: string
  defaultValue?: V
  /**
   * Open in up direction.
   */
  upwards?: boolean
  transparent?: boolean
  onChange?: Dispatch<V>
  children: SelectorType | SelectorType[]
  label?: ReactNode
  size?: "small" | "big"
}

function Selector<V = string | undefined>(props: SelectorProps<V>) {
  const options = Children.map(props.children, child => child.props)

  const parentRef = useRef<HTMLDivElement>(null)
  const [children, setChildren] = useState<ReactNode>(options.find(option => option.value === props.defaultValue)?.children || null)
  const [expanded, setExpanded] = useState(false)
  function onSelect(option: { value: V, children: ReactNode }) {
    props.onChange?.(option.value)
    setChildren(option.children)
    setExpanded(false)
  }
  useClickAway(parentRef, () => setExpanded(false))
  return (
    <div className="selector" style={{ "--selector-width": props.width }} ref={parentRef}>
      {props.label && (
        <div className="selector__label">{props.label}</div>
      )}
      <button className={classWithModifiers("selector__appearance", props.size, props.transparent && "transparent")} type="button" onClick={() => setExpanded(!expanded)}>
        <div className={classWithModifiers("selector__current", !children && "empty")}>{children || "Choose from list..."}</div>
        <Icon className={classWithModifiers("selector__icon", expanded && "up")} name="chevron-down" />
      </button>
      <DropDown<V>
        name={props.name}
        size={props.size}
        upwards={props.upwards}
        default={props.defaultValue}
        expanded={expanded}
        onSelect={onSelect}
      >
        {props.children}
      </DropDown>
    </div>
  )
}

export default Selector
