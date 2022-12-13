/// <reference types="react-scripts" />

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // React App
      readonly REACT_APP_TITLE: string

      readonly REACT_APP_API_HOST: string
      readonly REACT_APP_API_CACHE_TIME: string

      readonly REACT_APP_GA_ID: string

      readonly REACT_APP_SENTRY: string
      readonly REACT_APP_SENTRY_DSN: string
    }
  }
}

export { }
