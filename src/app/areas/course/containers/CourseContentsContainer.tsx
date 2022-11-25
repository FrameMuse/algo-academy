import useCurriculum from "api/hooks/useCurriculum"
import { LessonPreview, LessonPreviews } from "app/areas/lesson"
import { LessonStatus } from "app/areas/lesson/types"

import { CourseContents, CourseElement } from ".."

interface CourseContentsContainerProps {
  id: string | number
}

function CourseContentsContainer(props: CourseContentsContainerProps) {
  const asd = useCurriculum()

  function onFilterChange() { }

  return (
    <CourseContents onFilterChange={onFilterChange}>
      {asd?.map((azd, index) => (
        <CourseElement title={azd.name} progress={{ done: 2, total: 3 }} defaultExapanded key={index}>
          <LessonPreviews title="Learning">
            {azd.list.map((zxc, index) => (
              <LessonPreview id={zxc.id} status={Number(zxc.status)} key={index}>{zxc.name}</LessonPreview>
            ))}
          </LessonPreviews>
        </CourseElement>
      ))}
    </CourseContents>
  )

  return (
    <CourseContentsContainerSample />
  )
}

function CourseContentsContainerSample() {
  return (
    <CourseContents>
      <CourseElement title="1. Getting Started" progress={{ done: 2, total: 3 }} defaultExapanded>
        <LessonPreviews title="Learning">
          <LessonPreview id={1} status={LessonStatus.Complete}>Welcome</LessonPreview>
          <LessonPreview id={2} status={LessonStatus.Complete}>How to use this Course</LessonPreview>
          <LessonPreview id={3} status={LessonStatus.Incomplete}>What are Coding Patterns?</LessonPreview>
        </LessonPreviews>
      </CourseElement>

      <CourseElement title="2. Big O Notation" progress={{ done: 2, total: 3 }}>Empty</CourseElement>
      <CourseElement title="3. Data Structures" progress={{ done: 0, total: 5 }}>Empty</CourseElement>
      <CourseElement title="4. Linked List" progress={{ done: 0, total: 7 }}>Empty</CourseElement>
      <CourseElement title="5. Binary Search" progress={{ done: 0, total: 6 }}>Empty</CourseElement>
      <CourseElement title="6. Two Pointers" progress={{ done: 0, total: 8 }}>Empty</CourseElement>
      <CourseElement title="7. Priority Queue" progress={{ done: 0, total: 4 }}>Empty</CourseElement>
      <CourseElement title="8. Monotonic Stack" progress={{ done: 0, total: 7 }}>Empty</CourseElement>

      <CourseElement title="9. Trees" progress={{ done: 4, total: 12 }}>
        <LessonPreviews title="Learning">
          <LessonPreview id={4} status={LessonStatus.Complete}>Intro To Trees</LessonPreview>
          <LessonPreview id={5} status={LessonStatus.Complete}>Tree Traversal</LessonPreview>
          <LessonPreview id={6} status={LessonStatus.Incomplete}>Common Patterns</LessonPreview>
        </LessonPreviews>
        <LessonPreviews title="Practice">
          <LessonPreview id={7} status={LessonStatus.Complete}>Level Order Traversal</LessonPreview>
          <LessonPreview id={8} status={LessonStatus.Complete}>Same Tree</LessonPreview>
          <LessonPreview id={9} status={LessonStatus.Incomplete}>Find Eventual Safe States</LessonPreview>
          <LessonPreview id={10} status={LessonStatus.Incomplete}>Lowest Common Ancestor</LessonPreview>
          <LessonPreview id={11} status={LessonStatus.Incomplete}>Balanced Binary Tree</LessonPreview>
          <LessonPreview id={12} status={LessonStatus.Incomplete}>Max Depth Of A Tree</LessonPreview>
          <LessonPreview id={14} status={LessonStatus.Incomplete}>Valid Binary Trees</LessonPreview>
          <LessonPreview id={15} status={LessonStatus.NeedsReviews}>Implement A Prefix Trie</LessonPreview>
          <LessonPreview id={16} status={LessonStatus.Incomplete}>Word Ladder</LessonPreview>
        </LessonPreviews>
      </CourseElement>

      <CourseElement title="10. Graphs" progress={{ done: 0, total: 5 }}>Empty</CourseElement>
      <CourseElement title="11. Dynamic Programming" progress={{ done: 0, total: 3 }}>Empty</CourseElement>
      <CourseElement title="12. Merge Intervals" progress={{ done: 0, total: 4 }}>Empty</CourseElement>
      <CourseElement title="13. Behavioral Interviews" progress={{ done: 0, total: 9 }}>Empty</CourseElement>
      <CourseElement title="14. Coding Interviews" progress={{ done: 0, total: 6 }}>Empty</CourseElement>
      <CourseElement title="15. System Design" progress={{ done: 0, total: 4 }}>Empty</CourseElement>
      <CourseElement title="16. Bonus" progress={{ done: 0, total: 9 }}>Empty</CourseElement>
    </CourseContents>
  )
}

export default CourseContentsContainer
