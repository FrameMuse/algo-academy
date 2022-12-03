import useChapter from "api/hooks/chapters/useChapter"
import useUpdateChapterLessons from "api/hooks/chapters/useUpdateChapterLessons"
import useLessonsUnused from "api/hooks/lessons/useLessonsUnused"
import { LessonType } from "app/areas/lesson/types"
import ButtonGroup from "app/layouts/ButtonGroup/ButtonGroup"
import Column from "app/layouts/Column/Column"
import Headings from "app/layouts/Headings/Headings"
import { confirmAction } from "app/popups/PopupConfirm/PopupConfirm"
import Button from "app/ui/kit/Button/Button"
import List from "app/ui/kit/List/List"
import Selector from "app/ui/kit/Selector/Selector"
import { optionsFromEnum } from "app/ui/kit/Selector/Selector.helpers"
import ErrorCover from "app/ui/synthetic/ErrorCover/ErrorCover"
import LoaderCover from "app/ui/synthetic/Loader/LoaderCover"
import Picker from "app/ui/synthetic/Picker/Picker"
import { useEffect, useState } from "react"

interface ChapterLessonsEditProps {
  id: string
}

function ChapterLessonsEdit(props: ChapterLessonsEditProps) {
  const [lessonType, setLessonType] = useState(LessonType.Learning)

  const chapter = useChapter(props.id)
  const updateChapterLessons = useUpdateChapterLessons()

  async function onSave(lessonIds: string[]) {
    await updateChapterLessons(props.id, lessonType, lessonIds)
  }

  return (
    <>
      <Selector label="Lessons Type" defaultValue={lessonType} onChange={setLessonType}>
        {optionsFromEnum(LessonType)}
      </Selector>
      <Azd defaultLessons={chapter.lessons} lessonType={lessonType} onSave={onSave} />
    </>
  )
}



interface AzdProps {
  lessonType?: LessonType
  defaultLessons?: LessonsPickerProps["defaultLessons"]
  onSave?(lessonIds: string[]): void | Promise<void>
}

function Azd(props: AzdProps) {
  const [lessonIds, setLessonIds] = useState<string[]>()
  const dirty = lessonIds != null

  async function onSave() {
    if (lessonIds == null) return
    if (!await confirmAction()) return

    await props.onSave?.(lessonIds)
    setLessonIds(undefined)
  }

  useEffect(() => {
    setLessonIds(undefined)
  }, [props.lessonType, props.defaultLessons])

  return (
    <Column>
      <Headings>
        <h4>Lessons Picker</h4>
        <p>
          <List icon="chevron-right">
            <li>The Search panel will highlight discovered and filter undiscovered lessons.</li>
            <li>Highlighted lessons at the top are ones that already in the chapter.</li>
            <li>Unchosen ones are lessons which are not used anywhere yet.</li>
          </List>
        </p>
      </Headings>
      <ButtonGroup color={dirty ? "white" : "gray"} size="small" squared>
        <Button await onClick={onSave}>Save</Button>
        <Button>Cancel</Button>
      </ButtonGroup>
      <LessonsPicker defaultLessons={props.defaultLessons} lessonType={props.lessonType} onChange={setLessonIds} />
    </Column>
  )
}



interface LessonsPickerProps {
  lessonType?: LessonType
  defaultLessons?: {
    id: string
    title: string
  }[]
  onChange?(lessonIds: string[]): void
}

function LessonsPicker(props: LessonsPickerProps) {
  const { lessons, isLoading } = useLessonsUnused(props.lessonType)

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
