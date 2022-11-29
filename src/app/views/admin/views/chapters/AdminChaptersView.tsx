import useChapters from "api/hooks/chapters/useChapters"
import { CourseContents, CourseElement } from "app/areas/course"
import { LessonPreview, LessonPreviews } from "app/areas/lesson"
import Box from "app/layouts/Box/Box"
import Headings from "app/layouts/Headings/Headings"
import ButtonLink from "app/ui/kit/Button/ButtonLink"

function AdminChaptersView() {
  const { chapters } = useChapters()
  return (
    <Box>
      <Headings>
        <h2>Chapters</h2>
        <p>
          Here you can preview all chapters with their lessons.
          To edit chapter info and lessons order go to the link.
        </p>
      </Headings>
      <ButtonLink color="gray" to="new">Add new chapter</ButtonLink>
      <div style={{ width: "100%" }}>
        <CourseContents>
          {chapters?.map((chapter, index) => (
            <CourseElement title={(index + 1) + ". " + chapter.title} key={index}>
              <ButtonLink color="dark" squared to={chapter.id}>Edit this chapter</ButtonLink>

              <LessonPreviews title="Learning">
                {chapter.learningLessons.map(lesson => (
                  <LessonPreview {...lesson} key={lesson.id}>{lesson.title}</LessonPreview>
                ))}
              </LessonPreviews>
              <LessonPreviews title="Practice">
                {chapter.practiceLessons.map(lesson => (
                  <LessonPreview {...lesson} key={lesson.id}>{lesson.title}</LessonPreview>
                ))}
              </LessonPreviews>
            </CourseElement>
          ))}
        </CourseContents>
      </div>
    </Box>
  )
}

export default AdminChaptersView
