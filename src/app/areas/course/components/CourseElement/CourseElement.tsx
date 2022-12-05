import "./CourseElement.scss"

import Icon from "app/ui/kit/Icon/Icon"
import { ReactNode, useLayoutEffect, useRef, useState } from "react"
import { classWithModifiers, toggleState } from "utils/common"
import Progress, { ProgressEntry } from "utils/transform/progress"

interface CourseElementProps {
  title: string
  progress?: ProgressEntry
  defaultExapanded?: boolean
  children: ReactNode
}

/**
 * An element of course contents. Holds groups of lessons.
 * 
 * @param title - A course content name.
 * @param progress - A progress.
 * @param children - A list of [`LessonPreviews`](../../../lesson/components/LessonPreviews/LessonPreviews.tsx)
 */
function CourseElement(props: CourseElementProps) {
  const innerRef = useRef<HTMLDivElement>(null)
  const [expanded, setExpanded] = useState<boolean>(props.defaultExapanded || false)
  const [height, setHeight] = useState<number | undefined>()

  useLayoutEffect(() => {
    if (!innerRef.current) return

    setHeight(innerRef.current.scrollHeight)
  }, [expanded])

  return (
    <div className="course-element">
      <button className="course-element__info" type="button" onClick={toggleState(setExpanded)} aria-details="Toggle content display">
        <div className="course-element__title">{props.title}</div>
        {props.progress && (
          <div className="course-element__right">
            <div className="course-element__progress">{Progress.humanize(props.progress)} <span className="weak">Lessons completed</span></div>
            <Icon className={classWithModifiers("course-element__icon", expanded && "up")} name="chevron-down" />
          </div>
        )}
      </button>
      <div className={classWithModifiers("course-element__content", expanded && "expanded")} aria-hidden={!expanded} style={{ "--height": height }}>
        <div className="course-element__inner" ref={innerRef}>{props.children}</div>
      </div>
    </div>
  )
}

export default CourseElement
