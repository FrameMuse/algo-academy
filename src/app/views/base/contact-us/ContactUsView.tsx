import useSubmitFeedback from "api/hooks/feedbacks/useSubmitFeedback"
import { APP_TITLE } from "app/App"
import Column from "app/layouts/Column/Column"
import Headings from "app/layouts/Headings/Headings"
import PopupLayout from "app/layouts/PopupLayout/PopupLayout"
import Button from "app/ui/kit/Button/Button"
import Field from "app/ui/kit/Field/Field"
import Textarea from "app/ui/kit/Textarea/Textarea"
import Callout from "app/ui/synthetic/Callout/Callout"
import { useState } from "react"
import { Helmet } from "react-helmet"
import { Modal, useModalContext } from "react-modal-global"
import { useAppSelector } from "store/hooks"
import { inputValue } from "utils/common"

function ContactUsView() {
  const user = useAppSelector(state => state.user)
  const submitFeedback = useSubmitFeedback()

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  async function onSubmit() {
    await submitFeedback({ title, content })

    Modal.open(PopupSentMessage)
  }

  return (
    <section className="page-section" style={{ maxWidth: "40em" }}>
      <Helmet>
        <title>{APP_TITLE + " | " + "Contact Us"}</title>
      </Helmet>
      <Column>
        <h1>Contact Us</h1>
        <Column>
          <div style={{ margin: "0 auto" }}>
            {!user.signed && (
              <Callout>{"You're"} not logged in, this will be submited anonymously.</Callout>
            )}
          </div>
          <Field placeholder="e.g. Workspace issue" onChange={inputValue(setTitle)}>Title</Field>
          <Textarea rows={8} placeholder="e.g. The editor isn't working" onChange={inputValue(setContent)}>Content</Textarea>
          <Button await onClick={onSubmit}>Submit</Button>
        </Column>
      </Column>
    </section>
  )
}

function PopupSentMessage() {
  const modal = useModalContext()

  return (
    <PopupLayout width="22.5em">
      <Headings>
        <h3>Thank You!</h3>
        <p>
          Your message has been sent. Someone from our support team will reply to your question within 24 hours.
          <br />
          <br />
          <Callout>The fields will be reset.</Callout>
        </p>
      </Headings>
      <Button onClick={modal.close}>Continue</Button>
    </PopupLayout>
  )
}

export default ContactUsView
