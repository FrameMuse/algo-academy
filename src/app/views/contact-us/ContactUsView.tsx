import { Headings } from "app/areas/base"
import Box from "app/layouts/Box/Box"
import PopupLayout from "app/layouts/PopupLayout/PopupLayout"
import Row from "app/layouts/Row/Row"
import Button from "app/ui/kit/Button/Button"
import Field from "app/ui/kit/Field/Field"
import Form from "app/ui/kit/Form/Form"
import Textarea from "app/ui/kit/Textarea/Textarea"
import Callout from "app/ui/synthetic/Callout/Callout"
import { FormEvent } from "react"
import { Modal, useModalContext } from "react-modal-global"

function ContactUsView() {
  async function onSubmit(state: unknown, event: FormEvent<HTMLFormElement>) {
    const target = event.currentTarget

    await Modal.open(PopupSentMessage)

    target.reset()
  }

  return (
    <section className="page-section">
      <h1>Contact Us</h1>
      <Form onSubmit={onSubmit}>
        <Box style={{ justifyItems: "stretch", width: "43em", margin: "auto" }}>
          <Row>
            <Field autoComplete="given-name" placeholder="Darryl" required>First Name</Field>
            <Field autoComplete="family-name" placeholder="Garrison" required>Last Name</Field>
          </Row>
          <Field type="email" autoComplete="email" placeholder="email@example.com" required>E-mail Address</Field>
          <Textarea placeholder="I'd like to say that..." rows={8} required>Message</Textarea>
          <Button type="submit">Send Message</Button>
        </Box>
      </Form>
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
