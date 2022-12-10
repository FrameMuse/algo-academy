import "./ProblemView.scss"

import useLesson from "api/hooks/lessons/useLesson"
import useLessonContents from "api/hooks/lessons/useLessonContents"
import useUpdateLessonByLanguage from "api/hooks/lessons/useUpdateLessonByLanguage"
import useSnippets from "api/hooks/snippets/useSnippets"
import { formatAppTitle } from "app/App"
import { StaticRoutes } from "app/AppRoutes"
import { LessonStatusSelector, useLessonNavigate } from "app/areas/lesson"
import { Snippets, WorkspaceCodeSubmition, WorkspaceEditor, WorkspaceTheme } from "app/areas/workspace"
import PopupSubmitFeedback from "app/areas/workspace/popups/PopupSubmitFeedback"
import PopupWorkspaceSettings from "app/areas/workspace/popups/PopupWorkspaceSettings"
import QueryBoundary from "app/containers/QueryBoundary"
import Headings from "app/layouts/Headings/Headings"
import TabLinks from "app/layouts/TabLinks/TabLinks"
import ArticleMarkdown from "app/ui/kit/Article/ArticleMarkdown"
import Button from "app/ui/kit/Button/Button"
import ButtonIcon from "app/ui/kit/Button/ButtonIcon"
import ButtonLink from "app/ui/kit/Button/ButtonLink"
import Icon from "app/ui/kit/Icon/Icon"
import { EditorLanguage, EdtitorSnippet } from "app/ui/synthetic/Editor/Editor.types"
import Loader from "app/ui/synthetic/Loader/Loader"
import Logo from "app/ui/synthetic/Logo/Logo"
import TabLink from "app/ui/synthetic/TabRouter/TabLink"
import TabRoute from "app/ui/synthetic/TabRouter/TabRoute"
import TabRouter from "app/ui/synthetic/TabRouter/TabRouter"
import Timer from "app/ui/synthetic/Timer/Timer"
import _ from "lodash"
import { useState } from "react"
import { Helmet } from "react-helmet"
import { Modal } from "react-modal-global"
import { useAppSelector } from "store/hooks"
import { classWithModifiers } from "utils/common"
import useParam from "utils/hooks/useParam"

function ProblemView() {
  const settings = useAppSelector(state => state.workspace.settings)

  const lessonId = useParam("lessonId")
  const lesson = useLesson(lessonId)

  const { navigateToPrev, navigateToNext } = useLessonNavigate(lesson.id, lesson.chapterRelation?.id, "../../")

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
              <ButtonIcon name="chevron-left" size="smaller" squared ariaLabel="Previous" onClick={navigateToPrev} />
              <div className="problem-header-level-text">{lesson.title}</div>
              <ButtonIcon name="chevron-right" size="smaller" squared ariaLabel="Next" onClick={navigateToNext} />
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
            <QueryBoundary>
              <ProblemLeftSection id={lessonId} />
            </QueryBoundary>
            <QueryBoundary>
              <ProblemRightSection id={lessonId} />
            </QueryBoundary>
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
  Snippets,
  Notes,
}

function ProblemLeftSection(props: { id: string }) {
  const lesson = useLesson(props.id)

  const workspace = useAppSelector(state => state.workspace)
  const editorLanguage = workspace.editorLanguage as unknown as EditorLanguage
  const contents = useLessonContents(props.id, editorLanguage)

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
          <ArticleMarkdown content={lesson.statement} fontSize="small" />
        </TabRoute>

        <TabRoute path={TabRoutes.Hints}>
          <ArticleMarkdown content={lesson.hints} fontSize="small" />
        </TabRoute>

        <TabRoute path={TabRoutes.Solution}>
          <ArticleMarkdown content={contents.solution} />
        </TabRoute>
      </TabRouter>
    </div>
  )
}

function ProblemRightSection(props: { id: string }) {
  const workspace = useAppSelector(state => state.workspace)
  const editorLanguage = workspace.editorLanguage as unknown as EditorLanguage


  const id = `${props.id}-${editorLanguage}-code`
  const contents = useLessonContents(props.id, editorLanguage)


  const snippets = useSnippets(editorLanguage)
  const editorSnippets: EdtitorSnippet[] = snippets.map(snippet => ({
    label: snippet.label,
    insertText: snippet.content,
    description: `Run time: ${snippet.runTime}; Space: ${snippet.space}`
  }))

  return (
    <div className="problem-layout__section">
      <TabRouter defaultPath={TabRoutes.Code}>
        <TabLinks>
          <TabLink to={TabRoutes.Code}>Code</TabLink>
          <TabLink to={TabRoutes.Tests}>Tests</TabLink>
          <TabLink to={TabRoutes.Snippets}>Snippets</TabLink>
          <TabLink to={TabRoutes.Notes}>Notes</TabLink>

          <Button iconLeft="gear" color="gray" size="smaller" squared onClick={() => Modal.open(PopupWorkspaceSettings)}>Settings</Button>
        </TabLinks>

        <TabRoute path={TabRoutes.Code}>
          <WorkspaceEditor
            height="100%"

            draftId={id}
            snippets={editorSnippets}
            defaultLanguage={contents?.language}
            defaultValue={contents?.defaultCode}
          />
          <WorkspaceCodeSubmition draftId={id} lessonId={props.id} />
        </TabRoute>

        {/* <TabRoute path={TabRoutes.Tests}>
          {contents?.tests && (
            <WorkspaceCode>{contents.tests}</WorkspaceCode>
          )}
        </TabRoute> */}

        <TabRoute path={TabRoutes.Snippets}>
          <Headings>
            <h4>Snippets</h4>
            <p>Pieces of code that could help you solving a problem.</p>
            {/* <p>Tip: Try typing <CodeInline>{snippets[0]?.label}</CodeInline> in code section.</p> */}
          </Headings>
          <Snippets snippets={snippets} />
        </TabRoute>

        <TabRoute path={TabRoutes.Notes}>
          <ProblemNotes id={props.id} language={editorLanguage} />
        </TabRoute>

      </TabRouter>
    </div>
  )
}













interface ProblemNotesProps {
  id: string
  language: EditorLanguage
}

function ProblemNotes(props: ProblemNotesProps) {
  const [pending, setPending] = useState(false)

  const id = `${props.id}-${props.language}-notes`

  const lessonContents = useLessonContents(props.id, props.language)
  const updateLesson = useUpdateLessonByLanguage()

  async function onChange(value: string | undefined) {
    if (value == null) return

    setPending(true)
    await updateLesson(props.id, props.language, { notes: value })
    setPending(false)
  }
  const onChangeThrottled = _.debounce(onChange, 1000, { trailing: true })


  const pendingSavingElement = <p>Saving... <div><Loader /></div></p>
  const upToDateElement = <p>Up to date <Icon name="check" /></p>
  return (
    <>
      <Headings>
        <h4>Notes</h4>
        <p>Here you can quicly take a note.</p>
        {pending ? pendingSavingElement : upToDateElement}
      </Headings>
      <WorkspaceEditor
        draftId={id}
        height="100%"

        value="" // to prevent updating default value when lesson is refetched.
        defaultValue={lessonContents.notes}
        defaultLanguage={EditorLanguage.Markdown}

        onChange={onChangeThrottled}
      />
    </>
  )
}

export default ProblemView
