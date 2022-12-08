import "./ProblemView.scss"

import useLesson from "api/hooks/lessons/useLesson"
import { formatAppTitle } from "app/App"
import { StaticRoutes } from "app/AppRoutes"
import { LessonStatusSelector, useLessonNavigate } from "app/areas/lesson"
import { Snippets, WorkspaceCode, WorkspaceEditor, WorkspaceTheme } from "app/areas/workspace"
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
import Logo from "app/ui/synthetic/Logo/Logo"
import TabLink from "app/ui/synthetic/TabRouter/TabLink"
import TabRoute from "app/ui/synthetic/TabRouter/TabRoute"
import TabRouter from "app/ui/synthetic/TabRouter/TabRouter"
import Timer from "app/ui/synthetic/Timer/Timer"
import { Helmet } from "react-helmet"
import { Modal } from "react-modal-global"
import { useAppSelector } from "store/hooks"
import { WorkspaceEditorLanguage } from "store/reducers/workspace/types"
import { classWithModifiers } from "utils/common"
import useParam from "utils/hooks/useParam"

function ProblemView() {
  const settings = useAppSelector(state => state.workspace.settings)

  const lessonId = useParam("lessonId")
  const lesson = useLesson(lessonId)

  const { navigateToPrev, navigateToNext } = useLessonNavigate(lesson.id, lesson.chapterRelation?.id)

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
  Snippets,
  Notes,
}

function ProblemLeftSection(props: { id: string }) {
  const lesson = useLesson(props.id)

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
          {/* <ArticleMarkdown content={lesson} /> */}
        </TabRoute>
      </TabRouter>
    </div>
  )
}

function ProblemRightSection(props: { id: string }) {
  const workspace = useAppSelector(state => state.workspace)

  const lesson = useLesson(props.id)

  const id = `${props.id}-${workspace.editorLanguage}`
  const resource = lesson.resources.find(resource => (resource.language as unknown as WorkspaceEditorLanguage) === workspace.editorLanguage)

  // const asd = `function dfs(state, res) {
  //   if (isSolution(state)) {
  //       // add a copy of the state to the result
  //       res.push(new Array(state));
  //       return;
  //   }
  //   for (const choice of choices) {
  //       state.push(choice);
  //       dfs(state, res);
  //       state.pop();
  //   }
  // }`

  // const monaco = useMonaco()
  // useEffect(() => {
  //   if (monaco == null) return

  //   const languages = monaco.languages
  //   languages.registerCompletionItemProvider("typescript", {
  //     provideCompletionItems(model, position) {
  //       const snippets: ISnippet[] = [{
  //         label: "DFS",
  //         detail: "Depth-first search",
  //         description: "Run Time: O(n); Space: O(n)",

  //         insertText: asd
  //       },
  //       {
  //         label: "Depth-first search",
  //         description: "Run Time: O(n); Space: O(n)",

  //         insertText: asd
  //       }]

  //       const word = model.getWordUntilPosition(position)
  //       const range = {
  //         startLineNumber: position.lineNumber,
  //         endLineNumber: position.lineNumber,
  //         startColumn: word.startColumn,
  //         endColumn: word.endColumn
  //       }

  //       function mapSnippet(snippet: ISnippet): languages.CompletionItem {
  //         return {
  //           kind: languages.CompletionItemKind.Snippet,
  //           range,
  //           label: snippet,
  //           insertText: snippet.insertText
  //         }
  //       }

  //       return { suggestions: snippets.map(mapSnippet) }
  //     },
  //   })
  // }, [monaco])

  // interface ISnippet {
  //   label: string
  //   insertText: string
  //   detail?: string
  //   description?: string
  // }



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
          <WorkspaceEditor draftId={id} defaultLanguage={resource?.language} defaultValue={resource?.defaultCode} height="100%" />
          <WorkspaceCodeExecution draftId={id} lessonId={props.id} />
        </TabRoute>

        <TabRoute path={TabRoutes.Snippets}>
          <Snippets Snippets={[{ label: "DFS", content: EDITOR_DEFAULT_VALUE, runTime: "O(n)", space: "O(n)" }]} />
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
