import "./BlockQuote.scss"

import { ReactNode } from "react"

interface BlockQuoteProps {
  children: ReactNode
}

function BlockQuote(props: BlockQuoteProps) {
  return (
    <blockquote className="block-quote">{props.children}</blockquote>
  )
}

export default BlockQuote
