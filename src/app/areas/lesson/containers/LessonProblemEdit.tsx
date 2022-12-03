import useLesson from "api/hooks/lessons/useLesson"
import useUpdateLesson from "api/hooks/lessons/useUpdateLesson"
import useUpdateLessonByLanguage from "api/hooks/lessons/useUpdateLessonByLanguage"
import Headings from "app/layouts/Headings/Headings"
import Row from "app/layouts/Row/Row"
import TabLinks from "app/layouts/TabLinks/TabLinks"
import Selector from "app/ui/kit/Selector/Selector"
import { optionsFromEnum } from "app/ui/kit/Selector/Selector.helpers"
import Callout from "app/ui/synthetic/Callout/Callout"
import { EditorLanguage } from "app/ui/synthetic/Editor/Editor.types"
import EditorPreview from "app/ui/synthetic/EditorPreview/EditorPreview"
import TabLink from "app/ui/synthetic/TabRouter/TabLink"
import TabRoute from "app/ui/synthetic/TabRouter/TabRoute"
import TabRouter from "app/ui/synthetic/TabRouter/TabRouter"
import { useState } from "react"
import { WorkspaceEditorLanguage } from "store/reducers/workspace/types"

import { LessonMultipleContent } from "../types"



const SAMPLE_PROBLEM_STATEMENT = `## Interview Question
### Level Order Traversal
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.

<details title="Example #1">
Input: [2, 1, 5, 1, 3, 2], k=3

Output: 9

Explanation: Subarray with maximum sum is [5, 1, 3].
</details>

<details title="Example #2" open>
Input: [2, 1, 5, 1, 3, 2], k=3

Output: 9

Explanation: Subarray with maximum sum is [5, 1, 3].
</details>

<details title="Example #3">
Input: [2, 1, 5, 1, 3, 2], k=3

Output: 9

Explanation: Subarray with maximum sum is [5, 1, 3].
</details>

### Constraints
- sample constraint one
- sample constraint two
- sample constraint three`

type SharedContentKey = "statement" | "hints"

interface LessonSharedContentEditProps {
  content: Record<SharedContentKey, string>
  onSave?(value: string, contentKey: SharedContentKey, language?: EditorLanguage): void
}

function LessonSharedContentEdit(props: LessonSharedContentEditProps) {
  const [tab, setTab] = useState<SharedContentKey>()
  // const [language, setLanguage] = useState<EditorLanguage>()
  const [dirty, setDirty] = useState(false)

  // const multipleContent = props.multipleContents.find(content => content.language === language)
  const content = tab && props.content?.[tab]

  function onSave(value: string) {
    if (tab == null) return

    props.onSave?.(value, tab)
  }

  return (
    <>
      <Headings>
        <h3>Shared Content</h3>
        <p>Choose a tab to start editing.</p>
      </Headings>
      <Row>
        {dirty && (
          <Callout>Save or cancel active edits.</Callout>
        )}
        {!dirty && (
          <Selector<SharedContentKey> onChange={setTab}>
            <option value="statement">Problem Statment</option>
            <option value="hints">Hints</option>
          </Selector>
        )}
        {/* <Selector onChange={setLanguage}>
          {optionsFromEnum(WorkspaceEditorLanguage, false)}
        </Selector> */}
      </Row>
      {tab && (
        // Pass a `key` attribute here to give to component states a depenency.
        <EditorPreview language={EditorLanguage.Markdown} original={content || SAMPLE_PROBLEM_STATEMENT} onSave={onSave} onDirtyChange={setDirty} key={tab} />
      )}
    </>
  )
}




type MultipleContentKey = Exclude<keyof LessonMultipleContent, "language">

interface LessonMultipleContentEditProps {
  contents: LessonMultipleContent[]
  onSave?(value: string, contentKey: MultipleContentKey, language: EditorLanguage): void
}

function LessonMultipleContentEdit(props: LessonMultipleContentEditProps) {
  const [tab, setTab] = useState<MultipleContentKey>()
  const [language, setLanguage] = useState<EditorLanguage>()
  const [dirty, setDirty] = useState(false)

  const multipleContent = props.contents.find(content => content.language === language)
  const content = tab && multipleContent?.[tab]

  function onSave(value: string) {
    if (tab == null) return
    if (language == null) return

    props.onSave?.(value, tab, language)
  }

  return (
    <>
      <Headings>
        <h3>Language specific Content</h3>
        <p>Choose a tab and a language to start editing.</p>
      </Headings>
      <Row>
        {dirty && (
          <Callout>Save or cancel active edits.</Callout>
        )}
        {!dirty && (
          <Selector onChange={setTab}>
            <option value="solution">Solution</option>
            <option value="notes">Notes</option>
            <option value="tests">Tests</option>
            <option value="defaultCode">Default Code</option>
          </Selector>
        )}
        <Selector onChange={setLanguage}>
          {optionsFromEnum(WorkspaceEditorLanguage, false)}
        </Selector>
      </Row>
      {tab && language && (
        // Pass a `key` attribute here to give to component states a depenency.
        <EditorPreview language={tab === "defaultCode" ? language : EditorLanguage.Markdown} original={content} onSave={onSave} onDirtyChange={setDirty} key={tab} />
      )}
    </>
  )
}

function LessonProblemEdit(props: { id: string }) {
  const lesson = useLesson(props.id)
  const updateLesson = useUpdateLesson()
  const updateLessonByLanguage = useUpdateLessonByLanguage()

  async function onSharedSave(value: string, contentKey: SharedContentKey) {
    await updateLesson(props.id, { [contentKey]: value })
  }

  async function onLanguageSpecificSave(value: string, contentKey: MultipleContentKey, language: EditorLanguage) {
    await updateLessonByLanguage(props.id, language, { [contentKey]: value })
  }

  return (
    <TabRouter defaultPath="shared">
      <TabLinks>
        <TabLink to="shared">Shared</TabLink>
        <TabLink to="specific">Language specific</TabLink>
      </TabLinks>
      <TabRoute path="shared">
        <LessonSharedContentEdit content={lesson} onSave={onSharedSave} />
      </TabRoute>
      <TabRoute path="specific">
        <LessonMultipleContentEdit contents={lesson.resources} onSave={onLanguageSpecificSave} />
      </TabRoute>
    </TabRouter>
  )
}

export default LessonProblemEdit
