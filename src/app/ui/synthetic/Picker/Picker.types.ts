import { ComponentProps, ReactElement } from "react"

export type PickerOptionElement<V = unknown> = ReactElement<ComponentProps<"option"> & { value: V }>
