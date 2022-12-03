import useChaptersWithProgress from "api/hooks/chapters/useChaptersWithProgress"
import Progress from "utils/transform/progress"

import { CourseProgress } from ".."

interface CourseProgressContainerProps { }

function CourseProgressContainer(props: CourseProgressContainerProps) {
  const chaptersProgress = useChaptersWithProgress()

  const totalProgress = Progress.sum(...chaptersProgress.map(chapter => chapter.progress))

  return (
    <CourseProgress {...totalProgress} />
  )
}

export default CourseProgressContainer
