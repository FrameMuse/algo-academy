import useAddLeson from "api/hooks/lessons/useAddLeson"
import { LessonType } from "app/areas/lesson/types"
import Box from "app/layouts/Box/Box"
import Column from "app/layouts/Column/Column"
import Headings from "app/layouts/Headings/Headings"
import Button from "app/ui/kit/Button/Button"
import Field from "app/ui/kit/Field/Field"
import Form, { FormState } from "app/ui/kit/Form/Form"
import Selector from "app/ui/kit/Selector/Selector"
import { optionsFromEnum } from "app/ui/kit/Selector/Selector.helpers"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function AdminLessonsNewView() {
  const addLesson = useAddLeson()
  const navigate = useNavigate()

  const [pending, setPending] = useState(false)

  enum FormInputs {
    Title = "title",
    Order = "order",
    Type = "type"
  }

  interface FormValues {
    title: string
    order: number
    type: number
  }

  async function onSubmit(state: FormState<FormInputs, FormValues>) {
    setPending(true)
    const lesson = await addLesson(state.values)
    setPending(false)

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
          <Field placeholder="e.g. Getting Started" name={FormInputs.Title} required>Title</Field>
          <Field placeholder="e.g. 12 (12th chapter)" name={FormInputs.Order} required type="number">Order (can be changed lately)</Field>
          <Selector label="Type" defaultValue={LessonType.Learning} name={FormInputs.Type}>
            {optionsFromEnum(LessonType)}
          </Selector>
          <Button color="dark" type="submit" pending={pending}>Create</Button>
        </Column>
      </Form>
    </Box>
  )
}

export default AdminLessonsNewView
