import Video from "app/ui/kit/Video/Video"
import { lazy, Suspense } from "react"
import { useAsync } from "react-use"

import BlockQuote from "../BlockQuote/BlockQuote"
import Code from "../Code/Code"
import CodeInline from "../Code/CodeInline"
import Details from "../Details/Details"
import Article from "./Article"
const ReactMarkdownLazy = lazy(() => import("react-markdown"))

interface ArticleMarkdownProps {
  theme?: "dark" // "light" by default
  content: string

  fontSize?: "small"
}

function ArticleMarkdown(props: ArticleMarkdownProps) {
  const { value: rehypeRaw } = useAsync(() => import("rehype-raw"))

  return (
    <Article fontSize={props.fontSize}>
      <Suspense fallback={<pre>{props.content}</pre>}>
        <ReactMarkdownLazy
          rehypePlugins={rehypeRaw && [rehypeRaw.default]}
          components={{
            blockquote: BlockQuote,
            video: Video,
            details: detailsProps => <Details summary={detailsProps.title} defaultExpanded={detailsProps.open}>{detailsProps.children}</Details>,
            code: codeProps => codeProps.inline ? <CodeInline>{codeProps.children}</CodeInline> : <Code lang={codeProps.className?.replace("language-", "")}>{codeProps.children}</Code>
          }}
        >
          {props.content}
        </ReactMarkdownLazy>
      </Suspense>
    </Article>
  )
}

export default ArticleMarkdown
