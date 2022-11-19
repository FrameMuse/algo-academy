import "./CourseContents.scss"

import Selector from "app/ui/kit/Selector/Selector"
import { optionsFromEnum } from "app/ui/kit/Selector/Selector.helpers"
import { Dispatch, ReactNode } from "react"

import { CourseContentsFilter } from "../../types"

interface CourseContentsProps {
  onFilterChange?: Dispatch<CourseContentsFilter>
  children: ReactNode
}

/**
 * Is to hold `CourseElement` components.
 */
function CourseContents(props: CourseContentsProps) {
  return (
    <div className="course-contents">
      <div className="course-contents__title">
        <h4>Course Contents</h4>
        <Selector defaultValue={CourseContentsFilter.ShowAll}>
          {optionsFromEnum(CourseContentsFilter)}
        </Selector>
      </div>

      <div className="course-contents__list">
        {props.children}
      </div>
    </div>
  )
}

export default CourseContents
