import "./Header.scss"

import { StaticRoutes } from "app/AppRoutes"
import { ProfileWidget } from "app/areas/user"
import AppNavLink from "app/ui/kit/Link/AppNavLink"
import Logo from "app/ui/synthetic/Logo/Logo"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { useLockBodyScroll } from "react-use"
import { useAppSelector } from "store/hooks"
import { UserType } from "store/reducers/user/types"
import { classWithModifiers, toggleState } from "utils/common"

function Header() {
  const user = useAppSelector(state => state.user)


  const [mobileNavExpanded, setMobileNavExpanded] = useState(false)
  useLockBodyScroll(mobileNavExpanded)

  const location = useLocation()
  useEffect(() => setMobileNavExpanded(false), [location])

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
          <button className={classWithModifiers("burger", mobileNavExpanded && "active")} type="button" onClick={toggleState(setMobileNavExpanded)}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </button>
          <Logo />
          <div className="header-right">
            <nav className={classWithModifiers("menu", mobileNavExpanded && "mobile-expanded")}>
              {user.signed && user.type >= UserType.Admin && (
                <>
                  <AppNavLink className="menu-item-link" to={StaticRoutes.AdminHome}>Admin Panel</AppNavLink>
                  <AppNavLink className="menu-item-link" to={StaticRoutes.UIShowcase}>UI Showcase</AppNavLink>
                </>
              )}

              <AppNavLink className="menu-item-link" to={StaticRoutes.Home} end>What is Algo Academy?</AppNavLink>
              <AppNavLink className="menu-item-link" to={StaticRoutes.AboutUs}>About us</AppNavLink>
              <AppNavLink className="menu-item-link" to={StaticRoutes.FullCourse}>Full Course</AppNavLink>
              <AppNavLink className="menu-item-link" to={StaticRoutes.Purchase}>Purchase</AppNavLink>
              <ProfileWidget />
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
