import useChaptersWithProgress from "api/hooks/chapters/useChaptersWithProgress"
import Progress from "utils/transform/progress"

import ProblemsSolved from "../components/ProblemsSolved/ProblemsSolved"

interface ProblemsSolvedContainerProps { }

function ProblemsSolvedContainer(props: ProblemsSolvedContainerProps) {
  const chapters = useChaptersWithProgress()

  const chaptersShownInProfile = chapters.filter(chapter => chapter.showInProfile)
  const problems = chaptersShownInProfile.map(chapter => {
    const progress = Progress.subtract(chapter.progress, chapter.learningLessons.length)

    return { title: chapter.title, progress }
  })

  return (
    <ProblemsSolved problems={problems} />
  )
}

export default ProblemsSolvedContainer
