import "./Timer.scss"

import ButtonGroup from "app/layouts/ButtonGroup/ButtonGroup"
import Button from "app/ui/kit/Button/Button"
import Icon from "app/ui/kit/Icon/Icon"
import Selector from "app/ui/kit/Selector/Selector"
import { useRef, useState } from "react"
import { useClickAway } from "react-use"
import { classWithModifiers, toggleState } from "utils/common"
import useCountdown from "utils/hooks/useCountdown"

const minutesList = [...Array(60)].map((_, index) => index + 1)


interface TimerProps { }

function Timer(props: TimerProps) {
  const [expanded, setExpanded] = useState(false)
  const [minutesChoice, setMinutesChoice] = useState<number>(10)
  const [countdown, start, pause, reset] = useCountdown(1000 * 60 * minutesChoice, { minimumDelimiters: 2 })

  const toolbarElementRef = useRef<HTMLDivElement>(null)
  useClickAway(toolbarElementRef, () => setExpanded(false))

  return (
    <div className="timer" ref={toolbarElementRef}>
      <button className="timer-toggle" type="button" onClick={toggleState(setExpanded)}>
        <Icon className="timer-toggle__icon" name="timer" />
        <span className="timer-toggle__text">{countdown}</span>
      </button>
      <div className={classWithModifiers("timer-toolbar", expanded && "expanded")}>
        <ButtonGroup color="gray" size="smaller" squared>
          <Button onClick={start}>Start</Button>
          <Button onClick={pause}>Pause</Button>
          <Button onClick={reset}>Reset</Button>
        </ButtonGroup>
        <Selector defaultValue={minutesChoice} onChange={setMinutesChoice}>
          {minutesList.map(minute => (
            <option value={minute} key={minute}>{minute} {minute > 1 ? "minutes" : "minute"}</option>
          ))}
        </Selector>
      </div>
      <div className={ClassName.modify("timer-toolbar", expanded && "expanded")}>
        <ButtonGroup color="gray" size="smaller" squared>
          <Button onClick={start}>Start</Button>
          <Button onClick={pause}>Pause</Button>
          <Button onClick={reset}>Reset</Button>
        </ButtonGroup>
        <Selector defaultValue={minutesChoice} onChange={setMinutesChoice}>
          {minutesList.map(minute => (
            <option value={minute} key={minute}>{minute} {minute > 1 ? "minutes" : "minute"}</option>
          ))}
        </Selector>
      </div>
      <div className={ClassName.merge("timer-toolbar", "timeout")}>
        <ButtonGroup color="gray" size="smaller" squared>
          <Button onClick={start}>Start</Button>
          <Button onClick={pause}>Pause</Button>
          <Button onClick={reset}>Reset</Button>
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



class ClassName {
  static modify(originClass: string, ...modifiers: Array<string | number | false | null | undefined>): string {
    modifiers = modifiers.filter(Boolean)
    if (!modifiers.length) return originClass

    const space = " "
    const separator = "--"

    modifiers = modifiers.map(modifier => originClass + separator + modifier)
    return originClass + space + modifiers.join(space)
  }

  static merge(...classNames: Array<string | null | undefined>) {
    const space = " "
    return classNames.filter(Boolean).join(space)
  }
}
