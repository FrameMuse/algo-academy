import "./ErrorFallback.scss"

import { ErrorBoundaryError, ErrorBoundaryReset } from "app/containers/ErrorBoundary/ErrorBoundary.types"
import { ErrorInfo } from "react"

import FatalError from "../../../views/errors/fatal-error/FatalError"

function ErrorFallback(reset: ErrorBoundaryReset, error?: ErrorBoundaryError, errorInfo?: ErrorInfo) {
  return (
    <FatalError reset={reset} error={error} errorInfo={errorInfo} />
  )
}

export default ErrorFallback
