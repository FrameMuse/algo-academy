import "./ProblemsSolved.scss"

import Callout from "app/ui/synthetic/Callout/Callout"
import ProgressBar from "app/ui/synthetic/ProgressBar/ProgressBar"
import Progress, { ProgressEntry } from "utils/transform/progress"


interface ProblemsSolvedProps {
  problems: {
    title: string
    progress: ProgressEntry
  }[]
}

function ProblemsSolved(props: ProblemsSolvedProps) {
  const totalProgress = Progress.sum(...props.problems.map(problem => problem.progress))
  return (
    <div className="solved-problems">
      <div className="solved-problems__title">
        <h5>Solved Problems</h5>
        <Callout>{totalProgress.completed} Solved</Callout>
      </div>

      <ProgressBar value={Progress.percentile(totalProgress)} />

      {props.problems.map((problem, index) => (
        <div className="solved-problem" key={index}>
          <div className="solved-problem__name">{problem.title}</div>
          <div className="solved-problem__amount">{Progress.humanize(problem.progress)}</div>
        </div>
      ))}
    </div>
  )
}

export default ProblemsSolved
