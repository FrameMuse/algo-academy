import "./Article.scss"

import { ReactNode } from "react"

interface ArticleProps {
  children: ReactNode
}

function Article(props: ArticleProps) {
  return (
    <article className="article">{props.children}</article>
  )
}

export default Article
