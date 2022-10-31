import Column from "app/layouts/Column/Column"
import PopupLayout from "app/layouts/PopupLayout/PopupLayout"
import Button from "app/ui/kit/Button/Button"
import Field from "app/ui/kit/Field/Field"
import Form from "app/ui/kit/Form/Form"

import OrderSummary from "../OrderSummary/OrderSummary"

function PopupCheckout() {
  return (
    <PopupLayout width="43.75em">
      {/* <Headings>
        <h5>Checkout</h5>
        <p>Don’t worry about canceling any annoying subscriptions - this is a 1-time charge.</p>
        <Callout color="red">30 days money-back guarantee if you’re not satisfied.</Callout>
      </Headings> */}
      <OrderSummary pay={249} per={"1 Year"}>
        <ul>
          <li>{"You'll"} have access to Algo Academy for 1 year.</li>
          <li>Your access to Algo Academy will be tied to this account.</li>
          <li>This is a 1-time charge.</li>
          <li>30 days money-back guarantee if you’re not satisfied.</li>
        </ul>
      </OrderSummary>
      <Form>
        <Column>
          {/* <Row>
            <Field autoComplete="given-name" placeholder="Darryl" required>First Name</Field>
            <Field autoComplete="family-name" placeholder="Garrison" required>Last Name</Field>
          </Row>
          <Field type="email" autoComplete="email" placeholder="email@example.com" required>E-mail Address</Field> */}
          <Field iconName="tag" placeholder="WINTER20" style={{ textTransform: "uppercase" }}>Promo Code</Field>
          <Button type="submit">Buy Risk-Free</Button>
        </Column>
      </Form>
    </PopupLayout>
  )
}

export default PopupCheckout
