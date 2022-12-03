import useChaptersProgress from "./useChaptersProgress"

function useChapterProgress(id: string) {
  const chaptersProgress = useChaptersProgress()

  const chapterProgress = chaptersProgress.find(chapter => chapter.id === id)

  return chapterProgress
}

export default useChapterProgress
