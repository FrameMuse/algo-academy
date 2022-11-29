import Buttons from "app/layouts/Buttons/Buttons"
import Headings from "app/layouts/Headings/Headings"
import PopupLayout from "app/layouts/PopupLayout/PopupLayout"
import Button from "app/ui/kit/Button/Button"
import { useEffect, useState } from "react"
import { useModalContext } from "react-modal-global"
import Time from "utils/transform/time"

interface PopupConfirmProps {
  onConfirm?(): void
}

function PopupConfirm(props: PopupConfirmProps) {
  const modal = useModalContext()
  const [timer, setTimer] = useState(3)

  useEffect(() => {
    return Time.everySecond(() => setTimer(timer => timer - 1))
  })

  function onConfirm() {
    modal.close()
    props.onConfirm?.()
  }

  return (
    <PopupLayout width="25em">
      <Headings>
        <h4>Confirm</h4>
      </Headings>
      <Buttons>
        <Button color="gray" disabled={timer > 0} onClick={onConfirm}>{timer > 0 ? ("Wait " + timer) : "Confirm"}</Button>
        <Button color="dark" onClick={modal.close}>Cancel</Button>
      </Buttons>
    </PopupLayout>
  )
}

export default PopupConfirm
