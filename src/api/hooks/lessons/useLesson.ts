import { APIActions } from "api/data"
import { APIMappings } from "api/mappings"
import useAppQuery from "api/useAppQuery"
import { LessonStatus } from "app/areas/lesson/types"

import useChaptersProgress from "../chapters/useChaptersProgress"

function useLesson(id: string) {
  const { data } = useAppQuery(APIActions.getLessonsId(id))
  const chaptersProgress = useChaptersProgress()

  const lesson = APIMappings.mapLesson(data.payload)
  const lessonStatus = chaptersProgress?.flatMap(chapterA => chapterA.lessons).find(lesson => lesson.id === id)?.status
  const lessonStatusDefault = LessonStatus.Incomplete

  return { ...lesson, status: lessonStatus ?? lessonStatusDefault }
}

export default useLesson
