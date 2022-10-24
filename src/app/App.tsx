import "assets/scss/base.scss"

import { ReactNode, Suspense } from "react"
import { ModalContainer } from "react-modal-global"
import { Provider as StoreProvider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import store from "store/store"

import AppRoutes from "./AppRoutes"
import CookiesNotice from "./ui/containers/CookiesNotice/CookiesNotice"
import ErrorBoundary from "./ui/containers/ErrorBoundary/ErrorBoundary"
import ErrorFallback from "./ui/containers/ErrorFallback/ErrorFallback"

function App() {
  return (
    <AppProviders>
      <Suspense fallback="Loading...">
        <ErrorBoundary fallback={ErrorFallback}>
          <AppRoutes />
          <CookiesNotice />
          <ModalContainer />
          <ToastContainer />
        </ErrorBoundary>
      </Suspense>
    </AppProviders>
  )
}

function AppProviders(props: { children: ReactNode }) {
  return (
    <BrowserRouter>
      <StoreProvider store={store}>
        {props.children}
      </StoreProvider>
    </BrowserRouter>
  )
}

export default App
