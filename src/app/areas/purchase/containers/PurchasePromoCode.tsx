import useValidatePromocode from "api/hooks/promocode/useValidatePromocode"
import { useState } from "react"

import PromoCodeInput from "../components/PromoCodeInput/PromoCodeInput"

interface PurchasePromoCodeProps {
  /**
   * Call on successful and unsuccessful validation.
   * 
   * @argument promocode - promocode, can be undefined.
   * @argument discountPercentage - e.g. `25` (25%), can be 0.
   */
  onValidation?(promocode: string | undefined, discountPercentage: number): void
}

function PurchasePromoCode(props: PurchasePromoCodeProps) {
  const validatePromocode = useValidatePromocode()
  const [valid, setValid] = useState(false)

  async function onSubmit(value: string) {
    if (value.length === 0) return

    const discount = await validatePromocode(value)
    const discountValid = discount <= 0

    if (discountValid) {
      setValid(true)
      props.onValidation?.(value, discount)

      return
    }

    setValid(false)
    props.onValidation?.(undefined, 0)
  }

  return (
    <PromoCodeInput valid={valid} onSubmit={onSubmit} />
  )
}

export default PurchasePromoCode
