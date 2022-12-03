import "./FullCourseView.scss"

import { APP_TITLE } from "app/App"
import { CourseContentsContainer, CourseFreeNotice, CourseProgressContainer } from "app/areas/course"
import QueryBoundary from "app/containers/QueryBoundary"
import { Helmet } from "react-helmet"

function FullCourseView() {
  return (
    <section className="wrapper course-section">
      <Helmet>
        <title>{APP_TITLE + " | " + "Full Course"}</title>
      </Helmet>
      <div className="course-section__header">
        <h1>Algo Academy Course</h1>
        <p>Our curriculum spans topics such as, algorithms, system design, coding patterns, space time complexity, behavioral interviews and much more. Start practicing today and learn everything you need to ace your next coding interview.</p>
      </div>
      <div className="course-section__container">
        <QueryBoundary userType>
          <CourseFreeNotice />
          <CourseProgressContainer />
          <CourseContentsContainer />
        </QueryBoundary>
      </div>
    </section>
  )
}

export default FullCourseView
