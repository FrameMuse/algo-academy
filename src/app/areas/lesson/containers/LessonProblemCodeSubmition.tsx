import useRunCode from "api/hooks/user/useRunCode"
import { EditorLanguage } from "app/ui/synthetic/Editor/Editor.types"
import { useAppDispatch } from "store/hooks"
import { updateWorkspace } from "store/reducers/workspace"
import { WorkspaceEditorLanguage } from "store/reducers/workspace/types"

import CodeSubmition from "../components/CodeSubmition/CodeSubmition"

interface LessonProblemCodeSubmitionProps {
  id: string
  language: WorkspaceEditorLanguage
  sourceCode: string
}

function LessonProblemCodeSubmition(props: LessonProblemCodeSubmitionProps) {
  const runCode = useRunCode()
  const dispatch = useAppDispatch()

  function onLanguageChange(editorLanguage: WorkspaceEditorLanguage) {
    dispatch(updateWorkspace({ editorLanguage }))
  }

  async function onRun() {
    const result = await runCode(props.id, {
      language: props.language as unknown as EditorLanguage,
      sourceCode: props.sourceCode
    })

    return result
  }

  return (
    <CodeSubmition onRun={onRun} defaultLanguage={props.language} onLanguageChange={onLanguageChange} />
  )
}

export default LessonProblemCodeSubmition
