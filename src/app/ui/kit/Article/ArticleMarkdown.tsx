import Video from "app/ui/kit/Video/Video"
import LoaderCover from "app/ui/synthetic/Loader/LoaderCover"
import { lazy, Suspense } from "react"

import Code from "../Code/Code"
import Article from "./Article"

const ReactMarkdownLazy = lazy(() => import("react-markdown"))

interface ArticleMarkdownProps {
  theme?: "dark" // "light" by default
  content: string
}

function ArticleMarkdown(props: ArticleMarkdownProps) {
  return (
    <Article>
      <Suspense fallback={<LoaderCover />}>
        <ReactMarkdownLazy
          components={{
            video: Video,
            code: codeProps => <Code lang={codeProps.className?.replace("language-", "")}>{codeProps.children}</Code>
          }}
        >
          {props.content}
        </ReactMarkdownLazy>
      </Suspense>
    </Article>
  )
}

export default ArticleMarkdown
