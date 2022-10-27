import { ComponentClass, ErrorInfo, FunctionComponent, ReactNode } from "react"

export type ErrorBoundaryError = Error
export type ErrorBoundaryReset = () => void

// eslint-disable-next-line @typescript-eslint/ban-types
export type ReactErrorFunction<P = {}, S = {}> = ComponentClass<P, S> | FunctionComponent<P>
export interface asd {
  reset: () => void
  state: ErrorBoundaryState
}

export interface ErrorBoundaryProps {
  deps?: unknown[]
  fallback: ReactNode | ((reset: ErrorBoundaryReset, error?: ErrorBoundaryError, errorInfo?: ErrorInfo) => JSX.Element)
  children: ReactNode
}
export interface ErrorBoundaryState {
  hasError: boolean
  error?: ErrorBoundaryError
  errorInfo?: ErrorInfo
}
