import { ComponentClass, ErrorInfo, ReactNode, VoidFunctionComponent } from "react"

export type ErrorBoundaryError = Error
export type ErrorBoundaryReset = () => void
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ReactErrorFunction<P = any, S = any> = ComponentClass<P, S> | VoidFunctionComponent<P>
export interface asd {
  reset: () => void
  state: ErrorBoundaryState
}

export interface ErrorBoundaryProps {
  deps?: unknown[]
  fallback: ReactNode | ((reset: ErrorBoundaryReset, error?: ErrorBoundaryError, errorInfo?: ErrorInfo) => JSX.Element)
  children: ReactNode | ReactNode[]
}
export interface ErrorBoundaryState {
  hasError: boolean
  error?: ErrorBoundaryError
  errorInfo?: ErrorInfo
}
