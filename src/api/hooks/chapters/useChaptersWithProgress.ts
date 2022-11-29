
import useChapters from "./useChapters"
import useChaptersProgress from "./useChaptersProgress"

function useChaptersWithProgress() {
  const { chapters, isLoading: isChaptersLoading } = useChapters()
  const { chaptersProgress, isLoading: isChaptersProgress } = useChaptersProgress()

  const isLoading = isChaptersLoading && isChaptersProgress
  const chaptersWithProgress = chapters?.map(chapterA => ({
    ...chapterA,
    progress: chaptersProgress?.find(chapterB => chapterA.id === chapterB.id)?.progress
  }))

  return { chaptersWithProgress, isLoading }
}

export default useChaptersWithProgress
