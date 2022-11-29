import useLesson from "api/hooks/lessons/useLesson"
import useUpdateLesson from "api/hooks/lessons/useUpdateLesson"
import Headings from "app/layouts/Headings/Headings"
import Row from "app/layouts/Row/Row"
import Selector from "app/ui/kit/Selector/Selector"
import { EditorLanguage } from "app/ui/synthetic/Editor/Editor.types"
import EditorPreview from "app/ui/synthetic/EditorPreview/EditorPreview"
import ErrorCover from "app/ui/synthetic/ErrorCover/ErrorCover"
import LoaderCover from "app/ui/synthetic/Loader/LoaderCover"
import { useState } from "react"



// const SAMPLE_PROBLEM_STATEMENT = `## Interview Question
// ### Level Order Traversal
// Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.

// <details title="Example #1">
// Input: [2, 1, 5, 1, 3, 2], k=3

// Output: 9

// Explanation: Subarray with maximum sum is [5, 1, 3].
// </details>

// <details title="Example #2" open>
// Input: [2, 1, 5, 1, 3, 2], k=3

// Output: 9

// Explanation: Subarray with maximum sum is [5, 1, 3].
// </details>

// <details title="Example #3">
// Input: [2, 1, 5, 1, 3, 2], k=3

// Output: 9

// Explanation: Subarray with maximum sum is [5, 1, 3].
// </details>

// ### Constraints
// - sample constraint one
// - sample constraint two
// - sample constraint three`

// const SAMPLE_ARTICLE = `## Understanding the Problem

// <video poster="/static/images/video1.jpg"></video>

// Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

// ### Section 1
// Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

// - item 1
// - item 2
// - item 3

// Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet

// ![People sitting face to face](/static/images/video1.jpg)

// Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

// 1. item 1
// 1. item 2
// 1. item 3

// Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet`

// type ContentKey = Exclude<keyof LessonMultipleContent, "language">
type ContentKey = "statement" | "hints"

interface LessonMultipleContentEditProps {
  multipleContent: Record<ContentKey, string>
  onSave?(value: string, contentKey: ContentKey, language?: EditorLanguage): void
}

function LessonMultipleContentEdit(props: LessonMultipleContentEditProps) {
  const [tab, setTab] = useState<ContentKey>()
  const [language, setLanguage] = useState<EditorLanguage>()

  // const multipleContent = props.multipleContents.find(content => content.language === language)
  const content = tab && props.multipleContent?.[tab]

  function onSave(value: string) {
    if (tab == null) return

    props.onSave?.(value, tab, language)
  }

  return (
    <>
      <Headings>
        <h3>Multiple Content</h3>
        <p>Choose, at least a tab to start editing.</p>
      </Headings>
      <Row>
        <Selector<ContentKey> onChange={setTab}>
          <option value="statement">Problem Statment</option>
          <option value="hints">Hints</option>
          {/* <option value="solution">Solution</option> */}

          {/* <option value="defaultCode">Default Code</option> */}
        </Selector>
        {/* <Selector onChange={setLanguage}>
          {optionsFromEnum(WorkspaceEditorLanguage, false)}
        </Selector> */}
      </Row>
      {tab && (
        // Pass a `key` attribute here to give to component states a depenency.
        <EditorPreview language={EditorLanguage.Markdown} original={content} onSave={onSave} key={tab} />
      )}
    </>
  )
}

function LessonProblemEdit(props: { id: string }) {
  const { lesson, isLoading } = useLesson(props.id)
  const updateLesson = useUpdateLesson()

  if (isLoading) {
    return <LoaderCover />
  }

  if (lesson == null) {
    return <ErrorCover>Chapter is null.</ErrorCover>
  }

  async function onSave(value: string, contentKey: ContentKey, language?: EditorLanguage) {
    await updateLesson(props.id, {
      [contentKey]: value
    })
  }

  return (
    <LessonMultipleContentEdit multipleContent={lesson} onSave={onSave} />
  )
}

export default LessonProblemEdit
