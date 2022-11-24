import "assets/scss/base.scss"
import "react-modal-global/styles/modal.scss"
import "react-toastify/scss/main.scss"

import { QueryClientProvider } from "@tanstack/react-query"
import queryClient from "api/client"
import useUser from "api/hooks/useUser"
import { ReactNode, StrictMode, Suspense, useEffect } from "react"
import { ModalContainer } from "react-modal-global"
import { Provider as StoreProvider } from "react-redux"
import { BrowserRouter, useSearchParams } from "react-router-dom"
import { ToastContainer, ToastOptions } from "react-toastify"
import { useLocalStorage } from "react-use"
import { PersistGate } from "redux-persist/integration/react"
import { useAppDispatch } from "store/hooks"
import { updateUser, USER_GUEST } from "store/reducers/user"
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

export const APP_TITLE = "Algo Academy"

function App() {
  return (
    <StrictMode>
      <AppProviders>
        <Suspense fallback="Loading...">
          <ErrorBoundary fallback={ErrorFallback}>
            <AppRoutes />
            <FetchAndSupplyUser />

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
          <QueryClientProvider client={queryClient}>
            {props.children}
          </QueryClientProvider>
        </PersistGate>
      </StoreProvider>
    </BrowserRouter>
  )
}

/**
 * Supply redux store with freshly fetched user.
 * 
 * TODO: Better move it from here
 */
function FetchAndSupplyUser() {
  const user = useUser()
  const userToken = useUserToken()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (user == null) return
    if (userToken == null) return

    dispatch(updateUser(user))
  }, [user, userToken])

  useEffect(() => {
    if (user != null) return
    if (userToken != null) return

    dispatch(updateUser(USER_GUEST))
  }, [userToken])

  return null
}

/**
 * Checks if it's presented in `search query`.
 * 
 * If it's presented, it will be saved to `localStorage`
 * and `token` field will be removed from `search query`.
 * 
 * TODO: Better move it from here
 */
function useUserToken(): string | null {
  const [searchParams, setSearchParams] = useSearchParams()
  const [userToken, setUserToken] = useLocalStorage<string>("user-token")

  useEffect(() => {
    const tokenParam = searchParams.get("token")
    if (tokenParam === null) return

    setUserToken(tokenParam)

    // Remove `token` from search params.
    searchParams.delete("token")
    setSearchParams(searchParams)
  }, [searchParams])

  const tokenParam = searchParams.get("token")
  if (tokenParam === null) return userToken ?? null

  return tokenParam
}

export default App
