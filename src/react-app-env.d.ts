/// <reference types="react-scripts" />

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // React App
      REACT_APP_API_HOST: string
      REACT_APP_API_CACHE: string
      REACT_APP_API_CACHE_TIME: string

      REACT_APP_TITLE: string
    }
  }
}

export { }
