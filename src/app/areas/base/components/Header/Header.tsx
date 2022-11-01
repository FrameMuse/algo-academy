import "./Header.scss"

import { BaseRoutes } from "app/AppRoutes"
import AppNavLink from "app/ui/kit/Link/AppNavLink"
import Logo from "app/ui/synthetic/Logo/Logo"
import ProfileWidget from "app/ui/synthetic/ProfileWidget/ProfileWidget"

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
              <AppNavLink className="menu-item-link" to={BaseRoutes.UIShowcase}>UI Showcase</AppNavLink>
              {/* </ENV> */}

              <AppNavLink className="menu-item-link" to={BaseRoutes.Home} end>What is Algo Academy?</AppNavLink>
              <AppNavLink className="menu-item-link" to={BaseRoutes.AboutUs}>About us</AppNavLink>
              <AppNavLink className="menu-item-link" to={BaseRoutes.FullCourse}>Full Course</AppNavLink>
              <AppNavLink className="menu-item-link" to={BaseRoutes.Purchase}>Purchase</AppNavLink>
            </nav>
            <ProfileWidget />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
