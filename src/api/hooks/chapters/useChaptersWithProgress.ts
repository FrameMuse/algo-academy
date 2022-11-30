
import { LessonStatus } from "app/areas/lesson/types"
import { ProgressEntry } from "utils/transform/progress"

import useChapters from "./useChapters"
import useChaptersProgress from "./useChaptersProgress"

function useChaptersWithProgress() {
  const { chapters, isLoading: isChaptersLoading } = useChapters()
  const { chaptersProgress, isLoading: isChaptersProgress } = useChaptersProgress()

  const isLoading = isChaptersLoading && isChaptersProgress
  const chaptersWithProgress = chapters?.map(chapterA => {
    const chapterProgress = chaptersProgress?.find(chapterB => chapterA.id === chapterB.id)

    const progress: ProgressEntry | undefined = chapterProgress && {
      completed: chapterProgress.lessons.filter(lesson => lesson.status === LessonStatus.Complete).length,
      total: chapterProgress.lessons.length
    }

    const progressDefault: ProgressEntry = {
      completed: 0,
      total: chapterA.learningLessons.length + chapterA.practiceLessons.length
    }

    function findLessonStatus(id: string): LessonStatus {
      if (chapterProgress) {
        const lesson = chapterProgress.lessons.find(lesson => lesson.id === id)
        return lesson?.status || LessonStatus.Incomplete
      }

      return LessonStatus.Incomplete
    }

    return {
      ...chapterA,
      progress: progress || progressDefault,

      learningLessons: chapterA.learningLessons.map(lesson => ({ ...lesson, status: findLessonStatus(lesson.id) })),
      practiceLessons: chapterA.practiceLessons.map(lesson => ({ ...lesson, status: findLessonStatus(lesson.id) })),
    }
  })

  return { chaptersWithProgress, isLoading }
}

export default useChaptersWithProgress
