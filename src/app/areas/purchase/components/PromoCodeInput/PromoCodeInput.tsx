import "./PromoCodeInput.scss"

import appQuery from "api/appQuery"
import { APIActions } from "api/data"
import Button from "app/ui/kit/Button/Button"
import Field from "app/ui/kit/Field/Field"
import { useState } from "react"
import { inputValue } from "utils/common"

interface PromoCodeInputProps {
  onSubmit?(value: string): void
}

function PromoCodeInput(props: PromoCodeInputProps) {
  const [value, setValue] = useState<string>()
  function onSubmit() {
    if (value == null) return

    appQuery(APIActions.postStripeCreateCharge({
      "subscription_id": "1",
      "promo_name": "12",
      "card_number": "12",
      "card_exp_month": "12",
      "card_exp_year": "2222",
      "card_CVC": "121"
    }))

    props.onSubmit?.(value)
  }
  return (
    <div className="promo-code-input">
      <Field iconName="tag" placeholder="WINTER20" onChange={inputValue(setValue)}>Promo Code</Field>
      <Button squared onClick={onSubmit}>Apply</Button>
    </div>
  )
}

export default PromoCodeInput
