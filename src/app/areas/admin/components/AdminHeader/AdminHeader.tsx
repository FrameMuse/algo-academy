import "./AdminHeader.scss"

import { StaticRoutes } from "app/AppRoutes"
import Buttons from "app/layouts/Buttons/Buttons"
import ButtonLink from "app/ui/kit/Button/ButtonLink"
import Logo from "app/ui/synthetic/Logo/Logo"

function AdminHeader() {


  return (
    <header className="admin-header">
      <Logo title="<Admin />" to="/admin" />
      <nav>
        <Buttons>
          <ButtonLink color="gray" size="small" squared to={StaticRoutes.AdminHome}>Home</ButtonLink>
          <ButtonLink color="gray" size="small" squared to={StaticRoutes.AdminChapters}>Chapters</ButtonLink>
          <ButtonLink color="gray" size="small" squared to={StaticRoutes.AdminLessons}>Lessons</ButtonLink>
          <ButtonLink color="gray" size="small" squared to={StaticRoutes.AdminFeedback}>Feedback</ButtonLink>
        </Buttons>
      </nav>
    </header>
  )
}

export default AdminHeader
