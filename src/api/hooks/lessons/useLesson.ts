import { APIActions } from "api/data"
import { APIMappings } from "api/mappings"
import useAppQuery from "api/useAppQuery"
import { LessonStatus } from "app/areas/lesson/types"

import useChapterProgress from "../chapters/useChapterProgress"

const LESSON_STATUS_DEFAULT = LessonStatus.Incomplete

function useLesson(id: string, includeAdminOnlyFields?: boolean) {
  const action = includeAdminOnlyFields ? APIActions.getLessonsAdminId(id) : APIActions.getLessonsId(id)

  const { data } = useAppQuery(action)

  const lesson = APIMappings.mapLesson(data.payload)
  if (lesson.chapterRelation == null) {
    return { ...lesson, status: LESSON_STATUS_DEFAULT }
  }

  const lessonChapter = useChapterProgress(lesson.chapterRelation.id)
  if (lessonChapter == null) {
    return { ...lesson, status: LESSON_STATUS_DEFAULT }
  }

  const lessonStatus = lessonChapter.lessons.find(lesson => lesson.id === id)?.status
  if (lessonStatus == null) {
    return { ...lesson, status: LESSON_STATUS_DEFAULT }
  }

  return { ...lesson, status: lessonStatus }
}

export default useLesson
