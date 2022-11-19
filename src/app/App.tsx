import "assets/scss/base.scss"
import "react-modal-global/styles/modal.scss"
import "react-toastify/scss/main.scss"

import { ReactNode, StrictMode, Suspense } from "react"
import { ModalContainer } from "react-modal-global"
import { Provider as StoreProvider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { ToastContainer, ToastOptions } from "react-toastify"
import { PersistGate } from "redux-persist/integration/react"
import store, { persistor } from "store/store"
import DevNavigation from "utils/components/DevNavigation/DevNavigation"

import AppRoutes from "./AppRoutes"
import CookiesNotice from "./containers/CookiesNotice/CookiesNotice"
import ErrorBoundary from "./containers/ErrorBoundary/ErrorBoundary"
import ErrorFallback from "./containers/ErrorFallback/ErrorFallback"

/**
 * TODO: Better move it from here
 */
// eslint-disable-next-line @typescript-eslint/ban-types
const DEFAULT_TOAST_CONFIG: ToastOptions<{}> = {
  position: "bottom-center"
}

function App() {
  return (
    <StrictMode>
      <AppProviders>
        <Suspense fallback="Loading...">
          <ErrorBoundary fallback={ErrorFallback}>
            <AppRoutes />
            <CookiesNotice />
            <ModalContainer />
            <ToastContainer {...DEFAULT_TOAST_CONFIG} />

            <DevNavigation />
          </ErrorBoundary>
        </Suspense>
      </AppProviders>
    </StrictMode>
  )
}

function AppProviders(props: { children: ReactNode }) {
  return (
    <BrowserRouter>
      <StoreProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {props.children}
        </PersistGate>
      </StoreProvider>
    </BrowserRouter>
  )
}

export default App
