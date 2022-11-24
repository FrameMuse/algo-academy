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
  const protocol = findLackingProtocol(to)

  const link = protocol + to

  return (
    <a {..._.omit(props, "noTarget", "to")} rel="noopener noreferrer" target={props.noTarget ? undefined : "_blank"} href={link} />
  )
}


/**
 * @return null when already has proptocol
 */
function findLackingProtocol(uri: string): "mailto:" | "tel:" | "https://" | "" {
  if (uri.length === 0) return ""
  if (uri.startsWith("http")) return ""
  if (uri.startsWith("//")) return ""

  if (uri.search("@") >= 0) {
    return "mailto:"
  }

  if (/\+\d+/.test(uri)) {
    return "tel:"
  }

  return "https://"
}

export default OuterLink
