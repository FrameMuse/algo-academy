import { EditorProps } from "@monaco-editor/react"
import Editor from "app/ui/synthetic/Editor/Editor"
import { useAppDispatch, useAppSelector } from "store/hooks"
import { updateWorkspaceInstances } from "store/reducers/workspace"

interface WorkspaceEditorProps extends EditorProps {
  /**
   * If `id` is set, the editor value will be saved in drafts.
   */
  draftId?: string | number
}

function WorkspaceEditor(props: WorkspaceEditorProps) {
  const workspace = useAppSelector(state => state.workspace)
  const dispatch = useAppDispatch()

  const instance = workspace.settings.useDrafts ? workspace.instances[props.draftId ?? ""] : undefined

  function onChange(editorValue: string | undefined) {
    console.log(editorValue, props)

    if (editorValue == null) return
    if (props.draftId == null) return

    if (editorValue === props.value) return
    if (editorValue === props.defaultValue) return

    dispatch(updateWorkspaceInstances({
      [props.draftId]: { ...instance, editorValue }
    }))
  }

  return (
    <div className="editor">
      <Editor
        theme={workspace.settings.editorTheme}
        options={workspace.settings.editorOptions}
        value={instance?.editorValue ?? props.defaultValue}
        language={workspace.editorLanguage}
        defaultLanguage={workspace.editorLanguage}
        onChange={onChange}
        {...props}
      />
    </div>
  )
}

export default WorkspaceEditor
