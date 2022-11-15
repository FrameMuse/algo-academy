import "./Button.scss"

import useTheme from "app/ui/synthetic/Theme/useTheme"
import { MouseEventHandler } from "react"
import { useLocation } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { classMerge, classWithModifiers } from "utils/common"

import { buttonColorMap, ButtonIconize } from "./Button.helpers"
import { ButtonBaseProps } from "./Button.types"

interface ButtonLinkProps extends ButtonBaseProps {
  to: string
  nav?: boolean
  end?: boolean
  disabled?: boolean
  replace?: boolean
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

function ButtonLink(props: ButtonLinkProps) {
  const theme = useTheme()
  const location = useLocation()

  const modifiers: string[] = []
  if (props.color) modifiers.push(buttonColorMap(props.color, theme))
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
      <ButtonIconize icon={props.iconRight ?? "arrow-right"} />
    </NavLink>
  )
}

export default ButtonLink
