import { EditorProps } from "@monaco-editor/react"
import Editor from "app/ui/synthetic/Editor/Editor"
import { useAppDispatch, useAppSelector } from "store/hooks"
import { updateWorkspaceInstances } from "store/reducers/workspace"

interface WorkspaceEditorProps extends EditorProps {
  /**
   * If `id` is set, the editor value will be saved in drafts.
   */
  draftId?: string
}

/**
 * yTODO: Rework/Rewise draft system
 */
function WorkspaceEditor(props: WorkspaceEditorProps) {
  const workspace = useAppSelector(state => state.workspace)
  const dispatch = useAppDispatch()

  // TODO: Rework/Rewise draft system
  const instance = workspace.settings.useDrafts ? workspace.instances[props.draftId ?? ""] : undefined

  function onChange(editorValue: string | undefined) {
    console.log(props.draftId, editorValue, props.defaultValue, instance?.editorValue)

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
        keepCurrentModel

        theme={workspace.settings.editorTheme}
        options={workspace.settings.editorOptions}

        language={workspace.editorLanguage}
        defaultLanguage={workspace.editorLanguage}

        path={props.draftId}
        defaultPath={props.draftId}

        value={instance?.editorValue ?? props.defaultValue}
        defaultValue={instance?.editorValue ?? props.defaultValue}

        onChange={onChange}
        {...props}
      />
    </div>
  )
}

export default WorkspaceEditor
