import "./ProfileView.scss"

import useUserResetData from "api/hooks/user/useUserResetData"
import { APP_TITLE } from "app/App"
import { UserGeneralInfo, UserHasNoPlanNotice, UserProblemsSolved, UserPurchaseHistory } from "app/areas/user"
import Box from "app/layouts/Box/Box"
import Headings from "app/layouts/Headings/Headings"
import Button from "app/ui/kit/Button/Button"
import AppNavLink from "app/ui/kit/Link/AppNavLink"
import { Helmet } from "react-helmet"
import { Route, Routes } from "react-router-dom"

enum ProfileViewRoutes {
  MyAccount = "", // relative root
  MyPurcase = "purchase",
  MyProgress = "progress"
}

function ProfileView() {
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
  return (
    <Box>
      <Headings>
        <h5>Reset Your Data</h5>
        <p>You may reset your account data here; this includes course progress, submissions, and rank. Note that resetting your data is irreversible.</p>
      </Headings>
      <Button color="gray" await onClick={resetData}>Reset Data</Button>
    </Box>
  )
}

export default ProfileView
