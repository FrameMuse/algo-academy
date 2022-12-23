import "assets/scss/base.scss"
import "react-modal-global/styles/modal.scss"
import "react-toastify/scss/main.scss"

import { QueryClientProvider } from "@tanstack/react-query"
import queryClient from "api/client"
import usePlans from "api/hooks/plans/usePlans"
import useUser from "api/hooks/user/useUser"
import { ReactNode, StrictMode, Suspense, useEffect } from "react"
import ReactGA from "react-ga4"
import { ModalContainer } from "react-modal-global"
import { Provider as StoreProvider } from "react-redux"
import { BrowserRouter, useLocation, useSearchParams } from "react-router-dom"
import { ToastContainer, ToastOptions } from "react-toastify"
import { PersistGate } from "redux-persist/integration/react"
import initGA from "services/ga"
import initSentry from "services/sentry"
import { useAppDispatch } from "store/hooks"
import { updateUser, USER_GUEST } from "store/reducers/user"
import store, { persistor } from "store/store"
import DevNavigation from "utils/components/DevNavigation/DevNavigation"
import useObservableLocalStorage from "utils/hooks/useObservableLocalStorage"

import AppRoutes from "./AppRoutes"
import CookiesNotice from "./containers/CookiesNotice/CookiesNotice"
import ErrorBoundary from "./containers/ErrorBoundary/ErrorBoundary"
import ErrorFallback from "./containers/ErrorFallback/ErrorFallback"
import Loader from "./ui/synthetic/Loader/Loader"

/**
 * TODO: Better move it from here
 */
// eslint-disable-next-line @typescript-eslint/ban-types
const DEFAULT_TOAST_CONFIG: ToastOptions<{}> = {
  position: "bottom-center"
}

export const APP_TITLE = "Algo Academy"
export function formatAppTitle(...titles: (string | null | undefined)[]): string {
  if (titles.length > 0) {
    return [...titles, APP_TITLE].filter(Boolean).join(" | ")
  }

  return APP_TITLE
}

function App() {
  return (
    <StrictMode>
      <Suspense fallback={<Loader />}>
        <ErrorBoundary fallback={ErrorFallback}>
          <AppProviders>
            <AppRoutes />

            <Suspense> {/* Make these requests invisible to user */}
              <PrefetchPlans />
              <FetchAndDispatchUser />
            </Suspense>
            <ServicesInit />
            <GALocation />

            <CookiesNotice />
            <ModalContainer />
            <ToastContainer {...DEFAULT_TOAST_CONFIG} />

            <DevNavigation />
          </AppProviders>
        </ErrorBoundary>
      </Suspense>
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
function FetchAndDispatchUser() {
  const user = useUser()
  const userToken = useUserToken()
  const dispatch = useAppDispatch()


  useEffect(() => {
    if (user == null) return
    if (userToken == null) return

    dispatch(updateUser(user))
  }, [user, userToken])

  useEffect(() => {
    console.log(userToken)

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
function useUserToken(): string | undefined {
  const [searchParams, setSearchParams] = useSearchParams()
  const [userToken, setUserToken] = useObservableLocalStorage<string>("user-token")

  // Try to get token from search params.
  useEffect(() => {
    const tokenParam = searchParams.get("token")
    if (tokenParam === null) return

    setUserToken(tokenParam)

    // Remove `token` from search params.
    searchParams.delete("token")
    setSearchParams(searchParams)
  }, [searchParams])

  return userToken
}

function ServicesInit() {
  useEffect(() => {
    initGA()
    initSentry()
  }, [])

  return null
}

function GALocation() {
  const location = useLocation()

  useEffect(() => {
    const hitType = "pageview"
    const path = location.pathname + location.hash

    ReactGA.send({ hitType, page: path })
  }, [location])

  return null
}

function PrefetchPlans() {
  usePlans()

  return null
}

export default App
