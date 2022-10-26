import "./ProgressBar.scss"

interface ProgressBarProps {
  /**
   * In percents.
   */
  value: number
}

function ProgressBar(props: ProgressBarProps) {
  return (
    <div className="progress-bar" style={{ "--progress": props.value }}>
      <div className="progress-bar__line" />
    </div>
  )
}

export default ProgressBar
