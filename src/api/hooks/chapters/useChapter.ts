import { APIActions } from "api/data"
import { APIMappings } from "api/mappings"
import useAppQuery from "api/useAppQuery"
import { LessonStatus } from "app/areas/lesson/types"

import useChaptersProgress from "./useChaptersProgress"

function useChapter(id: string) {
  const { data } = useAppQuery(APIActions.getChaptersId(id))
  const chaptersProgress = useChaptersProgress()

  const chapter = APIMappings.mapChapter(data.payload)
  const chapterProgress = chaptersProgress?.find(chapterA => chapterA.id === chapter?.id)

  function findLessonStatus(id: string): LessonStatus {
    if (chapterProgress) {
      const lesson = chapterProgress.lessons.find(lesson => lesson.id === id)
      return lesson?.status ?? LessonStatus.Incomplete
    }

    return LessonStatus.Incomplete
  }

  const lessons = chapter.lessons.map(lesson => ({ ...lesson, status: findLessonStatus(lesson.id) }))
  const lessonsSorted = lessons.sort((a, b) => a.type - b.type)

  return { ...chapter, lessons: lessonsSorted }
}

export default useChapter
