import { ReactNode } from "react"
import { Outlet } from "react-router-dom"

import Footer from "../Footer/Footer"
import Header from "../Header/Header"


interface BaseLayout {
  children?: ReactNode
}

function BaseLayout(props: BaseLayout) {
  return (
    <>
      <Header />
      <main>
        {props.children || <Outlet />}
      </main>
      <Footer />
    </>
  )
}

export default BaseLayout
