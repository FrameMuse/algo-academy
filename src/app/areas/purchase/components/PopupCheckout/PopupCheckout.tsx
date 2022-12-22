import useCreateCharge from "api/hooks/charges/useCreateCharge"
import PopupUserAuth from "app/areas/user/popups/PopupUserAuth"
import Column from "app/layouts/Column/Column"
import PopupLayout from "app/layouts/PopupLayout/PopupLayout"
import Button from "app/ui/kit/Button/Button"
import { useState } from "react"
import { Modal } from "react-modal-global"
import { useAppSelector } from "store/hooks"

import PurchasePromoCode from "../../containers/PurchasePromoCode"
import { formatDuration } from "../../helpers"
import OrderSummary from "../OrderSummary/OrderSummary"

interface PopupCheckoutProps {
  planId: string,
  cost: number
  durationMonths: number
}

function PopupCheckout(props: PopupCheckoutProps) {
  const user = useAppSelector(state => state.user)
  const createCharge = useCreateCharge()

  const [promocode, setPromocode] = useState<string>()
  const [discount, setDiscount] = useState<number>(0)

  function onValidation(promocode: string | undefined, discount: number) {
    setPromocode(promocode)
    setDiscount(discount)
  }

  async function onSubmit() {
    if (!user.signed) {
      await Modal.open(PopupUserAuth)

      return
    }

    const url = await createCharge(props.planId, promocode)
    window.location.href = url
  }

  return (
    <PopupLayout width="43.75em">
      <OrderSummary cost={props.cost} duration={props.durationMonths} discount={discount}>
        <ul>
          <li>{"You'll"} have access to Algo Academy for {formatDuration(props.durationMonths)}.</li>
          <li>Your access to Algo Academy will be tied to this account.</li>
          <li>This is a 1-time charge.</li>
          <li>30 days money-back guarantee if you’re not satisfied.</li>
        </ul>
      </OrderSummary>
      <Column>
        <PurchasePromoCode onValidation={onValidation} />
        <Button await onClick={onSubmit}>Buy Risk-Free</Button>
        <p style={{ textAlign: "center" }}>Powered by <strong>stripe</strong></p>
      </Column>
    </PopupLayout>
  )
}

export default PopupCheckout
