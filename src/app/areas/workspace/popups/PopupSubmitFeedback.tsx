import useSubmitFeedback from "api/hooks/feedbacks/useSubmitFeedback"
import Column from "app/layouts/Column/Column"
import Headings from "app/layouts/Headings/Headings"
import PopupLayout from "app/layouts/PopupLayout/PopupLayout"
import Button from "app/ui/kit/Button/Button"
import Field from "app/ui/kit/Field/Field"
import Textarea from "app/ui/kit/Textarea/Textarea"
import Callout from "app/ui/synthetic/Callout/Callout"
import { useState } from "react"
import { useModalContext } from "react-modal-global"
import { useAppSelector } from "store/hooks"
import { inputValue } from "utils/common"

function PopupSubmitFeedback() {
  const modal = useModalContext()

  const user = useAppSelector(state => state.user)
  const submitFeedback = useSubmitFeedback()

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  async function onSubmit() {
    await submitFeedback({ title, content })

    modal.close()
  }

  return (
    <PopupLayout width="40em">
      <Headings>
        <h3>Submit Feedback</h3>
        <p>If you have any comments or questions, or think there is an issue with the question, feel free to let us know.</p>
      </Headings>
      <Column>
        {!user.signed && (
          <Callout>{"You're"} not logged in, this will be submited anonymously.</Callout>
        )}
        <Field placeholder="e.g. Workspace issue" onChange={inputValue(setTitle)}>Title</Field>
        <Textarea rows={8} placeholder="e.g. The editor isn't working" onChange={inputValue(setContent)}>Content</Textarea>
        <Button await onClick={onSubmit}>Submit</Button>
      </Column>
    </PopupLayout>
  )
}

export default PopupSubmitFeedback
