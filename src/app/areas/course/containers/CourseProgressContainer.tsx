import CourseProgress from "../components/CourseProgress/CourseProgress"

interface CourseProgressContainerProps {
  id: string | number
}

function CourseProgressContainer(props: CourseProgressContainerProps) {
  return (
    <CourseProgress completed={6} total={134} />
  )
}

export default CourseProgressContainer
