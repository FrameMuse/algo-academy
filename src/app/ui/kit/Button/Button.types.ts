import { ReactElement, ReactNode } from "react"

import { IconName } from "../Icon/Icon"

type ButtonSize = "little" | "small" | "big"
type ButtonColor = "dark" | "white" | "green" | "gray"

export interface ButtonBaseProps {
  size?: ButtonSize
  color?: ButtonColor

  outline?: boolean
  squared?: boolean

  className?: string

  iconLeft?: ReactElement | IconName
  iconRight?: ReactElement | IconName

  children: ReactNode
}
