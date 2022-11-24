import Column from "app/layouts/Column/Column"
import Headings from "app/layouts/Headings/Headings"
import PopupLayout from "app/layouts/PopupLayout/PopupLayout"
import Button from "app/ui/kit/Button/Button"
import Field from "app/ui/kit/Field/Field"
import Form from "app/ui/kit/Form/Form"
import Textarea from "app/ui/kit/Textarea/Textarea"

function PopupSubmitFeedback() {
  return (
    <PopupLayout width="40em">
      <Headings>
        <h3>Submit Feedback</h3>
        <p>If you have any comments or questions, or think there is an issue with the question, feel free to let us know.</p>
      </Headings>
      <Form>
        <Column>
          {/* <Field placeholder="email@example.com">E-mail</Field> */}
          <Field placeholder="e.g. Workspace issue">Subject</Field>
          <Textarea rows={8} placeholder="e.g. The editor isn't working">Body</Textarea>
          <Button type="submit">Submit</Button>
        </Column>
      </Form>
    </PopupLayout>
  )
}

export default PopupSubmitFeedback
