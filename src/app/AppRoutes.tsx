import { Route, Routes } from "react-router-dom"
import { useAppSelector } from "store/hooks"
import { UserType } from "store/reducers/user/types"

import { AdminLayout } from "./areas/admin"
import BaseLayout from "./areas/base/components/BaseLayout/BaseLayout"
import Column from "./layouts/Column/Column"
import Headings from "./layouts/Headings/Headings"
import ErrorCover from "./ui/synthetic/ErrorCover/ErrorCover"
import { AdminChaptersEditView, AdminChaptersNewView, AdminChaptersView, AdminFeedbackView, AdminHomeView, AdminLessonsEditView, AdminLessonsNewView, AdminLessonsView, AdminPlansEditView, AdminPlansNewView, AdminPlansView, AdminSnippetsEditView, AdminSnippetsNewView, AdminSnippetsView } from "./views/admin"
import { AboutUsView } from "./views/base/about-us"
import { ContactUsView } from "./views/base/contact-us"
import FullCourseView from "./views/base/full-course/FullCourseView"
import HomeView from "./views/base/home"
import LessonView from "./views/base/lesson/LessonView"
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

  return (
    <Routes>
      <Route path="/full-course/lessons/:lessonId/problem">
        <Route index element={<ProblemView />} action={resetScroll} />
      </Route>
      <Route element={<BaseLayout />}>
        <Route path={StaticRoutes.Home} element={<HomeView />} action={resetScroll} />
        <Route path={StaticRoutes.AboutUs} element={<AboutUsView />} action={resetScroll} />
        <Route path={StaticRoutes.ContactUs} element={<ContactUsView />} action={resetScroll} />
        <Route path={StaticRoutes.Purchase} element={<PurchaseView />} action={resetScroll} />
        <Route path={StaticRoutes.Profile + "/*"} element={<ProfileView />} action={resetScroll} />

        <Route path={StaticRoutes.FullCourse} action={resetScroll}>
          <Route index element={<FullCourseView />} action={resetScroll} />
          <Route path="lessons/:lessonId" element={<LessonView />} action={resetScroll} />
        </Route>

        <Route path={StaticRoutes.UIShowcase} element={<UIShowcaseView />} action={resetScroll} />

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
  FAQ = "/faq",
  Reviews = "/reviews",
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
  AdminFeedback = "/admin/feedback",
}

export default AppRoutes
