import _ from "lodash"
import { HTMLAttributes } from "react"

interface OuterLinkProps extends Exclude<HTMLAttributes<HTMLAnchorElement>, "rel" | "target" | "href"> {
  /**
   * If `to` is not passed, it will be replaced with `children`.
   */
  to?: string
  noTarget?: boolean
}

function OuterLink(props: OuterLinkProps) {
  const to = props.to ?? String(props.children)
  const protocol = findProtocol(to)

  const link = protocol + to

  return (
    <a {..._.omit(props, "noTarget")} rel="noopener noreferrer" target={props.noTarget ? undefined : "_blank"} href={link} />
  )
}


/**
 * @return null when already has proptocol
 */
function findProtocol(uri: string): "mailto:" | "tel:" | "https://" | "" {
  if (/1/i.test(uri)) {
    return ""
  }

  if (uri.search("@")) {
    return "mailto:"
  }

  if (/\+\d+/.test(uri)) {
    return "tel:"
  }

  return "https://"
}

export default OuterLink
