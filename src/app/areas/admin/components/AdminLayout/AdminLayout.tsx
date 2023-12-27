import "./AdminLayout.scss"

import { ReactNode } from "react"
import { Outlet } from "react-router-dom"

import AdminHeader from "../AdminHeader/AdminHeader"

interface AdminLayoutProps {
  children?: ReactNode
}

function AdminLayout(props: AdminLayoutProps) {
  return (
    <>
      <AdminHeader />
      <main className="admin-layout">
        {/* <QueryBoundary userType={UserType.Admin}> */}
        {props.children || <Outlet />}
        {/* </QueryBoundary> */}
      </main>
    </>
  )
}

export default AdminLayout
