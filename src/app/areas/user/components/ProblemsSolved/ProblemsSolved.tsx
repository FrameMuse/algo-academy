import "./ProblemsSolved.scss"

import Callout from "app/ui/synthetic/Callout/Callout"
import ProgressBar from "app/ui/synthetic/ProgressBar/ProgressBar"
import Progress from "utils/transform/progress"

interface LessonProblemProgress {
  total: number
  completed: number
}

interface ProblemsSolvedProps {
  lessons: {
    gettingStarted: LessonProblemProgress
    bigONotation: LessonProblemProgress
    dataStructures: LessonProblemProgress
    codingPatterns: LessonProblemProgress
    systemDesign: LessonProblemProgress
    behavioralInterviews: LessonProblemProgress
  }
}

function ProblemsSolved(props: ProblemsSolvedProps) {
  const totalProgress = Progress.sum(...Object.values(props.lessons))
  return (
    <div className="solved-problems">
      <div className="solved-problems__title">
        <h5>Solved Problems</h5>
        <Callout>{totalProgress.total} Solved</Callout>
      </div>

      <ProgressBar value={Progress.percentile(totalProgress)} />

      <div className="solved-problem">
        <div className="solved-problem__name">Getting Started</div>
        <div className="solved-problem__amount">{Progress.humanize(props.lessons.gettingStarted)}</div>
      </div>
      <div className="solved-problem">
        <div className="solved-problem__name">Big O Notation</div>
        <div className="solved-problem__amount">{Progress.humanize(props.lessons.bigONotation)}</div>
      </div>
      <div className="solved-problem">
        <div className="solved-problem__name">Data Structures</div>
        <div className="solved-problem__amount">{Progress.humanize(props.lessons.dataStructures)}</div>
      </div>
      <div className="solved-problem">
        <div className="solved-problem__name">Coding Patterns</div>
        <div className="solved-problem__amount">{Progress.humanize(props.lessons.codingPatterns)}</div>
      </div>
      <div className="solved-problem">
        <div className="solved-problem__name">System Design</div>
        <div className="solved-problem__amount">{Progress.humanize(props.lessons.systemDesign)}</div>
      </div>
      <div className="solved-problem">
        <div className="solved-problem__name">Behavioral Interviews</div>
        <div className="solved-problem__amount">{Progress.humanize(props.lessons.behavioralInterviews)}</div>
      </div>
    </div>
  )
}

export default ProblemsSolved
