import { useEffect, useState } from "react"
import Time from "utils/transform/time"

interface UseCountdownOptions {
  defaultEnabled?: boolean
  /**
   * Amount of time delimiters (seconds, minutes, ...).
   */
  delimiters?: number
  endLabel?: string
  splitter?: string
}

type UseCountdownStart = () => void
type UseCountdownPause = () => void
type UseCountdownReset = () => void

function useCountdown(startTime: number, options?: Partial<UseCountdownOptions>): [string, UseCountdownStart, UseCountdownPause, UseCountdownReset] {
  const [enabled, setEnabled] = useState(options?.defaultEnabled || false)
  const [time, setTime] = useState<number>(startTime)

  const delimiters = Time.delimit(time, options?.delimiters)

  useEffect(() => {
    if (!enabled) return

    const interval = setInterval(() => setTime(time => time - 1000), 1000)
    return () => {
      clearInterval(interval)
    }
  }, [startTime, enabled])

  useEffect(() => {
    setTime(startTime)
  }, [startTime])


  function getValue(): string {
    if (delimiters == null) {
      return options?.endLabel || "Run out of time"
    }

    return delimiters.map(a => Time.fixZeros(a)).join(options?.splitter || ":")
  }

  return [
    getValue(),
    () => setEnabled(true),
    () => setEnabled(false),
    () => setTime(startTime),
  ]
}

export default useCountdown
