import useRunCode from "api/hooks/user/useRunCode"
import { EditorLanguage } from "app/ui/synthetic/Editor/Editor.types"
import { useAppDispatch, useAppSelector } from "store/hooks"
import { updateWorkspace } from "store/reducers/workspace"
import { WorkspaceEditorLanguage } from "store/reducers/workspace/types"

import { CodeSubmition } from ".."

interface WorkspaceCodeSubmitionProps {
  draftId: string
  lessonId: string
}

function WorkspaceCodeSubmition(props: WorkspaceCodeSubmitionProps) {
  const runCode = useRunCode()

  const workspace = useAppSelector(state => state.workspace)
  const dispatch = useAppDispatch()

  // TODO: Rework/Rewise draft system
  const instance = workspace.instances[props.draftId]

  function onLanguageChange(editorLanguage: WorkspaceEditorLanguage) {
    dispatch(updateWorkspace({ editorLanguage }))
  }

  async function onRun() {
    if (instance == null) return
    if (instance.editorValue == null) return

    const result = await runCode(props.lessonId, {
      language: workspace.editorLanguage as unknown as EditorLanguage,
      sourceCode: instance.editorValue
    })

    return result
  }

  return (
    <CodeSubmition onRun={onRun} defaultLanguage={workspace.editorLanguage} onLanguageChange={onLanguageChange} />
  )
}

export default WorkspaceCodeSubmition
