import { ComponentProps, ReactElement } from "react"

export type SelectorOptionElement<V = unknown> = ReactElement<ComponentProps<"option"> & { value: V }>
