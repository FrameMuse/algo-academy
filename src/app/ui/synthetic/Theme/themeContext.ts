import { createContext } from "react"

export type AppTheme = "dark" | "light"

const themeContext = createContext<AppTheme>("light")
export default themeContext
