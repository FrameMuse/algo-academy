import { Route, Routes } from "react-router-dom"

import BaseLayout from "./areas/base/components/BaseLayout/BaseLayout"
import { AboutUsView } from "./views/about-us"
import { ContactUsView } from "./views/contact-us"
import FullCourseView from "./views/full-course/FullCourseView"
import HomeView from "./views/home"
import LessonView from "./views/lesson/LessonView"
import { ProblemView } from "./views/problem"
import { ProfileView } from "./views/profile"
import { PurchaseView } from "./views/purchase"
import UIShowcaseView from "./views/showcase"

function resetScroll() {
  window.scrollTo(0, 0)
}

function AppRoutes() {
  return (
    <Routes>
      <Route>
        <Route path={BaseRoutes.Problem + "/*"} element={<ProblemView />} action={resetScroll} />
      </Route>
      <Route element={<BaseLayout />}>
        <Route path={BaseRoutes.Home} element={<HomeView />} action={resetScroll} />
        <Route path={BaseRoutes.AboutUs} element={<AboutUsView />} action={resetScroll} />
        <Route path={BaseRoutes.ContactUs} element={<ContactUsView />} action={resetScroll} />
        <Route path={BaseRoutes.Purchase} element={<PurchaseView />} action={resetScroll} />
        <Route path={BaseRoutes.Profile + "/*"} element={<ProfileView />} action={resetScroll} />

        <Route path={BaseRoutes.FullCourse} action={resetScroll}>
          <Route index element={<FullCourseView />} action={resetScroll} />
          <Route path="lesson/:chapter" element={<LessonView />} action={resetScroll} />
        </Route>

        <Route path={BaseRoutes.UIShowcase} element={<UIShowcaseView />} action={resetScroll} />

        <Route path="*" />
      </Route>
    </Routes>
  )
}

/**
 * Only base routes are declared globaly, local (deeper) ones better keep isolated (to not export).
 */
export enum BaseRoutes {
  Home = "/",

  ContactUs = "/contact-us",
  FAQ = "/faq",
  Reviews = "/reviews",
  PrivacyPolicy = "/privacy-policy",
  Terms = "/terms",
  AboutUs = "/about-us",
  FullCourse = "/full-course",
  Purchase = "/purchase",
  Profile = "/profile",
  Problem = "/problem",

  UIShowcase = "/ui-showcase",
}

export default AppRoutes
