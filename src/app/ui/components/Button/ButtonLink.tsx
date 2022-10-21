import "./Button.scss"

import { MouseEventHandler } from "react"
import { NavLink } from "react-router-dom"
import { classMerge, classWithModifiers } from "utils/common"

import { ButtonBaseProps } from "./Button.types"

interface ButtonLinkProps extends ButtonBaseProps {
  to: string
  nav?: boolean
  end?: boolean
  replace?: boolean
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

function ButtonLink(props: ButtonLinkProps) {
  const modifiers: string[] = []
  if (props.size) modifiers.push(props.size)
  if (props.color) modifiers.push(props.color)
  if (props.outline) modifiers.push("outline")
  return (
    <NavLink className={
      link => classMerge(classWithModifiers("button", ...modifiers, props.outline && (props.nav && !link.isActive && "gray")), props.className)
    } replace={props.replace} to={props.to} onClick={props.onClick} end={props.end}>
      {props.iconLeft && (
        <div className="button__icon">{props.iconLeft}</div>
      )}
      <div className="button__text">{props.children}</div>
      {props.iconRight && (
        <div className="button__icon">{props.iconRight}</div>
      )}
    </NavLink>
  )
}

export default ButtonLink
