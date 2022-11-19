import "./DevNavigation.scss"

import AppRoutes from "app/AppRoutes"
import Selector from "app/ui/kit/Selector/Selector"
import { Children, ReactElement } from "react"
import { Route, useNavigate } from "react-router-dom"

function DevNavigation() {
  const navigate = useNavigate()

  if (process.env.NODE_ENV !== "development") {
    return null
  }

  return (
    <div className="dev-navigation">
      <Selector upwards placeholder="Navigate to ..." onChange={value => navigate(value ?? "/")}>
        {asd(AppRoutes()).map(a => (
          <option value={a} key={a} > {a} </option>
        ))}
      </Selector>
    </div>
  )
}

function asd(element: ReactElement<{ children: never, path?: string }>): string[] {
  const children = Children.map(element.props.children, asd)?.flatMap(a => a) || []

  if (element.type === Route) {
    if (element.props.path) {
      return [element.props.path, ...children.map(child => element.props.path + "/" + child.replace(/:.*(\/?)/g, "-1"))]
    }
  }

  return children
}

export default DevNavigation
