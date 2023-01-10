import { useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { useAppSelector } from "store/hooks"
import { UserType } from "store/reducers/user/types"

import { AdminLayout } from "./areas/admin"
import BaseLayout from "./areas/base/components/BaseLayout/BaseLayout"
import Column from "./layouts/Column/Column"
import Headings from "./layouts/Headings/Headings"
import ErrorCover from "./ui/synthetic/ErrorCover/ErrorCover"
import AdminChaptersEditView from "./views/admin/views/chapters/AdminChaptersEditView"
import AdminChaptersNewView from "./views/admin/views/chapters/AdminChaptersNewView"
import AdminChaptersView from "./views/admin/views/chapters/AdminChaptersView"
import AdminFeedbackView from "./views/admin/views/feedback/AdminFeedbackView"
import AdminHomeView from "./views/admin/views/home/AdminHomeView"
import AdminLessonsEditView from "./views/admin/views/lessons/AdminLessonsEditView"
import AdminLessonsNewView from "./views/admin/views/lessons/AdminLessonsNewView"
import AdminLessonsView from "./views/admin/views/lessons/AdminLessonsView"
import AdminPlansEditView from "./views/admin/views/plans/AdminPlansEditView"
import AdminPlansNewView from "./views/admin/views/plans/AdminPlansNewView"
import AdminPlansView from "./views/admin/views/plans/AdminPlansView"
import AdminPromocodesEditView from "./views/admin/views/promocodes/AdminPromocodesEditView"
import AdminPromocodesNewView from "./views/admin/views/promocodes/AdminPromocodesNewView"
import AdminPromocodesView from "./views/admin/views/promocodes/AdminPromocodesView"
import AdminSnippetsEditView from "./views/admin/views/snippets/AdminSnippetsEditView"
import AdminSnippetsNewView from "./views/admin/views/snippets/AdminSnippetsNewView"
import AdminSnippetsView from "./views/admin/views/snippets/AdminSnippetsView"
import { AboutUsView } from "./views/base/about-us"
import { ContactUsView } from "./views/base/contact-us"
import FullCourseView from "./views/base/full-course/FullCourseView"
import HomeView from "./views/base/home"
import LessonView from "./views/base/lesson/LessonView"
import { PrivacyPolicyView } from "./views/base/privacy-policy"
import { ProblemView } from "./views/base/problem"
import { ProfileView } from "./views/base/profile"
import { PurchaseView } from "./views/base/purchase"
import UIShowcaseView from "./views/showcase"

function resetScroll() {
  window.scrollTo(0, 0)
}

function AppRoutes() {
  const user = useAppSelector(state => state.user)
  const isAdmin = user.signed && user.type >= UserType.Admin

  const location = useLocation()
  useEffect(() => resetScroll(), [location.pathname])

  return (
    <Routes>
      <Route path="/full-course/lessons/:lessonId/problem">
        <Route index element={<ProblemView />} />
      </Route>
      <Route element={<BaseLayout />}>
        <Route path={StaticRoutes.Home} element={<HomeView />} />
        <Route path={StaticRoutes.AboutUs} element={<AboutUsView />} />
        <Route path={StaticRoutes.ContactUs} element={<ContactUsView />} />
        <Route path={StaticRoutes.PrivacyPolicy} element={<PrivacyPolicyView />} />
        <Route path={StaticRoutes.Purchase} element={<PurchaseView />} />
        <Route path={StaticRoutes.Profile + "/*"} element={<ProfileView />} />

        <Route path={StaticRoutes.FullCourse}>
          <Route index element={<FullCourseView />} />
          <Route path="lessons/:lessonId" element={<LessonView />} />
        </Route>

        <Route path={StaticRoutes.UIShowcase} element={<UIShowcaseView />} />

        <Route path="*" element={(
          <Column justifyItems="center">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <ErrorCover>
              <Headings>
                <h3>Not found</h3>
                <p>{"Couldn't"} find the page.</p>
              </Headings>
            </ErrorCover>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Column>
        )} />
      </Route>
      <Route element={<AdminLayout />}>
        {isAdmin && (
          <>
            <Route path={StaticRoutes.AdminHome} element={<AdminHomeView />} />

            <Route path={StaticRoutes.AdminChapters}>
              <Route index element={<AdminChaptersView />} />

              <Route path="new" element={<AdminChaptersNewView />} />
              <Route path=":chapterId" element={<AdminChaptersEditView />} />
            </Route>

            <Route path={StaticRoutes.AdminLessons}>
              <Route index element={<AdminLessonsView />} />

              <Route path="new" element={<AdminLessonsNewView />} />
              <Route path=":lessonId" element={<AdminLessonsEditView />} />
            </Route>
            <Route path={StaticRoutes.AdminSnippets}>
              <Route index element={<AdminSnippetsView />} />

              <Route path="new" element={<AdminSnippetsNewView />} />
              <Route path=":snippetId" element={<AdminSnippetsEditView />} />
            </Route>
            <Route path={StaticRoutes.AdminPlans}>
              <Route index element={<AdminPlansView />} />

              <Route path="new" element={<AdminPlansNewView />} />
              <Route path=":planId" element={<AdminPlansEditView />} />
            </Route>
            <Route path={StaticRoutes.AdminPromocodes}>
              <Route index element={<AdminPromocodesView />} />

              <Route path="new" element={<AdminPromocodesNewView />} />
              <Route path=":promocodeId" element={<AdminPromocodesEditView />} />
            </Route>
            <Route path={StaticRoutes.AdminFeedback} element={<AdminFeedbackView />} />
          </>
        )}
      </Route>
    </Routes>
  )
}

/**
 * Only base routes are declared globaly, local (deeper) ones better keep isolated (to not export).
 */
export enum StaticRoutes {
  Home = "/",

  ContactUs = "/contact-us",
  FAQ = "/purchase#faq",
  Reviews = "/purchase#reviews",
  PrivacyPolicy = "/privacy-policy",
  Terms = "/terms",
  AboutUs = "/about-us",
  FullCourse = "/full-course",
  Purchase = "/purchase",
  Profile = "/profile",

  UIShowcase = "/ui-showcase",

  AdminHome = "/admin",
  AdminChapters = "/admin/chapters",
  AdminLessons = "/admin/lessons",
  AdminSnippets = "/admin/snippets",
  AdminPlans = "/admin/plans",
  AdminPromocodes = "/admin/promocodes",
  AdminFeedback = "/admin/feedback",
}

export default AppRoutes
