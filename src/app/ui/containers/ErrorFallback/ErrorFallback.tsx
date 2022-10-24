import FatalError from "app/views/errors/fatal-error/FatalError"
import { ErrorInfo } from "react"

import { ErrorBoundaryError, ErrorBoundaryReset } from "../ErrorBoundary/ErrorBoundary.types"

function ErrorFallback(reset: ErrorBoundaryReset, error?: ErrorBoundaryError, errorInfo?: ErrorInfo) {
  return (
    <FatalError reset={reset} error={error} errorInfo={errorInfo} />
  )
}

export default ErrorFallback
