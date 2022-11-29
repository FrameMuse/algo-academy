import { EditorProps } from "@monaco-editor/react"
import Editor, { EDITOR_DEFAULT_LANGUAGE } from "app/ui/synthetic/Editor/Editor"
import { useAppDispatch, useAppSelector } from "store/hooks"
import { updateWorkspaceInstances } from "store/reducers/workspace"

interface WorkspaceEditorProps extends EditorProps {
  /**
   * If `id` is set, the editor value will be saved in drafts.
   */
  id?: string | number
}

function WorkspaceEditor(props: WorkspaceEditorProps) {
  const workspace = useAppSelector(state => state.workspace)
  const dispatch = useAppDispatch()

  const instance = workspace.settings.useDrafts ? workspace.instances[props.id ?? ""] : undefined

  function onChange(editorValue: string | undefined) {
    if (props.id == null) return
    if (editorValue == null) return

    dispatch(updateWorkspaceInstances({
      [props.id]: { ...instance, editorValue }
    }))
  }

  return (
    <div className="editor">
      <Editor
        theme={workspace.settings.editorTheme}
        options={workspace.settings.editorOptions}
        value={instance?.editorValue ?? props.defaultValue}
        language={instance?.editorLanguage}
        defaultLanguage={instance?.editorLanguage ?? EDITOR_DEFAULT_LANGUAGE}
        onChange={onChange}
        {...props}
      />
    </div>
  )
}

export default WorkspaceEditor
