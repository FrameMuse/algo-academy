import { Route, Routes } from "react-router-dom"

import BaseLayout from "./areas/base/components/BaseLayout/BaseLayout"
import HomeView from "./views/home"
import UIShowcaseView from "./views/showcase"

function AppRoutes() {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path={EAppRoutes.Home} element={<HomeView />} />
        <Route path={EAppRoutes.UIShowcase} element={<UIShowcaseView />} />
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

  UIShowcase = "/ui-showcase",
}

export default AppRoutes
