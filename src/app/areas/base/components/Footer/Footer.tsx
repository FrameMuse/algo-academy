import "./Footer.scss"

import { BaseRoutes } from "app/AppRoutes"
import AppNavLink from "app/ui/kit/Link/AppNavLink"
import Logo from "app/ui/synthetic/Logo/Logo"

function Footer() {
  return (
    <footer>
      <div className="wrapper">
        <Logo />
        <nav className="footer-menu">
          <AppNavLink className="footer-menu-link" to={BaseRoutes.ContactUs}>Contact Us</AppNavLink>
          <AppNavLink className="footer-menu-link" to={BaseRoutes.FAQ}>FAQ</AppNavLink>
          <AppNavLink className="footer-menu-link" to={BaseRoutes.Reviews}>Reviews</AppNavLink>
          <AppNavLink className="footer-menu-link" to={BaseRoutes.PrivacyPolicy}>Privacy Policy</AppNavLink>
          <AppNavLink className="footer-menu-link" to={BaseRoutes.Terms}>Terms & Conditions</AppNavLink>
          <AppNavLink className="footer-menu-link" to={BaseRoutes.AboutUs}>About Us</AppNavLink>
        </nav>
        <div className="copyright">Copyright &copy; {new Date().getFullYear()} Algo Academy, LLC. All Rights Reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
