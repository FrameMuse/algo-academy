import useLesson from "api/hooks/lessons/useLesson"
import useUpdateLesson from "api/hooks/lessons/useUpdateLesson"
import useUpdateLessonByLanguage from "api/hooks/lessons/useUpdateLessonByLanguage"
import Headings from "app/layouts/Headings/Headings"
import Row from "app/layouts/Row/Row"
import TabLinks from "app/layouts/TabLinks/TabLinks"
import Code from "app/ui/kit/Code/Code"
import CodeTheme from "app/ui/kit/Code/CodeTheme"
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
  const [dirty, setDirty] = useState(false)

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
        <EditorPreview language={EditorLanguage.Markdown} defaultValue={content || SAMPLE_PROBLEM_STATEMENT} onSave={onSave} onDirtyChange={setDirty} key={tab} />
      )}
    </>
  )
}



const TEST_RESULT_INTERFACE = `
interface TestResult {
  /**
   * If the test is passed.
   */
  passed: boolean
  /**
   * The description of the test.
   */
  description: string
  /**
   * The expected VALUE.
   * it can be any value, but it should in its original type.
   */
  expected: unknown
  /**
   * This is what user's code evaluates.
   * it can be any value, but it should in its original type.
   */
  userAnswer: unknown
}

interface IOutput {
  results: TestResult[]
}
`

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

  /**
   * Tabs that needs only markdown as editor language.
   */
  const isMarkdownTabs = ["solution"].includes(tab || "")
  const validationSample = tab === "testsValidation" ? (language && VALIDATION_SAMPLES[language]) : undefined

  return (
    <>
      <Headings>
        <h3>Language specific Content</h3>
        <p>Choose a tab and a language to start editing.</p>
      </Headings>
      <Row>
        <Selector defaultValue={tab} onChange={setTab}>
          <option value="solution">Solution</option>
          <option value="tests">Tests</option>
          <option value="testsValidation">Tests Validation</option>
          <option value="startingCode">Default Code</option>
        </Selector>
        <Selector onChange={setLanguage}>
          {optionsFromEnum(WorkspaceEditorLanguage, false)}
        </Selector>
      </Row>
      {tab === "testsValidation" && (
        <Headings>
          <h3>NOTICE!</h3>
          <p>
            The output of the validation <strong>HAS TO</strong> follow these interfaces, otherwise it WILL break logic.
          </p>
          <Code theme={CodeTheme.lightfair} lang="typescript">{TEST_RESULT_INTERFACE}</Code>
        </Headings>
      )}
      {tab && language && (
        <EditorPreview
          language={isMarkdownTabs ? EditorLanguage.Markdown : language}
          disablePreview={!isMarkdownTabs}

          defaultValue={content || validationSample}
          onSave={onSave}
          onDirtyChange={setDirty}
          // Pass a `key` attribute to make this component default values update on `tab` and `language` change.
          key={`${tab}-${language}`}
        />
      )}
    </>
  )
}

function LessonProblemEdit(props: { id: string }) {
  const lesson = useLesson(props.id, true)
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
        <LessonMultipleContentEdit contents={lesson.contents} onSave={onLanguageSpecificSave} />
      </TabRoute>
    </TabRouter>
  )
}

export default LessonProblemEdit



const VALIDATION_TYPESCRIPT_SAMPLE = `// Don't log any other information such as \`<---+++ CODE RESULT +++--->\`, only \`IOutput\` in stringified JSON format.
// Tip: write some autotests too, so users can't just brute-force the solution.

interface TestResult {
  /**
   * If the test is passed.
   */
  passed: boolean
  /**
   * The description of the test.
   */
  description: string
  /**
   * The expected VALUE.
   * it can be any value, but it should in its original type.
   */
  expected: unknown
  /**
   * This is what user's code evaluates.
   * it can be any value, but it should in its original type.
   */
  userAnswer: unknown
}

interface IOutput {
  results: TestResult[]
}

/**
 * This is the end of the program.
 */
function Output(output: IOutput) {
  console.log(JSON.stringify(output))
}

function validate({ input, expected, description }): TestResult {
  // @ts-ignore As user's code will be merged with this file, the \`isPalindrome\` function should be here.
  const userAnswer = isPalindrome(input);
  const passed = expected === userAnswer;

  return { passed, description, expected, userAnswer };
}

// @ts-ignore Tests should be declared in \`tests\` tab.
const results = tests.map(validate);
const output = { results };

Output(output);
`
const VALIDATION_OTHER_SAMPLE = `// Follow the TypeScipt example of output of the program should be.`

const VALIDATION_SAMPLES: Record<string, string> = {
  [EditorLanguage.TypeScript]: VALIDATION_TYPESCRIPT_SAMPLE,
  [EditorLanguage.JavaScript]: VALIDATION_OTHER_SAMPLE,
  [EditorLanguage["C++"]]: VALIDATION_OTHER_SAMPLE,
  [EditorLanguage.Java]: VALIDATION_OTHER_SAMPLE,
  [EditorLanguage.Python]: VALIDATION_OTHER_SAMPLE,
}
