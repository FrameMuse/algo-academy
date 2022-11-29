import useRunCode from "api/hooks/useRunCode"
import { useState } from "react"
import { useAppDispatch, useAppSelector } from "store/hooks"
import { updateWorkspaceInstances } from "store/reducers/workspace"
import { WorkspaceEditorLanguage } from "store/reducers/workspace/types"

import { CodeExecution } from ".."

interface WorkspaceCodeExecutionProps {
  id: string
}

function WorkspaceCodeExecution(props: WorkspaceCodeExecutionProps) {
  const runCode = useRunCode()
  const [result, setResult] = useState<any>()

  const workspace = useAppSelector(state => state.workspace)
  const dispatch = useAppDispatch()

  const instance = workspace.instances[props.id]

  function updateLanguage(editorLanguage: WorkspaceEditorLanguage) {
    dispatch(updateWorkspaceInstances({
      [props.id]: { ...instance, editorLanguage }
    }))
  }

  async function onRun() {
    if (instance == null) return
    if (instance.editorValue == null) return


    const response = await runCode(props.id, {
      languageId: 74,
      lessonId: props.id,
      sourceCode: instance.editorValue
    })
    // console.log(response)

    setResult(response?.payload)
  }
  function onReset() { }

  return (
    <CodeExecution result={result} onRun={onRun} defaultLanguage={instance?.editorLanguage} onLanguageChange={updateLanguage} />
  )
}

export default WorkspaceCodeExecution
