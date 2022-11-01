import "./ProblemsSolved.scss"

import ProgressBar from "app/ui/synthetic/ProgressBar/ProgressBar"
import { ReactNode } from "react"

interface ProblemsSolvedProps {
  children: ReactNode
}

function ProblemsSolved(props: ProblemsSolvedProps) {
  return (
    <div className="solved-problems">
      <div className="solved-problems-title">
        <div className="h5">Solved Problems</div>
        <div className="solved-amount">50 Solved</div>
      </div>

      <ProgressBar value={10} />

      <div className="solved-item">
        <div className="solved-item-name">Getting Started</div>
        <div className="solved-item-amount">1/4</div>
      </div>
      <div className="solved-item">
        <div className="solved-item-name">Big O Notation</div>
        <div className="solved-item-amount">3/6</div>
      </div>
      <div className="solved-item">
        <div className="solved-item-name">Data Structures</div>
        <div className="solved-item-amount">6/10</div>
      </div>
      <div className="solved-item">
        <div className="solved-item-name">Coding Patterns</div>
        <div className="solved-item-amount">18/35</div>
      </div>
      <div className="solved-item">
        <div className="solved-item-name">System Design</div>
        <div className="solved-item-amount">4/12</div>
      </div>
      <div className="solved-item">
        <div className="solved-item-name">Behavioral Interviews</div>
        <div className="solved-item-amount">2/6</div>
      </div>
    </div>
  )
}

export default ProblemsSolved
