import { APIActions } from "api/data"
import { APIMappings } from "api/mappings"
import useAppQuery from "api/useAppQuery"
import { LessonStatus } from "app/areas/lesson/types"

import useChaptersProgress from "../chapters/useChaptersProgress"

function useLesson(id: string) {
  const { data, isLoading: isLessonLoading } = useAppQuery(APIActions.getLessonsId(id))
  const { chaptersProgress, isLoading: isChaptersProgress } = useChaptersProgress()

  const isLoading = isLessonLoading && isChaptersProgress
  const lesson = data?.payload && APIMappings.mapLesson(data.payload)
  const lessonStatus = chaptersProgress?.flatMap(chapterA => chapterA.lessons).find(lesson => lesson.id === id)?.status
  const lessonStatusDefault = LessonStatus.Incomplete

  if (lesson == null) {
    return { isLoading }
  }

  return {
    lesson: { ...lesson, status: lessonStatus ?? lessonStatusDefault }, isLoading
  }
}

export default useLesson
