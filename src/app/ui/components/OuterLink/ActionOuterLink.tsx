import { Action } from "infrastructure/persistence/api/client.types"
import { endpointTransform } from "infrastructure/persistence/api/interceptors"
import _ from "lodash"
import { HTMLAttributes } from "react"

interface ActionOuterLinkProps extends Omit<HTMLAttributes<HTMLAnchorElement>, "href"> {
  action: Action
}

function ActionOuterLink(props: ActionOuterLinkProps) {
  const href = endpointTransform(props.action)
  return (
    <a {..._.omit(props, "action")} rel="noopener noreferrer" href={href} />
  )
}

export default ActionOuterLink