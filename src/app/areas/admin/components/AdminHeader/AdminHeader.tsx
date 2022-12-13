import "./AdminHeader.scss"

import { StaticRoutes } from "app/AppRoutes"
import ButtonGroup from "app/layouts/ButtonGroup/ButtonGroup"
import ButtonLink from "app/ui/kit/Button/ButtonLink"
import Logo from "app/ui/synthetic/Logo/Logo"

function AdminHeader() {
  return (
    <header className="admin-header">
      <Logo title="<Admin />" to="/admin" />
      <nav>
        <ButtonGroup color="gray" size="smaller" squared>
          <ButtonLink to={StaticRoutes.Home}>To site</ButtonLink>
          <ButtonLink to={StaticRoutes.AdminHome}>Home</ButtonLink>
          <ButtonLink to={StaticRoutes.AdminChapters}>Chapters</ButtonLink>
          <ButtonLink to={StaticRoutes.AdminLessons}>Lessons</ButtonLink>
          <ButtonLink to={StaticRoutes.AdminSnippets}>Snippets</ButtonLink>
          <ButtonLink to={StaticRoutes.AdminPlans}>Plans</ButtonLink>
          <ButtonLink to={StaticRoutes.AdminFeedback}>Feedback</ButtonLink>
        </ButtonGroup>
      </nav>
    </header>
  )
}

export default AdminHeader
