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
        <div className="course-progress-level">Level: <strong>{levelProgressSwitch(progress)}</strong></div>
        <div className="course-progress-completed"><strong>{props.completed}/{props.total}</strong> Lessons Completed</div>
      </div>
      <ProgressBar value={progress} />
    </div>
  )
}

function levelProgressSwitch(progress: number) {
  if (progress >= 100) return "Algo Master"
  if (progress >= 90) return "Elite"
  if (progress >= 80) return "Expert"
  if (progress >= 70) return "Professional"
  if (progress >= 60) return "Veteran"
  if (progress >= 50) return "Intermediate"
  if (progress >= 40) return "Adept"
  if (progress >= 30) return "Advanced Beginner"
  if (progress >= 20) return "Apprentice"
  if (progress >= 10) return "Novice"

  return "Beginner"
}

export default CourseProgress
