import useLesson from "api/hooks/lessons/useLesson"
import useUpdateLesson from "api/hooks/lessons/useUpdateLesson"
import Buttons from "app/layouts/Buttons/Buttons"
import Headings from "app/layouts/Headings/Headings"
import PopupLayout from "app/layouts/PopupLayout/PopupLayout"
import PopupConfirm from "app/popups/PopupConfirm/PopupConfirm"
import Button from "app/ui/kit/Button/Button"
import Selector from "app/ui/kit/Selector/Selector"
import { EditorLanguage } from "app/ui/synthetic/Editor/Editor.types"
import EditorPreview from "app/ui/synthetic/EditorPreview/EditorPreview"
import ErrorCover from "app/ui/synthetic/ErrorCover/ErrorCover"
import LoaderCover from "app/ui/synthetic/Loader/LoaderCover"
import { useState } from "react"
import { Modal, useModalContext } from "react-modal-global"




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

const SAMPLE_ARTICLE = `## Understanding the Problem

<video poster="/static/images/video1.jpg"></video>

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

### Section 1
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

- item 1
- item 2
- item 3

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet

![People sitting face to face](/static/images/video1.jpg)

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

1. item 1
1. item 2
1. item 3

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet`

const zad: Record<string, string | undefined> = {
  "1": SAMPLE_PROBLEM_STATEMENT,
  "2": SAMPLE_ARTICLE,
}

function PopupDirtyEditNotice() {
  const modal = useModalContext()

  return (
    <PopupLayout>
      <Headings>
        <h4>Error</h4>
        <p>To swtich tab, you have to cancel current edits.</p>
      </Headings>
      <Buttons>
        <Button color="blue" onClick={modal.close}>Ok</Button>
      </Buttons>
    </PopupLayout>
  )
}

interface LessonProblemEditProps {
  id: string

  statement: string
  hints: string
  // solution: string
}

function LessonProblemEditd(props: LessonProblemEditProps) {
  const updateLesson = useUpdateLesson()

  const [tab, setTab] = useState("1")
  const [content, setContent] = useState(props.statement)

  const zad = tab === "1" ? props.statement : props.hints
  const isContentDirty = content !== zad

  async function onSave() {
    let confirmed = false
    const onConfirm = () => confirmed = true
    await Modal.open(PopupConfirm, { weak: true, onConfirm })

    if (!confirmed) return

    if (tab === "1") {
      await updateLesson(props.id, { statement: content })
    } else {
      await updateLesson(props.id, { hints: content })
    }
  }

  function onCancel() {
    Modal.open(PopupConfirm, {
      weak: true,
      onConfirm() {
        setContent(tab === "1" ? props.statement : props.hints)
      },
    })
  }

  function onTabSelect(tab: string) {
    if (isContentDirty) {
      Modal.open(PopupDirtyEditNotice)

      return
    }

    setTab(tab)
    setContent(tab === "1" ? props.statement : props.hints)
  }

  return (
    <>
      <Selector defaultValue={tab} onChange={onTabSelect}>
        <option value="1">Problem Statment</option>
        <option value="2">Hints</option>
        <option value="3">Solution</option>
      </Selector>
      {isContentDirty && (
        <Buttons>
          <Button color="gray" onClick={onSave}>Save</Button>
          <Button color="dark" onClick={onCancel}>Cancel</Button>
        </Buttons>
      )}
      <EditorPreview language={EditorLanguage.Markdown} value={content ?? ""} onChange={setContent} />
    </>
  )
}

function LessonProblemEdit(props: { id: string }) {
  const { lesson, isLoading } = useLesson(props.id)

  if (isLoading) {
    return <LoaderCover />
  }

  if (lesson == null) {
    return <ErrorCover>Chapter is null.</ErrorCover>
  }

  return (
    <LessonProblemEditd id={props.id} statement={lesson.statement} hints={lesson.hints} />
  )
}

export default LessonProblemEdit
