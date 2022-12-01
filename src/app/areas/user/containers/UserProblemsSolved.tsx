import useChaptersWithProgress from "api/hooks/chapters/useChaptersWithProgress"
import ErrorCover from "app/ui/synthetic/ErrorCover/ErrorCover"
import LoaderCover from "app/ui/synthetic/Loader/LoaderCover"
import Progress from "utils/transform/progress"

import ProblemsSolved from "../components/ProblemsSolved/ProblemsSolved"

interface ProblemsSolvedContainerProps { }

function ProblemsSolvedContainer(props: ProblemsSolvedContainerProps) {
  const { chaptersWithProgress: chapters, isLoading } = useChaptersWithProgress()

  if (isLoading) {
    return <LoaderCover />
  }

  if (chapters == null) {
    return <ErrorCover>chapters is null.</ErrorCover>
  }

  const chaptersShownInProfile = chapters.filter(chapter => chapter.showInProfile)
  const problems = chaptersShownInProfile.map(chapter => {
    const chapterProgress = chapter.progress || { completed: 0, total: 0 }
    const progress = Progress.subtract(chapterProgress, chapter.learningLessons.length)

    return { title: chapter.title, progress }
  })

  return (
    <ProblemsSolved problems={problems} />
  )
}

export default ProblemsSolvedContainer
