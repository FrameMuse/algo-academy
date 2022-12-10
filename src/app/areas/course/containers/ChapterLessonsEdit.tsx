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
import Picker from "app/ui/synthetic/Picker/Picker"
import { useEffect, useState } from "react"

interface ChapterLessonsEditProps {
  id: string
}

function ChapterLessonsEdit(props: ChapterLessonsEditProps) {
  const chapter = useChapter(props.id)
  const updateChapterLessons = useUpdateChapterLessons()


  const [lessonIds, setLessonIds] = useState<string[] | null>(null)
  const [lessonType, setLessonType] = useState(LessonType.Learning)

  const lessonsUnused = useLessonsUnused(lessonType)
  const lessonsCurrent = chapter.lessons.filter(lesson => lesson.type === lessonType)

  const dirty = lessonIds != null


  async function onSave() {
    if (lessonIds == null) return
    if (!await confirmAction()) return

    await updateChapterLessons(props.id, lessonType, lessonIds)
  }

  function onChange(ids: string[]) {
    setLessonIds(ids)
  }

  useEffect(() => setLessonIds(null), [lessonType])

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
      <Selector label="Lessons Type" defaultValue={lessonType} onChange={setLessonType}>
        {optionsFromEnum(LessonType)}
      </Selector>
      <ButtonGroup color={dirty ? "white" : "gray"} size="small" squared>
        <Button await onClick={onSave}>Save</Button>
        <Button>Cancel</Button>
      </ButtonGroup>
      <Picker defaultPicks={chapter.lessons.map(lesson => lesson.id)} onChange={onChange}>
        {[...lessonsCurrent, ...lessonsUnused].map(lesson => (
          <option value={lesson.id} key={lesson.id}>{lesson.title}</option>
        ))}
      </Picker>
    </Column>
  )
}

export default ChapterLessonsEdit
