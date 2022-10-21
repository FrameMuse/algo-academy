import { ReactNode } from "react"

type ButtonColor = "white" | "gray"

export interface ButtonBaseProps {
  size?: "small"
  color?: ButtonColor
  outline?: boolean

  className?: string

  iconLeft?: ReactNode
  iconRight?: ReactNode

  children: ReactNode
}
