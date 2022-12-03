import "./AdminLayout.scss"

import QueryBoundary from "app/containers/QueryBoundary"
import { ReactNode } from "react"
import { Outlet } from "react-router-dom"
import { UserType } from "store/reducers/user/types"

import AdminHeader from "../AdminHeader/AdminHeader"

interface AdminLayoutProps {
  children?: ReactNode
}

function AdminLayout(props: AdminLayoutProps) {
  return (
    <>
      <AdminHeader />
      <main className="admin-layout">
        <QueryBoundary userType={UserType.Admin}>
          {props.children || <Outlet />}
        </QueryBoundary>
      </main>
    </>
  )
}

export default AdminLayout
