import "./PromoCodeInput.scss"

import Button from "app/ui/kit/Button/Button"
import { ButtonBaseProps } from "app/ui/kit/Button/Button.types"
import Field from "app/ui/kit/Field/Field"
import { ReactNode, useState } from "react"
import { inputValue } from "utils/common"

interface PromoCodeInputProps {
  /**
   * Promocode is supposed to be applied.
   */
  valid?: boolean
  onSubmit?(value: string): void | Promise<void>
}

function PromoCodeInput(props: PromoCodeInputProps) {
  const [value, setValue] = useState<string>("")

  async function onSubmit() {
    await props.onSubmit?.(value)
  }

  const buttonText: ReactNode = props.valid ? "Applied" : "Apply"
  const buttonColor: ButtonBaseProps["color"] = props.valid ? "green" : undefined
  return (
    <div className="promo-code-input">
      <div className="promo-code-input__label">Promo Code</div>
      <div className="promo-code-input__container">
        <Field iconName="tag" placeholder="WINTER20" onChange={inputValue(setValue)} />
        <Button color={buttonColor} size="small" squared disabled={props.valid} await onClick={onSubmit}>{buttonText}</Button>
      </div>
    </div>
  )
}

export default PromoCodeInput
