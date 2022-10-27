import "./Logo.scss"

import { NavLink } from "react-router-dom"

function Logo() {
  return (
    <NavLink className="logo" to="/">&lt;Algo Academy/&gt;</NavLink>
  )
}

export default Logo
