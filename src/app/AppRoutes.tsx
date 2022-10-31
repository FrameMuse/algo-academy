import { useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"

import BaseLayout from "./areas/base/components/BaseLayout/BaseLayout"
import { AboutUsView } from "./views/about-us"
import { ContactUsView } from "./views/contact-us"
import FullCourseView from "./views/full-course/FullCourseView"
import HomeView from "./views/home"
import LessonView from "./views/lesson/LessonView"
import { PurchaseView } from "./views/purchase"
import UIShowcaseView from "./views/showcase"

function AppRoutes() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path={EAppRoutes.Home} element={<HomeView />} />
        <Route path={EAppRoutes.AboutUs} element={<AboutUsView />} />
        <Route path={EAppRoutes.ContactUs} element={<ContactUsView />} />
        <Route path={EAppRoutes.Purchase} element={<PurchaseView />} />

        <Route path={EAppRoutes.FullCourse}>
          <Route index element={<FullCourseView />} />
          <Route path="lesson/:chapter" element={<LessonView />} />
        </Route>

        <Route path={EAppRoutes.UIShowcase} element={<UIShowcaseView />} />

        <Route path="*" />
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

// function asd(element: ReactElement<{ children: never, path?: string }>) {
//   if (element.type === Route) {
//     console.log(element.props.path)
//   }

//   Children.forEach(element.props.children, asd)
// }

// asd(AppRoutes())

export default AppRoutes
