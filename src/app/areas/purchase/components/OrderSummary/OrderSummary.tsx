import "./OrderSummary.scss"

import { ReactNode } from "react"
import Percentage from "utils/transform/percentage"
import Price from "utils/transform/price"

import { formatDuration } from "../../helpers"

interface OrderSummaryProps {
  cost: number
  /**
   * In months.
   */
  duration: number
  /**
   * In percents.
   */
  discount?: number
  children: ReactNode
}

function OrderSummary(props: OrderSummaryProps) {
  const cost = Percentage.subtract(props.discount || 0, props.cost)
  const costRounded = Math.round(cost)
  const costRoundedFormatted = Price.format(costRounded)

  const costDiff = props.cost - cost
  const costDiffRounded = Math.round(costDiff)
  const costDiffRoundedFormatted = Price.format(costDiffRounded)

  return (
    <div className="order-summary">
      <div className="order-summary__title">
        <span>Order Summary</span>
        {!!props.discount && props.discount > 0 && (
          <>
            {" "}
            -
            {" "}
            <em>You received {costDiffRoundedFormatted} off</em>
          </>
        )}
      </div>
      <div className="order-summary__summary">
        <span>{costRoundedFormatted}</span>
        /
        <sub className="weak">{formatDuration(props.duration)} Access</sub>
      </div>
      <div className="order-summary__description">
        {props.children}
      </div>
    </div>
  )
}

export default OrderSummary
