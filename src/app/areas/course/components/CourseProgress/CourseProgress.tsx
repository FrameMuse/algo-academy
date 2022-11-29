import "./CourseProgress.scss"

import ProgressBar from "app/ui/synthetic/ProgressBar/ProgressBar"

interface CourseProgressProps {
  total: number
  completed: number
}

function CourseProgress(props: CourseProgressProps) {
  const progress = props.completed / props.total * 100
  return (
    <div className="course-progress">
      <div className="course-progress__info">
        <div className="course-progress-level">Level: <strong>{levelProgressMap(progress)}</strong></div>
        <div className="course-progress-completed"><strong>{props.completed}/{props.total}</strong> Lessons Completed</div>
      </div>
      <ProgressBar value={progress} />
    </div>
  )
}

function levelProgressMap(progress: number) {
  if (progress >= 25) {
    return "Middle Engineer"
  }

  return "Junior Engineer"
}

export default CourseProgress
