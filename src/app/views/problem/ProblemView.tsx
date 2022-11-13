import "./ProblemView.scss"

import { CodeExecution, WorkspaceCode, WorkspaceEditor } from "app/areas/workspace"
import Buttons from "app/layouts/Buttons/Buttons"
import Column from "app/layouts/Column/Column"
import PopupLayout from "app/layouts/PopupLayout/PopupLayout"
import Row from "app/layouts/Row/Row"
import TabLinks from "app/layouts/TabLinks/TabLinks"
import Article from "app/ui/kit/Article/Article"
import Button from "app/ui/kit/Button/Button"
import ButtonIcon from "app/ui/kit/Button/ButtonIcon"
import CodeTheme from "app/ui/kit/Code/CodeTheme"
import Details from "app/ui/kit/Details/Details"
import Field from "app/ui/kit/Field/Field"
import Selector from "app/ui/kit/Selector/Selector"
import { optionsFromEntries } from "app/ui/kit/Selector/Selector.helpers"
import { EDITOR_DEFAULT_LANGUAGE } from "app/ui/synthetic/Editor/Editor"
import { EditorTheme } from "app/ui/synthetic/Editor/Editor.types"
import TabLink from "app/ui/synthetic/TabRouter/TabLink"
import TabRoute from "app/ui/synthetic/TabRouter/TabRoute"
import TabRouter from "app/ui/synthetic/TabRouter/TabRouter"
import Theme from "app/ui/synthetic/Theme/Theme"
import Tumbler from "app/ui/synthetic/Tumbler/Tumbler"
import { useState } from "react"
import { Modal, useModalContext } from "react-modal-global"
import { useAppDispatch, useAppSelector } from "store/hooks"
import { updateWorkspaceSettings } from "store/reducers/workspace"
import { WorkspaceSettings } from "store/reducers/workspace/types"
import { classWithModifiers, getEnumEntries } from "utils/common"

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
        <WorkspaceEditor height="7.5em" />
        <Row justifyContent="space-between">
          <p>Theme</p>
          <Selector upwards defaultValue={settings.editorTheme} onChange={editorTheme => updateSettings({ editorTheme })}>
            {optionsFromEntries(getEnumEntries(EditorTheme), true)}
          </Selector>
        </Row>
        <Row justifyContent="space-between">
          <p>Font Family</p>
          <Field />
        </Row>
      </Column>
      <Column>
        <h5>Code Theme</h5>
        <WorkspaceCode />
        <Row justifyContent="space-between">
          <p>Theme</p>
          <Selector upwards defaultValue={settings.codeTheme} onChange={codeTheme => updateSettings({ codeTheme })}>
            {optionsFromEntries(getEnumEntries(CodeTheme), true)}
          </Selector>
        </Row>
      </Column>
      <Column>
        <h5>Workspace</h5>
        <Row>
          <p>Dark Theme</p>
          <Tumbler defaultChecked={settings.darkThemeEnabled} onChange={darkThemeEnabled => updateSettings({ darkThemeEnabled })} />
        </Row>
      </Column>
    </PopupLayout>
  )
}

function PopupConfirm(props: { onSubmit?: () => void }) {
  const modal = useModalContext()
  function onSubmit() {
    modal.close()
    props.onSubmit?.()
  }
  return (
    <PopupLayout>
      <h5>The solution will be reveal</h5>

      <Buttons>
        <Button color="gray" onClick={onSubmit}>Ok</Button>
        <Button color="dark" onClick={modal.close}>Cancel</Button>
      </Buttons>
    </PopupLayout>
  )
}

