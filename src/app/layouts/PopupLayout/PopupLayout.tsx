import "./PopupLayout.scss"

import QueryBoundary from "app/containers/QueryBoundary"
import ButtonIcon from "app/ui/kit/Button/ButtonIcon"
import { ReactNode, useEffect, useRef } from "react"
import ReactGA from "react-ga4"
import { useModalContext } from "react-modal-global"

interface PopupLayoutProps {
  width?: string
  children: ReactNode
}

function PopupLayout(props: PopupLayoutProps) {
  const modal = useModalContext()
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    ReactGA.event({
      action: "Modal View",
      category: "Modal view",
      label: modal.component.toString()
    })


    if (elementRef.current == null) return

    elementRef.current
  }, [modal.component])
  return (
    <div className="popup-layout" style={{ width: props.width }} ref={elementRef}>
      <div className="popup-layout__close">
        <ButtonIcon name="cross" size="small" color="white" onClick={modal.close} ariaLabel="Close modal" />
      </div>
      <div className="popup-layout__container">
        <QueryBoundary>
          {props.children}
        </QueryBoundary>
      </div>
    </div>
  )
}

export default PopupLayout
