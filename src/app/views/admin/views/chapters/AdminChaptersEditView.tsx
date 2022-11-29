import { ChapterInfoEdit, ChapterLessonsEdit } from "app/areas/course"
import Box from "app/layouts/Box/Box"
import Headings from "app/layouts/Headings/Headings"
import TabLinks from "app/layouts/TabLinks/TabLinks"
import TabLink from "app/ui/synthetic/TabRouter/TabLink"
import TabRoute from "app/ui/synthetic/TabRouter/TabRoute"
import TabRouter from "app/ui/synthetic/TabRouter/TabRouter"
import useParam from "utils/hooks/useParam"

function AdminChaptersEditView() {
  const chapterId = useParam("chapterId")

  return (
    <Box>
      <Headings>
        <h2>Chapter</h2>
      </Headings>
      <TabRouter defaultPath="general">
        <TabLinks>
          <TabLink to="general">General</TabLink>
          <TabLink to="lessons">Lessons</TabLink>
        </TabLinks>
        <TabRoute path="general">
          <ChapterInfoEdit id={chapterId} />
        </TabRoute>
        <TabRoute path="lessons">
          <ChapterLessonsEdit id={chapterId} />
        </TabRoute>
      </TabRouter>
    </Box>
  )
}

export default AdminChaptersEditView
