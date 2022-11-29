import useAddChapter from "api/hooks/chapters/useAddChapter"
import Box from "app/layouts/Box/Box"
import Column from "app/layouts/Column/Column"
import Headings from "app/layouts/Headings/Headings"
import Button from "app/ui/kit/Button/Button"
import Field from "app/ui/kit/Field/Field"
import Form, { FormState } from "app/ui/kit/Form/Form"
import Selector from "app/ui/kit/Selector/Selector"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function AdminChaptersNewView() {
  const addChapter = useAddChapter()
  const navigate = useNavigate()

  const [pending, setPending] = useState(false)

  enum FormInputs {
    Title = "title",
    Order = "order",
    ShowInProfile = "showInProfile"
  }

  interface FormValues {
    title: string
    order: number
    showInProfile: boolean
  }

  async function onSubmit(state: FormState<FormInputs, FormValues>) {
    setPending(true)
    const chapter = await addChapter(state.values)
    setPending(false)

    if (chapter == null) return
    navigate("../" + chapter.id)
  }
  return (
    <Box>
      <Headings>
        <h2>New Chapter</h2>
        <p>After creating, you will be navigated to it.</p>
      </Headings>
      <Form style={{ width: "30vw" }} onSubmit={onSubmit}>
        <Column>
          <Field placeholder="e.g. Getting Started" name={FormInputs.Title} required>Title</Field>
          <Field placeholder="e.g. 12 (12th chapter)" name={FormInputs.Order} required type="number">Order (can be changed lately)</Field>
          <Selector label="Show this in `Profile Solved Problems`" defaultValue="false" name={FormInputs.ShowInProfile}>
            <option value="true">True</option>
            <option value="false">False</option>
          </Selector>
          <Button color="dark" type="submit" pending={pending}>Create</Button>
        </Column>
      </Form>
    </Box>
  )
}

export default AdminChaptersNewView
