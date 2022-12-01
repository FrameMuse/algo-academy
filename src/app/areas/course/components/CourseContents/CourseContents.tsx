import "./CourseContents.scss"

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
        <h4>Course Chapters</h4>
      </div>

      <div className="course-contents__list">
        {props.children}
      </div>
    </div>
  )
}

export default CourseContents
