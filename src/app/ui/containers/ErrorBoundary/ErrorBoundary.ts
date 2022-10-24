import { Component, ErrorInfo } from "react"

import { ErrorBoundaryProps, ErrorBoundaryState } from "./ErrorBoundary.types"

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false
  }

  static getDerivedStateFromError(error: unknown): ErrorBoundaryState | null {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error: error instanceof Error ? error : undefined }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(errorInfo)
    this.setState({ error, errorInfo })
  }

  reset = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined })
  }
  render() {
    if (this.state.hasError) {
      if (typeof this.props.fallback === "function") {
        return this.props.fallback(this.reset, this.state.error, this.state.errorInfo)
      }

      return this.props.fallback
    }

    return this.props.children
  }
}

export default ErrorBoundary
