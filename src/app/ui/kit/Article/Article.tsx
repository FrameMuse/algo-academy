import "./Article.scss"

import useTheme from "app/ui/synthetic/Theme/useTheme"
import { ReactNode } from "react"
import { classWithModifiers } from "utils/common"

interface ArticleProps {
  fontSize?: "small"
  children: ReactNode
}

function Article(props: ArticleProps) {
  const theme = useTheme()

  return (
    <article className={classWithModifiers("article", props.fontSize, theme)}>{props.children}</article>
  )
}

export default Article
