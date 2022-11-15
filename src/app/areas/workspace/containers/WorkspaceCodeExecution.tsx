import { useAppDispatch, useAppSelector } from "store/hooks"
import { updateWorkspaceInstances } from "store/reducers/workspace"
import { WorkspaceEditorLanguage } from "store/reducers/workspace/types"

import { CodeExecution } from ".."

interface WorkspaceCodeExecutionProps {
  id: string | number
}

function WorkspaceCodeExecution(props: WorkspaceCodeExecutionProps) {
  const workspace = useAppSelector(state => state.workspace)
  const dispatch = useAppDispatch()

  const instance = workspace.instances[props.id]

  function updateLanguage(editorLanguage: WorkspaceEditorLanguage) {
    dispatch(updateWorkspaceInstances({
      [props.id]: { ...instance, editorLanguage }
    }))
  }

  return (
    <CodeExecution defaultLanguage={instance?.editorLanguage} onLanguageChange={updateLanguage} />
  )
}

export default WorkspaceCodeExecution
