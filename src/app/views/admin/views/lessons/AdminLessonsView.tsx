import useLessons from "api/hooks/lessons/useLessons"
import { StaticRoutes } from "app/AppRoutes"
import { LessonType } from "app/areas/lesson/types"
import Box from "app/layouts/Box/Box"
import Buttons from "app/layouts/Buttons/Buttons"
import ButtonLink from "app/ui/kit/Button/ButtonLink"
import Table from "app/ui/kit/Table/Table"
import ErrorCover from "app/ui/synthetic/ErrorCover/ErrorCover"
import LoaderCover from "app/ui/synthetic/Loader/LoaderCover"
import _ from "lodash"

function AdminLessonsView() {
  const { lessons, isLoading } = useLessons()

  if (isLoading) {
    return <LoaderCover />
  }

  if (lessons == null) {
    return <ErrorCover>Lesson is null.</ErrorCover>
  }

  return (
    <Box>
      <h2>Lessons</h2>
      <ButtonLink color="gray" to="new">Add new lesson</ButtonLink>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Type</th>
            <th>Chapter Relation</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {lessons.map(lesson => (
            <tr key={lesson.id}>
              <td>{lesson.id}</td>
              <td>{lesson.title}</td>
              <td>{_.startCase(LessonType[lesson.type])}</td>
              <td>
                {lesson.chapterRelation && (
                  <div>
                    <ButtonLink color="dark" size="smaller" to={StaticRoutes.AdminHome + "/" + lesson.chapterRelation.id}>
                      {lesson.chapterRelation.title}
                    </ButtonLink>
                  </div>
                )}
              </td>
              <td>
                <Buttons>
                  <ButtonLink color="blue" size="smaller" to={lesson.id}>Edit</ButtonLink>
                </Buttons>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Box>
  )
}

export default AdminLessonsView
