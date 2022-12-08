import useRunCode from "api/hooks/user/useRunCode"
import { EditorLanguage } from "app/ui/synthetic/Editor/Editor.types"
import { useState } from "react"
import { useAppDispatch, useAppSelector } from "store/hooks"
import { updateWorkspace } from "store/reducers/workspace"
import { WorkspaceEditorLanguage } from "store/reducers/workspace/types"

import { CodeExecution } from ".."

interface WorkspaceCodeExecutionProps {
  draftId: string
  lessonId: string
}

function WorkspaceCodeExecution(props: WorkspaceCodeExecutionProps) {
  const runCode = useRunCode()
  const [result, setResult] = useState<any>()

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

    const response = await runCode(props.lessonId, {
      language: workspace.editorLanguage as unknown as EditorLanguage,
      sourceCode: instance.editorValue
    })

    setResult(response?.payload)
  }

  return (
    <CodeExecution result={result} onRun={onRun} defaultLanguage={workspace.editorLanguage} onLanguageChange={onLanguageChange} />
  )
}

export default WorkspaceCodeExecution
