import "./Button.scss"

import { MouseEventHandler } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { classMerge, classWithModifiers } from "utils/common"

import Icon from "../Icon/Icon"
import { ButtonIconize } from "./Button"
import { ButtonBaseProps } from "./Button.types"

interface ButtonLinkProps extends ButtonBaseProps {
  to: string
  nav?: boolean
  end?: boolean
  disabled?: boolean
  replace?: boolean
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

function Iconize(icon: ButtonLinkProps["iconLeft"]) {
  if (typeof icon === "string") {
    return (
      <div className="button__icon">
        <Icon name={icon} />
      </div>
    )
  }

  return (
    <div className="button__icon">{icon}</div>
  )
}

function ButtonLink(props: ButtonLinkProps) {
  const location = useLocation()

  const modifiers: string[] = []
  if (props.color) modifiers.push(props.color)
  if (props.size) modifiers.push(props.size)
  if (props.outline) modifiers.push("outline")
  if (props.disabled) modifiers.push("disabled")
  return (
    <NavLink className={
      link => classMerge(classWithModifiers("button", ...modifiers, props.nav && link.isActive && "white"), props.className)
    } replace={props.replace} to={props.disabled ? location : props.to} onClick={props.onClick} end={props.end}>
      <ButtonIconize icon={props.iconLeft} />
      <div className="button__text">{props.children}</div>
      <ButtonIconize icon={props.iconRight} />
    </NavLink>
  )
}

export default ButtonLink
