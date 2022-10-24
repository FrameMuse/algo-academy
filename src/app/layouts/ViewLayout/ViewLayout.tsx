import Footer from "app/areas/footer/Footer"
import Header from "app/areas/header/Header"
import { ReactNode } from "react"
import { Outlet } from "react-router-dom"

interface ViewLayoutProps {
  children?: ReactNode
}

function ViewLayout(props: ViewLayoutProps) {
  return (
    <>
      <Header />
      {props.children || <Outlet />}
      <Footer />
    </>
  )
}

export default ViewLayout
