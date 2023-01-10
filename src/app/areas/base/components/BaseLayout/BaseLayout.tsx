import "./BaseLayout.scss"

import QueryBoundary from "app/containers/QueryBoundary"
import { ReactNode } from "react"
import { Outlet } from "react-router-dom"

import Footer from "../Footer/Footer"
import Header from "../Header/Header"


interface BaseLayout {
  children?: ReactNode
}

function BaseLayout(props: BaseLayout) {
  return (
    <div className="base-layout">
      <Header />
      <main>
        <QueryBoundary>
          {props.children || <Outlet />}
        </QueryBoundary>
      </main>
      <Footer />
    </div>
  )
}

export default BaseLayout
