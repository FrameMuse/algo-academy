import "./OrderSummary.scss"

import { ReactNode } from "react"

interface OrderSummaryProps {
  pay: number
  per: string
  children: ReactNode
}

function OrderSummary(props: OrderSummaryProps) {
  return (
    <div className="order-summary">
      <div className="order-summary__title">Order Summary</div>
      <div className="order-summary__summary">
        <span>$249</span>
        /
        <sub className="weak">1 Year Access</sub>
      </div>
      <div className="order-summary__description">
        {props.children}
      </div>
    </div>
  )
}

export default OrderSummary
