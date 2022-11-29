import "./Footer.scss"

import { StaticRoutes } from "app/AppRoutes"
import AppNavLink from "app/ui/kit/Link/AppNavLink"
import Logo from "app/ui/synthetic/Logo/Logo"

function Footer() {
  return (
    <footer>
      <div className="wrapper">
        <Logo />
        <nav className="footer-menu">
          <AppNavLink className="footer-menu-link" to={StaticRoutes.ContactUs}>Contact Us</AppNavLink>
          <AppNavLink className="footer-menu-link" to={StaticRoutes.FAQ}>FAQ</AppNavLink>
          <AppNavLink className="footer-menu-link" to={StaticRoutes.Reviews}>Reviews</AppNavLink>
          <AppNavLink className="footer-menu-link" to={StaticRoutes.PrivacyPolicy}>Privacy Policy</AppNavLink>
          <AppNavLink className="footer-menu-link" to={StaticRoutes.Terms}>Terms & Conditions</AppNavLink>
          <AppNavLink className="footer-menu-link" to={StaticRoutes.AboutUs}>About Us</AppNavLink>
        </nav>
        <div className="copyright">Copyright &copy; {new Date().getFullYear()} Algo Academy, LLC. All Rights Reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
