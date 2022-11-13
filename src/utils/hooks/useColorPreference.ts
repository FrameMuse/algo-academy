import { useEffect, useState } from "react"

type ColorPreference = "light" | "dark"

function useColorPreference(): ColorPreference {
  const matchMediaLightScheme = matchMedia("(prefers-color-scheme: dark)")

  const [theme, setTheme] = useState<ColorPreference>(matchMediaLightScheme.matches ? "dark" : "light")

  useEffect(() => {
    function eventHandler(event: MediaQueryListEvent) {
      setTheme(event.matches ? "dark" : "light")
    }

    matchMediaLightScheme.addEventListener("change", eventHandler)
    return () => {
      matchMediaLightScheme.removeEventListener("change", eventHandler)
    }
  }, [])

  if (theme == null) {
    throw new Error("Color scheme can't be unset.")
  }

  return theme
}

export default useColorPreference
