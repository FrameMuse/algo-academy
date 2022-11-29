import "./AdminHeader.scss"

import Logo from "app/ui/synthetic/Logo/Logo"

function AdminHeader() {
  return (
    <header className="admin-header">
      <Logo title="<Admin />" to="/admin" />
    </header>
  )
}

export default AdminHeader
