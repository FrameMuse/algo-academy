import { createContext } from "react"

type Theme = "dark" | "light"

const themeContext = createContext<Theme>("light")
export default themeContext
