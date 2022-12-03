import "./CourseContents.scss"

import { ReactNode } from "react"


interface CourseContentsProps {
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