function ProblemView() {
  const settings = useAppSelector(state => state.workspace.settings)
  const [codeLanguage, setCodeLanguage] = useState(EDITOR_DEFAULT_LANGUAGE)
  return (
    <Theme theme={settings.darkThemeEnabled ? "dark" : "light"}>
      <div className={classWithModifiers("problem-layout", settings.darkThemeEnabled && "dark")}>
        <header>
          <div className="code-header-wrap">
            <a href="/" className="logo">&lt;Algo Academy/&gt;</a>

            <div className="header-level">
              <ButtonIcon name="chevron-left" size="smaller" squared ariaLabel="Previous" />
              <div className="header-level-text">Level Order Traversal</div>
              <ButtonIcon name="chevron-right" size="smaller" squared ariaLabel="Next" />
            </div>

            <div className="header-code-right">
              <div className="header-status">
                <Selector defaultValue="1" transparent>
                  <option value="1">Not completed</option>
                  <option value="2">Completed</option>
                </Selector>
              </div>

              <div className="header-time">
                <img src="/static/images/header-time.svg" alt="" className="header-time-img" />
                <div className="header-time-inner">05:10</div>
              </div>

              <a href="#" className="header-feedback show-feedback-modal">
                <svg width="24" height="24">
                  ?
                </svg>
                <span className="header-feedback-text">Submit Feedback</span>
              </a>
            </div>
          </div>
        </header>
        <div className="problem-layout__container">
          <div className="problem-layout__section problem-layout__section--short">
            <TabRouter defaultPath="problem">
              <TabLinks>
                <TabLink to="problem">Problem Statment</TabLink>
                <TabLink to="solution">Solution Video</TabLink>
                <ButtonIcon name="home" color="gray" size="smaller" squared ariaLabel="go home" />
              </TabLinks>

              <TabRoute path="problem">
                <WorkspaceCode lang="json">{"{\"a\": 1}"}</WorkspaceCode>
                <Article fontSize="small">
                  <h2>Interview Question</h2>
                  <h3>Level Order Traversal</h3>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>

                  <Details summary="Example #1" defaultExpanded>
                    Input: [2, 1, 5, 1, 3, 2], k=3 <br />
                    Output: 9 <br />
                    Explanation: Subarray with maximum sum is [5, 1, 3].
                  </Details>
                  <Details summary="Example #2" defaultExpanded>
                    Input: [2, 1, 5, 1, 3, 2], k=3 <br />
                    Output: 9 <br />
                    Explanation: Subarray with maximum sum is [5, 1, 3].
                  </Details>
                  <Details summary="Example #3" defaultExpanded>
                    Input: [2, 1, 5, 1, 3, 2], k=3 <br />
                    Output: 9 <br />
                    Explanation: Subarray with maximum sum is [5, 1, 3].
                  </Details>

                  <h4>Constraints</h4>
                  <ul>
                    <li>sample constraint one</li>
                    <li>sample constraint two</li>
                    <li>sample constraint three</li>
                  </ul>
                </Article>
              </TabRoute>
            </TabRouter>
          </div>
          <div className="problem-layout__section">
            <TabRouter defaultPath="code">
              <TabLinks>
                <TabLink to="code">Code</TabLink>
                <TabLink to="hints">Hints</TabLink>
                <TabLink to="templates">Templates</TabLink>
                <TabLink to="tests">Tests</TabLink>
                <TabLink to="notes">Notes</TabLink>
                {/* <TabLink to="solution" verification={() => window.confirm("The solution will be reveal.")}>Solution</TabLink> */}
                <TabLink to="solution" verification={async () => {
                  let verified = false

                  await Modal.open(PopupConfirm, {
                    onSubmit() {
                      verified = true
                    },
                  })

                  return verified
                }}>Solution</TabLink>

                <Button iconLeft="gear" color="gray" size="smaller" squared onClick={() => Modal.open(PopupWorkspaceSettings)}>Settings</Button>
              </TabLinks>

              <TabRoute path="code">
                <WorkspaceEditor
                  id="test"
                  height="100%"
                  language={codeLanguage}
                />
                <CodeExecution />
                {/* <div className="code-bottom">
                  <div className="code-bottom-line">
                    <Buttons>
                      <Button size="small">Run Code</Button>
                      <Button size="small" color="gray">Reset</Button>

                    </Buttons>
                    <div className="code-bottom-lang">
                      <Selector size="big" upwards defaultValue={codeLanguage} onChange={setCodeLanguage}>
                        {optionsFromEntries(getEnumEntries(WorkspaceEditorLanguages))}
                      </Selector>
                    </div>
                  </div>
                </div> */}
              </TabRoute>

            </TabRouter>
          </div>
        </div>
      </div>
    </Theme>
  )
}

export default ProblemView
