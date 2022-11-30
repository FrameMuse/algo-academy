import useChapter from "api/hooks/chapters/useChapter"
import useUpdateChapter from "api/hooks/chapters/useUpdateChapter"
import useLessonsUnused from "api/hooks/lessons/useLessonsUnused"
import { LessonPreview, LessonPreviews } from "app/areas/lesson"
import { LessonType } from "app/areas/lesson/types"
import PopupConfirm from "app/popups/PopupConfirm/PopupConfirm"
import Button from "app/ui/kit/Button/Button"
import Selector from "app/ui/kit/Selector/Selector"
import { optionsFromEnum } from "app/ui/kit/Selector/Selector.helpers"
import ErrorCover from "app/ui/synthetic/ErrorCover/ErrorCover"
import LoaderCover from "app/ui/synthetic/Loader/LoaderCover"
import Picker from "app/ui/synthetic/Picker/Picker"
import { useState } from "react"
import { Modal } from "react-modal-global"

interface ChapterLessonsEditProps {
  id: string
}

function ChapterLessonsEdit(props: ChapterLessonsEditProps) {
  const [lessonType, setLessonType] = useState(LessonType.Learning)

  const { chapter, isLoading } = useChapter(props.id)

  if (isLoading) {
    return <LoaderCover />
  }

  if (chapter == null) {
    return <ErrorCover>Chapter is null.</ErrorCover>
  }

  async function onSubmit() {
    Modal.open(PopupConfirm, { weak: true })
  }

  return (
    <>
      <Selector<LessonType> label="Lessons Type" defaultValue={lessonType} onChange={setLessonType}>
        {optionsFromEnum(LessonType)}
      </Selector>
      <LessonPreviews title={LessonType[lessonType]}>
        {chapter.learningLessons.map(lesson => (
          <LessonPreview {...lesson} key={lesson.id}>{lesson.title}</LessonPreview>
        ))}

        <Button color="gray" iconLeft="plus">Add Lesson</Button>
        <Azd id={props.id} />
      </LessonPreviews>

    </>
  )
}

function Azd(props: { id: string }) {
  const updateChapter = useUpdateChapter()

  function onChange(lessonIds: string[]) {
    // updateChapter(props.id, { lessonIds })
  }

  return (
    <LessonsPicker onChange={onChange} />
  )
}

interface LessonsPickerProps {
  defaultLessons?: {
    id: string
    title: string
  }[]
  onChange?(lessonIds: string[]): void
}

function LessonsPicker(props: LessonsPickerProps) {
  const { lessons, isLoading } = useLessonsUnused()

  if (isLoading) {
    return <LoaderCover />
  }

  if (lessons == null) {
    return <ErrorCover>Lessons is null.</ErrorCover>
  }

  return (
    <Picker defaultPicks={props.defaultLessons?.map(lesson => lesson.id)} onChange={props.onChange}>
      {[...props.defaultLessons || [], ...lessons].map(lesson => (
        <option value={lesson.id} key={lesson.id}>{lesson.title}</option>
      ))}
    </Picker>
  )
}

export default ChapterLessonsEdit
