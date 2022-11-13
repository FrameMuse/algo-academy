import { ReactNode } from "react"

import themeContext from "./themeContext"

interface ThemeProps {
  theme: "dark" | "light"
  children: ReactNode
}

function Theme(props: ThemeProps) {
  return (
    <themeContext.Provider value={props.theme}>
      {props.children}
    </themeContext.Provider>
  )
}

export default Theme
