import "./Header.scss"

import { StaticRoutes } from "app/AppRoutes"
import { ProfileWidget } from "app/areas/user"
import AppNavLink from "app/ui/kit/Link/AppNavLink"
import Logo from "app/ui/synthetic/Logo/Logo"

function Header() {
  return (
    <header>
      <section className="mob-menu-section">
        <ul className="mob-menu">
          <li className="mob-menu-item">
            <a href="index.html" className="mob-menu-link">What is Algo Academy?</a>
          </li>
          <li className="mob-menu-item">
            <a href="about.html" className="mob-menu-link">About us</a>
          </li>
          <li className="mob-menu-item">
            <a href="course.html" className="mob-menu-link">Full Course</a>
          </li>
          <li className="mob-menu-item">
            <a href="purchase.html" className="mob-menu-link">Purchase</a>
          </li>
          <li className="mob-menu-item">
            <a href="account1.html" className="mob-menu-link">Log In</a>
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
              {/* <ENV type={["test", "development"]}> */}
              <AppNavLink className="menu-item-link" to={StaticRoutes.UIShowcase}>UI Showcase</AppNavLink>
              {/* </ENV> */}

              <AppNavLink className="menu-item-link" to={StaticRoutes.Home} end>What is Algo Academy?</AppNavLink>
              <AppNavLink className="menu-item-link" to={StaticRoutes.AboutUs}>About us</AppNavLink>
              <AppNavLink className="menu-item-link" to={StaticRoutes.FullCourse}>Full Course</AppNavLink>
              <AppNavLink className="menu-item-link" to={StaticRoutes.Purchase}>Purchase</AppNavLink>
            </nav>
            <ProfileWidget />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
