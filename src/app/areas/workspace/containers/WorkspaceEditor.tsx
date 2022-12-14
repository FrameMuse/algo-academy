import Editor, { EditorProps } from "app/ui/synthetic/Editor/Editor"
import monaco from "monaco-editor/esm/vs/editor/editor.api"
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

  function onChange(value: string | undefined, event: monaco.editor.IModelContentChangedEvent) {
    props.onChange?.(value, event)

    if (props.draftId == null) return
    dispatch(updateWorkspaceInstances({
      [props.draftId]: { ...instance, editorValue: value }
    }))
  }

  return (
    <div className="editor">
      <Editor
        keepCurrentModel

        theme={workspace.settings.editorTheme}
        options={workspace.settings.editorOptions}

        path={props.draftId}
        defaultPath={props.draftId}

        language={workspace.editorLanguage}
        defaultLanguage={workspace.editorLanguage}

        value={instance?.editorValue ?? props.defaultValue}
        defaultValue={instance?.editorValue ?? props.defaultValue}

        {...props}
        onChange={onChange}
      />
    </div>
  )
}

export default WorkspaceEditor
