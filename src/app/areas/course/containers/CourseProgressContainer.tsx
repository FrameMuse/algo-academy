import useChaptersWithProgress from "api/hooks/chapters/useChaptersWithProgress"
import ErrorCover from "app/ui/synthetic/ErrorCover/ErrorCover"
import LoaderCover from "app/ui/synthetic/Loader/LoaderCover"
import Progress from "utils/transform/progress"

import CourseProgress from "../components/CourseProgress/CourseProgress"

interface CourseProgressContainerProps { }

function CourseProgressContainer(props: CourseProgressContainerProps) {
  const { chaptersWithProgress: chaptersProgress, isLoading } = useChaptersWithProgress()
  console.log(chaptersProgress)
  if (isLoading) {
    return <LoaderCover />
  }

  if (chaptersProgress == null) {
    return <ErrorCover>ChaptersProgress is null.</ErrorCover>
  }

  const totalProgress = Progress.sum(...chaptersProgress.map(chapter => chapter.progress))

  return (
    <CourseProgress {...totalProgress} />
  )
}

export default CourseProgressContainer
