import "./Header.scss"

import { EAppRoutes } from "app/AppRoutes"
import AppNavLink from "app/ui/kit/Link/AppNavLink"
import Logo from "app/ui/synthetic/Logo/Logo"
import ProfileWidget from "app/ui/synthetic/ProfileWidget/ProfileWidget"
import ENV from "utils/components/ENV"

function Header() {
  return (
    <header>
      <section className="mob-menu-section">
        <ul className="mob-menu">
          <li className="mob-menu-item">
            <a href="index.html" className="mob-menu-link">what is algo academy?</a>
          </li>
          <li className="mob-menu-item">
            <a href="about.html" className="mob-menu-link">about us</a>
          </li>
          <li className="mob-menu-item">
            <a href="course.html" className="mob-menu-link">full course</a>
          </li>
          <li className="mob-menu-item">
            <a href="purchase.html" className="mob-menu-link">purchase</a>
          </li>
          <li className="mob-menu-item">
            <a href="account1.html" className="mob-menu-link">log in</a>
          </li>
        </ul>
      </section>
      <div className="wrapper">
        <div className="header-wrap">
          <div className="burger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <Logo />
          <div className="header-right">
            <nav className="menu">
              <ENV type={["test", "development"]}>
                <AppNavLink className="menu-item-link" to={EAppRoutes.UIShowcase}>UI Showcase</AppNavLink>
              </ENV>

              <AppNavLink className="menu-item-link" to={EAppRoutes.Home} end>What is Algo Academy?</AppNavLink>
              <AppNavLink className="menu-item-link" to={EAppRoutes.AboutUs}>About us</AppNavLink>
              <AppNavLink className="menu-item-link" to={EAppRoutes.FullCourse}>Full course</AppNavLink>
              <AppNavLink className="menu-item-link" to={EAppRoutes.Purchase}>Purchase</AppNavLink>
            </nav>
            <ProfileWidget />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
