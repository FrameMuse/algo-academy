import useChaptersProgress from "./useChaptersProgress"

function useChapterProgress(id: string) {
  const { chaptersProgress, isLoading } = useChaptersProgress()

  const chapterProgress = chaptersProgress?.find(chapter => chapter.id === id)

  return { chapterProgress, isLoading }
}

export default useChapterProgress
