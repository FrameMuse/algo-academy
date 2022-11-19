import "./FullCourseView.scss"

import { CourseContentsContainer, CourseFreeNotice, CourseProgressContainer } from "app/areas/course"

function FullCourseView() {
  return (
    <section className="wrapper course-section">
      <div className="course-section__header">
        <h1>Algo Academy Course</h1>
        <p>Our curriculum spans topics such as, algorithms, system design, coding patterns, space time complexity, behavioral interviews and much more. Start practicing today and learn everything you need to ace your next coding interview.</p>
      </div>
      <div className="course-section__container">
        <CourseFreeNotice />
        <CourseProgressContainer id="test" />
        <CourseContentsContainer id="test" />
      </div>
    </section>
  )
}

export default FullCourseView
