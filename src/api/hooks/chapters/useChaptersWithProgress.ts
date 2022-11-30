
import { ProgressEntry } from "utils/transform/progress"

import useChapters from "./useChapters"
import useChaptersProgress from "./useChaptersProgress"

function useChaptersWithProgress() {
  const { chapters, isLoading: isChaptersLoading } = useChapters()
  const { chaptersProgress, isLoading: isChaptersProgress } = useChaptersProgress()

  const isLoading = isChaptersLoading && isChaptersProgress
  const chaptersWithProgress = chapters?.map(chapterA => {
    const progress = chaptersProgress?.find(chapterB => chapterA.id === chapterB.id)?.progress
    const progressDefault: ProgressEntry = {
      completed: 0,
      total: chapterA.learningLessons.length + chapterA.practiceLessons.length
    }

    return { ...chapterA, progress: progress || progressDefault }
  })

  return { chaptersWithProgress, isLoading }
}

export default useChaptersWithProgress
