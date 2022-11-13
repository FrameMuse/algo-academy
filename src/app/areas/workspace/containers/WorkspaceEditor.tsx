import { EditorProps } from "@monaco-editor/react"
import Editor from "app/ui/synthetic/Editor/Editor"
import { useAppDispatch, useAppSelector } from "store/hooks"
import { updateWorkspaceDrafts } from "store/reducers/workspace"

interface WorkspaceEditorProps extends EditorProps {
  /**
   * If `id` is set, the editor value will be saved in drafts.
   */
  id?: string | number
}

function WorkspaceEditor(props: WorkspaceEditorProps) {
  const workspace = useAppSelector(state => state.workspace)
  const dispatch = useAppDispatch()

  const darft = workspace.drafts[props.id ?? ""]

  function onChange(editorValue: string | undefined) {
    if (props.id == null) return
    if (editorValue == null) return

    dispatch(updateWorkspaceDrafts({
      [props.id]: { editorValue }
    }))
  }

  return (
    <div className="editor">
      <Editor
        theme={workspace.settings.editorTheme}
        options={workspace.settings.editorOptions}

        value={darft?.editorValue}
        onChange={onChange}
        {...props}
      />
    </div>
  )
}

export default WorkspaceEditor
