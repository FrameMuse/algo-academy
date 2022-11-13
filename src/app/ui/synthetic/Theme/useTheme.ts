import { useContext } from "react"

import themeContext from "./themeContext"

function useTheme() {
  const theme = useContext(themeContext)

  return theme
}

export default useTheme
