import { Route, Routes } from "react-router-dom"

import BaseLayout from "./areas/base/components/BaseLayout/BaseLayout"
import HomeView from "./views/home"
import ShowCaseView from "./views/show-case"

function AppRoutes() {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path={EAppRoutes.Home} element={<HomeView />} />
        <Route path={EAppRoutes.ShowCase} element={<ShowCaseView />} />
      </Route>
    </Routes>
  )
}

export enum EAppRoutes {
  Home = "/",

  ContactUs = "/contact-us",
  FAQ = "/faq",
  Reviews = "/reviews",
  PrivacyPolicy = "/privacy-policy",
  Terms = "/terms",
  AboutUs = "/about-us",
  FullCourse = "/full-course",
  Purchase = "/purchase",

  ShowCase = "/show-case",
}

export default AppRoutes
