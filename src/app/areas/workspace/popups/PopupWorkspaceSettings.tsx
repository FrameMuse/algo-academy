import Column from "app/layouts/Column/Column"
import PopupLayout from "app/layouts/PopupLayout/PopupLayout"
import Row from "app/layouts/Row/Row"
import CodeTheme from "app/ui/kit/Code/CodeTheme"
import Selector from "app/ui/kit/Selector/Selector"
import { optionsFromEnum } from "app/ui/kit/Selector/Selector.helpers"
import { EditorTheme } from "app/ui/synthetic/Editor/Editor.types"
import Tumbler from "app/ui/synthetic/Tumbler/Tumbler"
import { useAppDispatch, useAppSelector } from "store/hooks"
import { updateWorkspaceSettings } from "store/reducers/workspace"
import { WorkspaceEditorLanguage, WorkspaceSettings } from "store/reducers/workspace/types"

import { WorkspaceCode, WorkspaceEditor } from ".."
import FontSizeSelector from "../components/FontSizeSelector/FontSizeSelector"

function PopupWorkspaceSettings() {
  const settings = useAppSelector(state => state.workspace.settings)
  const dispatch = useAppDispatch()

  function updateSettings(settings: Partial<WorkspaceSettings>) {
    dispatch(updateWorkspaceSettings(settings))
  }

  return (
    <PopupLayout width="40em">
      <h3>Workspace Settings</h3>
      <Column>
        <h5>Editor Theme</h5>
        <WorkspaceEditor height="7.5em" defaultLanguage={WorkspaceEditorLanguage.Python} />
        <Row justifyContent="space-between">
          <p>Theme</p>
          <Selector upwards defaultValue={settings.editorTheme} onChange={editorTheme => updateSettings({ editorTheme })}>
            {optionsFromEnum(EditorTheme)}
          </Selector>
        </Row>
        <Row justifyContent="space-between">
          <p>Font Size</p>
          {/* Will rewrite editorOptions completely */}
          <FontSizeSelector onChange={fontSize => updateSettings({ editorOptions: { fontSize } })} />
        </Row>
      </Column>
      <Column>
        <h5>Code Theme</h5>
        <WorkspaceCode />
        <Row justifyContent="space-between">
          <p>Theme</p>
          <Selector upwards defaultValue={settings.codeTheme} onChange={codeTheme => updateSettings({ codeTheme })}>
            {optionsFromEnum(CodeTheme)}
          </Selector>
        </Row>
      </Column>
      <Column>
        <h5>Workspace</h5>
        <Row>
          <p>Dark Theme</p>
          <Tumbler defaultChecked={settings.darkThemeEnabled} onChange={darkThemeEnabled => updateSettings({ darkThemeEnabled })} />
        </Row>
        <Row>
          <p>Code Drafts (in browser only)</p>
          <Tumbler defaultChecked={settings.useDrafts} onChange={useDrafts => updateSettings({ useDrafts })} />
        </Row>
      </Column>
    </PopupLayout>
  )
}

export default PopupWorkspaceSettings
