import Code, { CodeProps } from "app/ui/kit/Code/Code"
import { EDITOR_DEFAULT_LANGUAGE, EDITOR_DEFAULT_VALUE } from "app/ui/synthetic/Editor/Editor"
import { useAppSelector } from "store/hooks"

function WorkspaceCode(props: CodeProps) {
  const workspace = useAppSelector(state => state.workspace)

  return (
    <Code
      theme={workspace.settings.codeTheme}
      lang={EDITOR_DEFAULT_LANGUAGE}
      // eslint-disable-next-line react/no-children-prop
      children={EDITOR_DEFAULT_VALUE}
      {...props}
    />
  )
}

export default WorkspaceCode
