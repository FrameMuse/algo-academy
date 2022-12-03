import { LessonStatus, LessonType } from "app/areas/lesson/types"
import { ProgressEntry } from "utils/transform/progress"

import useChapters from "./useChapters"
import useChaptersProgress from "./useChaptersProgress"

function useChaptersWithProgress() {
  const chapters = useChapters()
  const chaptersProgress = useChaptersProgress()

  const chaptersWithProgress = chapters.map(chapterA => {
    const chapterProgress = chaptersProgress.find(chapterB => chapterA.id === chapterB.id)

    const completed = chapterProgress?.lessons.filter(lesson => lesson.status === LessonStatus.Complete).length
    const progress: ProgressEntry = {
      completed: completed || 0,
      total: chapterA.lessons.length
    }

    function findLessonStatus(id: string): LessonStatus {
      if (chapterProgress) {
        const lesson = chapterProgress.lessons.find(lesson => lesson.id === id)
        return lesson?.status || LessonStatus.Incomplete
      }

      return LessonStatus.Incomplete
    }

    const lessons = chapterA.lessons.map(lesson => ({
      ...lesson,
      status: findLessonStatus(lesson.id)
    }))

    return {
      ...chapterA,
      progress,
      learningLessons: lessons.filter(lesson => lesson.type === LessonType.Learning),
      practiceLessons: lessons.filter(lesson => lesson.type === LessonType.Practice),
    }
  })

  return chaptersWithProgress
}

export default useChaptersWithProgress
