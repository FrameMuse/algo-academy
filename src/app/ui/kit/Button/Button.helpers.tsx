import Icon from "../Icon/Icon"
import { ButtonBaseProps } from "./Button.types"

export function ButtonIconize(props: { icon: ButtonBaseProps["iconLeft"] }) {
  if (props.icon == null) return null

  if (typeof props.icon === "string") {
    if (props.icon.length === 0) return null

    return (
      <div className="button__icon">
        <Icon name={props.icon} />
      </div>
    )
  }

  return (
    <div className="button__icon">{props.icon}</div>
  )
}

export function buttonColorMap(color: Exclude<ButtonBaseProps["color"], undefined>, theme?: "dark" | "light"): string {
  if (theme === "dark") {
    if (color === "white") return "dark"
    if (color === "gray") return "dark"
  }

  return color
}
