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

  return {
    ...chapter,
    lessons: chapter.lessons.map(lesson => ({ ...lesson, status: findLessonStatus(lesson.id) })),
    // learningLessons: chapter.learningLessons.map(lesson => ({ ...lesson, status: findLessonStatus(lesson.id) })),
    // practiceLessons: chapter.practiceLessons.map(lesson => ({ ...lesson, status: findLessonStatus(lesson.id) })),
  }
}

export default useChapter
