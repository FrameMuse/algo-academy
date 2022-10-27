import "./Button.scss"

import { MouseEventHandler } from "react"
import { useLocation } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { classMerge, classWithModifiers } from "utils/common"

import { ButtonIconize } from "./Button"
import { ButtonBaseProps } from "./Button.types"

interface ButtonLinkProps extends Omit<ButtonBaseProps, "iconRight"> {
  to: string
  nav?: boolean
  end?: boolean
  disabled?: boolean
  replace?: boolean
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

function ButtonLink(props: ButtonLinkProps) {
  const location = useLocation()

  const modifiers: string[] = []
  if (props.color) modifiers.push(props.color)
  if (props.size) modifiers.push(props.size)

  if (props.outline) modifiers.push("outline")
  if (props.squared) modifiers.push("squared")

  if (props.disabled) modifiers.push("disabled")
  return (
    <NavLink
      className={classMerge(classWithModifiers("button", ...modifiers), props.className)}
      replace={props.replace}
      to={props.disabled ? location : props.to}
      onClick={props.onClick}
      end={props.end}
    >
      <ButtonIconize icon={props.iconLeft} />
      <div className="button__text">{props.children}</div>
      <ButtonIconize icon="arrow-right" />
    </NavLink>
  )
}

export default ButtonLink
