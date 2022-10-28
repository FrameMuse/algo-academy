import { ReactNode } from "react"

interface ENVProps {
  type: typeof process.env.NODE_ENV | (typeof process.env.NODE_ENV[])
  children: ReactNode
}

function ENV(props: ENVProps) {
  if (props.type instanceof Array) {
    if (!props.type.includes(process.env.NODE_ENV)) {
      return null
    }
  } else {
    if (process.env.NODE_ENV !== props.type) {
      return null
    }
  }

  return (
    <>{props.children}</>
  )
}

export default ENV
