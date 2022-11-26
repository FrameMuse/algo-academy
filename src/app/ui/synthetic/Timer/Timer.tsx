import "./Timer.scss"

import ButtonGroup from "app/layouts/ButtonGroup/ButtonGroup"
import Button from "app/ui/kit/Button/Button"
import Icon from "app/ui/kit/Icon/Icon"
import Selector from "app/ui/kit/Selector/Selector"
import { useRef, useState } from "react"
import { useClickAway } from "react-use"
import { classWithModifiers } from "utils/common"
import useCountdown from "utils/hooks/useCountdown"

interface TimerProps { }

const minutesList = [...Array(59)].map((_, index) => index + 1)

function Timer(props: TimerProps) {
  const [expanded, setExpanded] = useState(false)
  const [minutesChoice, setMinutesChoice] = useState<number>(10)
  const [countdown, start, pause, reset] = useCountdown(1000 * 60 * minutesChoice, { delimiters: 2 })

  const toolbarElementRef = useRef<HTMLDivElement>(null)
  useClickAway(toolbarElementRef, () => setExpanded(false))

  return (
    <div className="timer">
      <button className="timer-toggle" type="button" onClick={() => setExpanded(!expanded)}>
        <Icon className="timer-toggle__icon" name="timer" />
        <span className="timer-toggle__text">{countdown}</span>
      </button>
      <div className={classWithModifiers("timer-toolbar", expanded && "expanded")} ref={toolbarElementRef}>
        <ButtonGroup color="gray" size="smaller" squared>
          <Button onClick={reset}>Reset</Button>
          <Button onClick={start}>Start</Button>
          <Button onClick={pause}>Pause</Button>
        </ButtonGroup>
        <Selector defaultValue={minutesChoice} onChange={setMinutesChoice}>
          {minutesList.map(minute => (
            <option value={minute} key={minute}>{minute} {minute > 1 ? "minutes" : "minute"}</option>
          ))}
        </Selector>
      </div>
    </div>
  )
}

export default Timer
