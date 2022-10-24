import "./Footer.scss"

import { EAppRoutes } from "app/AppRoutes"
import AppNavLink from "app/ui/components/Link/AppNavLink"
import Logo from "app/ui/synthetic/Logo/Logo"

function Footer() {
  return (
    <footer>
      <div className="wrapper">
        <Logo />
        <nav className="footer-menu">
          <AppNavLink className="footer-menu-link" to={EAppRoutes.ContactUs}>Contact Us</AppNavLink>
          <AppNavLink className="footer-menu-link" to={EAppRoutes.FAQ}>FAQ</AppNavLink>
          <AppNavLink className="footer-menu-link" to={EAppRoutes.Reviews}>Reviews</AppNavLink>
          <AppNavLink className="footer-menu-link" to={EAppRoutes.PrivacyPolicy}>Privacy Policy</AppNavLink>
          <AppNavLink className="footer-menu-link" to={EAppRoutes.Terms}>Terms & Conditions</AppNavLink>
          <AppNavLink className="footer-menu-link" to={EAppRoutes.AboutUs}>About Us</AppNavLink>
        </nav>
        <div className="copyright">Copyright &copy; {new Date().getFullYear()} Algo Academy, LLC. All Rights Reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
