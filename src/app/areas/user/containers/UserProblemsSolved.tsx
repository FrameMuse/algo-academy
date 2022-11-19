import ProblemsSolved from "../components/ProblemsSolved/ProblemsSolved"

interface ProblemsSolvedContainerProps { }

function ProblemsSolvedContainer(props: ProblemsSolvedContainerProps) {
  const __MOCK_PROGRESS__ = {
    total: 128,
    completed: 12
  }
  return (
    <ProblemsSolved
      lessons={{
        gettingStarted: __MOCK_PROGRESS__,
        bigONotation: __MOCK_PROGRESS__,
        dataStructures: __MOCK_PROGRESS__,
        codingPatterns: __MOCK_PROGRESS__,
        systemDesign: __MOCK_PROGRESS__,
        behavioralInterviews: __MOCK_PROGRESS__
      }}
    />
  )
}

export default ProblemsSolvedContainer
