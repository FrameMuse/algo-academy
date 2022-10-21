import { Route, Routes } from "react-router-dom"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route path="*" element="<HomeView />" />
        <Route element="<ViewLayout />">
          <Route index element="<HomeView />" />
          {/* ... */}
        </Route>
      </Route>
    </Routes>
  )
}

export default AppRoutes
