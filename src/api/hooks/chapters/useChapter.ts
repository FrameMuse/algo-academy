import { APIActions } from "api/data"
import { APIMappings } from "api/mappings"
import useAppQuery from "api/useAppQuery"
import { LessonStatus } from "app/areas/lesson/types"

import useChaptersProgress from "./useChaptersProgress"

function useChapter(id: string) {
  const { data, isLoading: isChapterLoading } = useAppQuery(APIActions.getChaptersId(id))
  const { chaptersProgress, isLoading: isChaptersProgress } = useChaptersProgress()

  const isLoading = isChapterLoading && isChaptersProgress
  const chapter = data?.payload && APIMappings.mapChapter(data.payload)
  const chapterProgress = chaptersProgress?.find(chapterA => chapterA.id === chapter?.id)

  function findLessonStatus(id: string): LessonStatus {
    if (chapterProgress) {
      const lesson = chapterProgress.lessons.find(lesson => lesson.id === id)
      return lesson?.status || LessonStatus.Incomplete
    }

    return LessonStatus.Incomplete
  }
  return {
    chapter: chapter && {
      ...chapter,
      learningLessons: chapter.learningLessons.map(lesson => ({ ...lesson, status: findLessonStatus(lesson.id) })),
      practiceLessons: chapter.practiceLessons.map(lesson => ({ ...lesson, status: findLessonStatus(lesson.id) })),
    }, isLoading
  }
}

export default useChapter
