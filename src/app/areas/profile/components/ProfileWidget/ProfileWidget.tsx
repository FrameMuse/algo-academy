import "./ProfileWidget.scss"

import { useAppSelector } from "store/hooks"

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
      <div className="profile-widget-arrow">
        <img src="img/profile-widget-arrow.svg" alt="" />
      </div>
      {user.signed && (
        <ul className="profile-widget-popup">
          <li className="profile-widget-popup-item">
            <a href="#" className="profile-widget-popup-link">my account</a>
          </li>
          <li className="profile-widget-popup-item">
            <a href="#" className="profile-widget-popup-link">my purchase</a>
          </li>
          <li className="profile-widget-popup-item">
            <a href="#" className="profile-widget-popup-link">account data</a>
          </li>
          <li className="profile-widget-popup-item">
            <a href="#" className="profile-widget-popup-link">log out</a>
          </li>
        </ul>
      )}
    </div>
  )
}

export default ProfileWidget
