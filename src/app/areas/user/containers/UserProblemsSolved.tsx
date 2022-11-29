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

  const problems = chapters.filter(chapter => chapter.showInProfile)
  const problemsProgress = problems.map(chapter => {
    const chapterProgress = chapter.progress || { completed: 0, total: 0 }
    const progress = Progress.subtractTotal(chapterProgress, chapter.learningLessons.length)

    return { ...chapter, progress }
  })

  return (
    <ProblemsSolved problems={problemsProgress} />
  )
}

export default ProblemsSolvedContainer
