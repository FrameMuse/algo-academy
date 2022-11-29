import Theme from "app/ui/synthetic/Theme/Theme"
import { ReactNode } from "react"
import { useAppSelector } from "store/hooks"

interface WorkspaceThemeProps {
  children: ReactNode
}

function WorkspaceTheme(props: WorkspaceThemeProps) {
  const settings = useAppSelector(state => state.workspace.settings)
  return (
    <Theme theme={settings.darkThemeEnabled ? "dark" : "light"}>
      {props.children}
    </Theme>
  )
}

export default WorkspaceTheme
