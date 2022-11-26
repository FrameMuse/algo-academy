import "./ProblemView.scss"

import { APP_TITLE } from "app/App"
import { Templates, WorkspaceEditor } from "app/areas/workspace"
import PopupSubmitFeedback from "app/areas/workspace/popups/PopupSubmitFeedback"
import PopupWorkspaceSettings from "app/areas/workspace/popups/PopupWorkspaceSettings"
import { WorkspaceCodeExecution } from "app/areas/workspace/types"
import TabLinks from "app/layouts/TabLinks/TabLinks"
import Article from "app/ui/kit/Article/Article"
import Button from "app/ui/kit/Button/Button"
import ButtonIcon from "app/ui/kit/Button/ButtonIcon"
import Details from "app/ui/kit/Details/Details"
import Icon from "app/ui/kit/Icon/Icon"
import Selector from "app/ui/kit/Selector/Selector"
import { EDITOR_DEFAULT_VALUE } from "app/ui/synthetic/Editor/Editor"
import Logo from "app/ui/synthetic/Logo/Logo"
import TabLink from "app/ui/synthetic/TabRouter/TabLink"
import TabRoute from "app/ui/synthetic/TabRouter/TabRoute"
import TabRouter from "app/ui/synthetic/TabRouter/TabRouter"
import Theme from "app/ui/synthetic/Theme/Theme"
import Timer from "app/ui/synthetic/Timer/Timer"
import { Helmet } from "react-helmet"
import { Modal } from "react-modal-global"
import { useAppSelector } from "store/hooks"
import { classWithModifiers } from "utils/common"

function ProblemView() {
  return (
    <>
      <Helmet>
        <title>{APP_TITLE + " | " + "Problem"}</title>
      </Helmet>
      <WorkspaceContainer />
    </>
  )
}

enum TabRoutes {
  Problem,
  Hints,
  Solution,
  Code,
  Tests,
  Templates,
  Notes,
}

function WorkspaceContainer() {
  const settings = useAppSelector(state => state.workspace.settings)
  return (
    <div className={classWithModifiers("problem-layout", settings.darkThemeEnabled && "dark")}>
      <header>
        <div className="workspace-header-wrap">
          <Logo />

          <div className="workspace-header-level">
            <ButtonIcon name="chevron-left" size="smaller" squared ariaLabel="Previous" />
            <div className="workspace-header-level-text">Level Order Traversal</div>
            <ButtonIcon name="chevron-right" size="smaller" squared ariaLabel="Next" />
          </div>

          <div className="workspace-header__right">
            <Selector defaultValue="1" transparent>
              <option value="1">Not completed</option>
              <option value="2">Completed</option>
            </Selector>

            <Timer />

            <button className="workspace-header-feedback" type="button" onClick={() => Modal.open(PopupSubmitFeedback)}>
              <Icon name="question-mark" />
              <span>Submit Feedback</span>
            </button>
          </div>
        </div>
      </header>
      <Theme theme={settings.darkThemeEnabled ? "dark" : "light"}>
        <div className="problem-layout__container">
          <WorkspaceLeftSection />
          <WorkspaceRightSection />
        </div>
      </Theme>
    </div>
  )
}

function WorkspaceLeftSection() {
  return (
    <div className="problem-layout__section problem-layout__section--shrink">
      <TabRouter defaultPath={TabRoutes.Problem}>
        <TabLinks>
          <TabLink to={TabRoutes.Problem}>Problem Statment</TabLink>
          <TabLink to={TabRoutes.Hints}>Hints</TabLink>
          <TabLink to={TabRoutes.Solution}>Solution</TabLink>
          <ButtonIcon name="home" color="gray" size="smaller" squared ariaLabel="go home" />
        </TabLinks>

        <TabRoute path={TabRoutes.Problem}>
          {/* <WorkspaceCode lang="json">{"{\"a\": 1}"}</WorkspaceCode> */}
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

        <TabRoute path={TabRoutes.Hints}>
          <Article fontSize="small">
            <h3>Hint #1</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
            </p>

            <h3>Hint #2</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
            </p>

            <h3>Hint #3</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
            </p>
          </Article>
        </TabRoute>
      </TabRouter>
    </div>
  )
}

function WorkspaceRightSection() {
  return (
    <div className="problem-layout__section">
      <TabRouter defaultPath={TabRoutes.Code}>
        <TabLinks>
          <TabLink to={TabRoutes.Code}>Code</TabLink>
          <TabLink to={TabRoutes.Tests}>Tests</TabLink>
          <TabLink to={TabRoutes.Templates}>Templates</TabLink>
          <TabLink to={TabRoutes.Notes}>Notes</TabLink>

          <Button iconLeft="gear" color="gray" size="smaller" squared onClick={() => Modal.open(PopupWorkspaceSettings)}>Settings</Button>
        </TabLinks>

        <TabRoute path={TabRoutes.Code}>
          <WorkspaceEditor id="test" height="100%" />
          <WorkspaceCodeExecution id="test" />
        </TabRoute>

        <TabRoute path={TabRoutes.Templates}>
          <Templates templates={[{ name: "DFS", content: EDITOR_DEFAULT_VALUE, runTime: "O(n)", space: "O(n)" }]} />
        </TabRoute>

      </TabRouter>
    </div>
  )
}

export default ProblemView
