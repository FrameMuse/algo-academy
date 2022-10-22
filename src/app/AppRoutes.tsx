import { Route, Routes } from "react-router-dom"

import ViewLayout from "./layouts/ViewLayout/ViewLayout"
import HomeView from "./views/home"

function AppRoutes() {
  return (
    <Routes>
      <Route element={<ViewLayout />}>
        <Route path="*" element={<HomeView />} />
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
}

export default AppRoutes
