import "./Code.scss"

import ErrorCover from "app/ui/synthetic/ErrorCover/ErrorCover"
import LoaderCover from "app/ui/synthetic/Loader/LoaderCover"
import { lazy, Suspense } from "react"
import { useAsync } from "react-use"

import CodeTheme from "./CodeTheme"

interface CodeHighlighterProps {
  lang?: string
  theme?: CodeTheme
  content: string
}

const SyntaxHighlighterLazy = lazy(() => import("react-syntax-highlighter"))
const DEFAUL_HIGHLIGHT_THEME: CodeTheme = CodeTheme.vs2015

function CodeHighlighter(props: CodeHighlighterProps) {
  const themeStyle = useAsync(() => import("react-syntax-highlighter/dist/esm/styles/hljs/" + (props.theme ?? DEFAUL_HIGHLIGHT_THEME)), [props.theme])

  if (themeStyle.loading) {
    return <LoaderCover />
  }
  if (themeStyle.error) {
    return (
      <>
        <ErrorCover>There was an error loading SyntaxHighlighter styles: <br /> {themeStyle.error.message}</ErrorCover>
        <br />

      </>
    )
  }

  return (
    <Suspense fallback={<LoaderCover />}>
      <SyntaxHighlighterLazy showLineNumbers language={props.lang} style={themeStyle.value.default}>
        {props.content}
      </SyntaxHighlighterLazy>
    </Suspense>
  )
}

export default CodeHighlighter
