/* eslint-disable @typescript-eslint/no-explicit-any */

import { ReactErrorFunction } from "./ErrorBoundary.types"

/**
 * Throws ReactError for components, hooks, if given, and any
 */
export class ReactError extends Error {
  name = ReactError.name
  from?: string

  constructor(name: string, message?: string)
  constructor(fn: ReactErrorFunction, message?: string)
  constructor(arg1: string | ReactErrorFunction, message?: string) {
    super()

    this.from = (typeof arg1 === "function" ? arg1.name : arg1)
    this.message = message || ""

    // Detect if it's hook or component
    if (typeof arg1 === "function") {
      this.name = ReactComponentError.name
      if (arg1.name.startsWith("use")) {
        this.name = ReactHookError.name
      }
    }
  }
}


export class ReactComponentError extends ReactError {
  constructor(fn: ReactErrorFunction, message?: string) {
    super(fn, message)
    // Override name detecting
    this.name = ReactComponentError.name
  }
}

export class ReactHookError extends ReactError {
  constructor(fn: ReactErrorFunction, message?: string) {
    super(fn, message)
    // Override name detecting
    this.name = ReactComponentError.name
  }
}

export class ReactCriticalError extends ReactError {
  constructor(name: string, message?: string) {
    super(name, message)
    // Override name detecting
    this.name = ReactComponentError.name
  }
}
