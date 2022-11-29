import { LessonContentEdit, LessonInfoEdit } from "app/areas/lesson"
import Box from "app/layouts/Box/Box"
import Headings from "app/layouts/Headings/Headings"
import TabLinks from "app/layouts/TabLinks/TabLinks"
import TabLink from "app/ui/synthetic/TabRouter/TabLink"
import TabRoute from "app/ui/synthetic/TabRouter/TabRoute"
import TabRouter from "app/ui/synthetic/TabRouter/TabRouter"
import useParam from "utils/hooks/useParam"

export function AdminLessonsEditView() {
  const lessonId = useParam("lessonId")
  return (
    <Box>
      <Headings>
        <h2>Lesson #{lessonId}</h2>
      </Headings>
      <TabRouter defaultPath="general">
        <TabLinks>
          <TabLink to="general">General</TabLink>
          <TabLink to="content">Content</TabLink>
        </TabLinks>

        <TabRoute path="general">
          <LessonInfoEdit id={lessonId} />
        </TabRoute>
        <TabRoute path="content">
          <LessonContentEdit id={lessonId} />
        </TabRoute>
      </TabRouter>
    </Box>
  )
}

export default AdminLessonsEditView
