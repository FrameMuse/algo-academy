import "./ProfileView.scss"

import useUserResetData from "api/hooks/user/useUserResetData"
import { APP_TITLE } from "app/App"
import { StaticRoutes } from "app/AppRoutes"
import { UserGeneralInfo, UserHasNoPlanNotice, UserProblemsSolved, UserPurchaseHistory } from "app/areas/user"
import Box from "app/layouts/Box/Box"
import Headings from "app/layouts/Headings/Headings"
import { confirmAction } from "app/popups/PopupConfirm/PopupConfirm"
import Button from "app/ui/kit/Button/Button"
import AppNavLink from "app/ui/kit/Link/AppNavLink"
import { Helmet } from "react-helmet"
import { Route, Routes, useNavigate } from "react-router-dom"
import { useLocalStorage } from "react-use"
import { GAEventLabel } from "services/ga"
import { useAppDispatch } from "store/hooks"
import { updateUser, USER_GUEST } from "store/reducers/user"

enum ProfileViewRoutes {
  MyAccount = "", // relative root
  MyPurcase = "purchase",
  MyProgress = "progress"
}

function ProfileView() {
  const logout = useUserLogout()

  return (
    <section className="page-section account-section">
      <Helmet>
        <title>{APP_TITLE + " | " + "Account Information"}</title>
      </Helmet>
      <div className="wrapper">
        <div className="title-block">
          <h1>Account Information</h1>
        </div>
        <UserHasNoPlanNotice />
        <div className="account-big-block">
          <div className="account-left">
            <div className="account-menu">
              <AppNavLink to={ProfileViewRoutes.MyAccount} className="account-menu-link" end>My Account</AppNavLink>
              <AppNavLink to={ProfileViewRoutes.MyPurcase} className="account-menu-link">My Purchase</AppNavLink>
              <AppNavLink to={ProfileViewRoutes.MyProgress} className="account-menu-link">Account Data</AppNavLink>
              <Button color="dark" className="account-menu-link" onClick={logout}>Log out</Button>
            </div>
          </div>
          <div className="account-right">
            <Routes>
              <Route index element={<AccountView />} />
              <Route path={ProfileViewRoutes.MyPurcase} element={<PurchaseView />} />
              <Route path={ProfileViewRoutes.MyProgress} element={<ResetProgressView />} />
            </Routes>
          </div>
        </div>
      </div>
    </section>
  )
}


/**
 * TODO: Better move from here.
 */
function useUserLogout() {
  const dispatch = useAppDispatch()
  const [, setUserToken] = useLocalStorage("user-token")
  const navigate = useNavigate()

  function logout() {
    dispatch(updateUser(USER_GUEST))
    setUserToken(null)
    navigate(StaticRoutes.Home)
  }

  return logout
}

function AccountView() {
  return (
    <div className="account-info">
      <UserGeneralInfo />
      <UserProblemsSolved />
    </div>
  )
}

function PurchaseView() {
  return (
    <UserPurchaseHistory />
  )
}

function ResetProgressView() {
  const resetData = useUserResetData()
  async function onClick() {
    if (!await confirmAction()) return

    await resetData()
  }
  return (
    <Box>
      <Headings>
        <h5>Reset Your Data</h5>
        <p>You may reset your account data here; this includes course progress, submissions, and rank. Note that resetting your data is irreversible.</p>
      </Headings>
      <Button color="gray" await onClick={onClick} eventLabel={GAEventLabel.ResetUserData}>Reset Data</Button>
    </Box>
  )
}

export default ProfileView
