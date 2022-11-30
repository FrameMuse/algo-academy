import useAddLesson from "api/hooks/lessons/useAddLeson"
import { LessonType } from "app/areas/lesson/types"
import Box from "app/layouts/Box/Box"
import Column from "app/layouts/Column/Column"
import Headings from "app/layouts/Headings/Headings"
import Button from "app/ui/kit/Button/Button"
import Field from "app/ui/kit/Field/Field"
import Form from "app/ui/kit/Form/Form"
import Selector from "app/ui/kit/Selector/Selector"
import { optionsFromEnum } from "app/ui/kit/Selector/Selector.helpers"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { inputValue } from "utils/common"

function AdminLessonsNewView() {
  const addLesson = useAddLesson()
  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [type, setType] = useState(LessonType.Learning)

  async function onSubmit() {
    const lesson = await addLesson({ title, type })

    if (lesson == null) return
    navigate("../" + lesson.id)
  }
  return (
    <Box>
      <Headings>
        <h2>New Lesson</h2>
        <p>After creating, you will be navigated to it.</p>
      </Headings>
      <Form style={{ width: "30vw" }} onSubmit={onSubmit}>
        <Column>
          <Field placeholder="e.g. Getting Started" required onChange={inputValue(setTitle)}>Title</Field>
          <Selector label="Type" defaultValue={LessonType.Learning} onChange={setType}>
            {optionsFromEnum(LessonType)}
          </Selector>
          <Button color="dark" await onClick={onSubmit}>Create</Button>
        </Column>
      </Form>
    </Box>
  )
}

export default AdminLessonsNewView
