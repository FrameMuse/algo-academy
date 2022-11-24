import "./ProfileWidget.scss"

import { BaseRoutes } from "app/AppRoutes"
import { Modal } from "react-modal-global"
import { NavLink } from "react-router-dom"
import { useAppSelector } from "store/hooks"

import PopupUserAuth from "../../popups/PopupUserAuth"

function ProfileWidget() {
  const user = useAppSelector(state => state.user)
  return (
    <div className="profile-widget">
      <div className="profile-widget-img">
        <img src={user.avatar} alt="user's avatar" />
      </div>
      <div className="profile-widget-text">
        {user.signed ? "Welcome" : "Log in, please"}
        <div className="profile-widget-name">{user.firstName} {user.lastName}</div>
      </div>
      {/* <div className="profile-widget-arrow">
        <img src="img/profile-widget-arrow.svg" alt="" />
      </div> */}
      {user.signed && (
        <NavLink className="ghost" to={BaseRoutes.Profile} />
      )}
      {!user.signed && (
        <button className="ghost" type="button" onClick={() => Modal.open(PopupUserAuth)} />
      )}
    </div>
  )
}

export default ProfileWidget
