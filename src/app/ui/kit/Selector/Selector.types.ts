import { ComponentProps, ReactElement } from "react"

export type SelectorType<V = unknown> = ReactElement<ComponentProps<"option"> & { value: V }>
