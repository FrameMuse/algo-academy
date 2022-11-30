import "./ProblemView.scss"

import useLesson from "api/hooks/lessons/useLesson"
import { formatAppTitle } from "app/App"
import { StaticRoutes } from "app/AppRoutes"
import { LessonStatusSelector } from "app/areas/lesson"
import { Templates, WorkspaceCode, WorkspaceEditor, WorkspaceTheme } from "app/areas/workspace"
import PopupSubmitFeedback from "app/areas/workspace/popups/PopupSubmitFeedback"
import PopupWorkspaceSettings from "app/areas/workspace/popups/PopupWorkspaceSettings"
import { WorkspaceCodeExecution } from "app/areas/workspace/types"
import TabLinks from "app/layouts/TabLinks/TabLinks"
import ArticleMarkdown from "app/ui/kit/Article/ArticleMarkdown"
import Button from "app/ui/kit/Button/Button"
import ButtonIcon from "app/ui/kit/Button/ButtonIcon"
import ButtonLink from "app/ui/kit/Button/ButtonLink"
import Icon from "app/ui/kit/Icon/Icon"
import { EDITOR_DEFAULT_VALUE } from "app/ui/synthetic/Editor/Editor"
import ErrorCover from "app/ui/synthetic/ErrorCover/ErrorCover"
import LoaderCover from "app/ui/synthetic/Loader/LoaderCover"
import Logo from "app/ui/synthetic/Logo/Logo"
import TabLink from "app/ui/synthetic/TabRouter/TabLink"
import TabRoute from "app/ui/synthetic/TabRouter/TabRoute"
import TabRouter from "app/ui/synthetic/TabRouter/TabRouter"
import Timer from "app/ui/synthetic/Timer/Timer"
import { Helmet } from "react-helmet"
import { Modal } from "react-modal-global"
import { useAppSelector } from "store/hooks"
import { classWithModifiers } from "utils/common"
import useParam from "utils/hooks/useParam"

function ProblemView() {
  const settings = useAppSelector(state => state.workspace.settings)

  const lessonId = useParam("lessonId")
  const { lesson, isLoading } = useLesson(lessonId)

  if (isLoading) {
    return <LoaderCover />
  }

  if (lesson == null) {
    return <ErrorCover>Chapter is null.</ErrorCover>
  }

  return (
    <>
      <Helmet>
        <title>{formatAppTitle(lesson.title, "Problem")}</title>
      </Helmet>
      <div className={classWithModifiers("problem-layout", settings.darkThemeEnabled && "dark")}>
        <header>
          <div className="problem-header-wrap">
            <Logo />

            <div className="problem-header-level">
              <ButtonIcon name="chevron-left" size="smaller" squared ariaLabel="Previous" />
              <div className="problem-header-level-text">{lesson.title}</div>
              <ButtonIcon name="chevron-right" size="smaller" squared ariaLabel="Next" />
            </div>

            <div className="problem-header__right">
              <LessonStatusSelector id={lessonId} defaultStatus={lesson.status} transparent />

              <Timer />

              <button className="problem-header-feedback" type="button" onClick={() => Modal.open(PopupSubmitFeedback)}>
                <Icon name="question-mark" />
                <span>Submit Feedback</span>
              </button>
            </div>
          </div>
        </header>
        <WorkspaceTheme>
          <div className="problem-layout__container">
            <ProblemLeftSection id={lessonId} />
            <ProblemRightSection id={lessonId} />
          </div>
        </WorkspaceTheme>
      </div>
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

function ProblemLeftSection(props: { id: string }) {
  const { lesson, isLoading } = useLesson(props.id)

  if (isLoading) {
    return <LoaderCover />
  }

  if (lesson == null) {
    return <ErrorCover>Chapter is null.</ErrorCover>
  }

  return (
    <div className="problem-layout__section problem-layout__section--shrink">
      <TabRouter defaultPath={TabRoutes.Problem}>
        <TabLinks>
          <TabLink to={TabRoutes.Problem}>Problem Statment</TabLink>
          <TabLink to={TabRoutes.Hints}>Hints</TabLink>
          <TabLink to={TabRoutes.Solution}>Solution</TabLink>

          <ButtonLink iconLeft="arrow-left" iconRight="" color="gray" size="smaller" squared to={StaticRoutes.FullCourse}>To course</ButtonLink>
        </TabLinks>

        <TabRoute path={TabRoutes.Problem}>
          <ArticleMarkdown content={lesson.statement} />
        </TabRoute>

        <TabRoute path={TabRoutes.Hints}>
          <ArticleMarkdown content={lesson.hints} />
        </TabRoute>

        <TabRoute path={TabRoutes.Solution}>
          {/* <ArticleMarkdown content={lesson} /> */}
        </TabRoute>
      </TabRouter>
    </div>
  )
}

function ProblemRightSection(props: { id: string }) {
  // const workspace = useAppSelector(state => state.workspace)

  const { lesson, isLoading } = useLesson(props.id)

  if (isLoading) {
    return <LoaderCover />
  }

  if (lesson == null) {
    return <ErrorCover>Chapter is null.</ErrorCover>
  }


  // const instance = workspace.instances[props.id]
  const resource = lesson.resources.find(resource => resource.language)

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
          <WorkspaceEditor id={props.id} defaultLanguage={resource?.language} defaultValue={resource?.defaultCode} height="100%" />
          <WorkspaceCodeExecution id={props.id} />
        </TabRoute>

        <TabRoute path={TabRoutes.Templates}>
          <Templates templates={[{ name: "DFS", content: EDITOR_DEFAULT_VALUE, runTime: "O(n)", space: "O(n)" }]} />
        </TabRoute>

        <TabRoute path={TabRoutes.Tests}>
          {resource?.tests && (
            <WorkspaceCode>{resource.tests}</WorkspaceCode>
          )}
        </TabRoute>

      </TabRouter>
    </div>
  )
}

export default ProblemView
