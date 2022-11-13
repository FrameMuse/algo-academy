import "./Code.scss"

import ErrorCover from "app/ui/synthetic/ErrorCover/ErrorCover"
import LoaderCover from "app/ui/synthetic/Loader/LoaderCover"
import _ from "lodash"
import { HTMLAttributes, useEffect, useState } from "react"
import { useAsync } from "react-use"
import { classMerge } from "utils/common"
import { loadDocumentFormatter } from "utils/document-formatter"
import useAppCopyToClipboard from "utils/hooks/useAppCopyToClipboard"

import ButtonIcon from "../Button/ButtonIcon"
import CodeHighlighter from "./CodeHighlighter"
import CodeTheme from "./CodeTheme"

export interface CodeProps extends HTMLAttributes<HTMLElement> {
  lang?: string
  theme?: CodeTheme
  /**
   * Apply formatting to `props.children`.
   * 
   * @default false
   */
  applyFormatting?: boolean
}

function Code(props: CodeProps) {
  const { copyToClipboard } = useAppCopyToClipboard()

  const [applyFormatting, setApplyFormatting] = useState(props.applyFormatting)

  useEffect(() => {
    if (applyFormatting) return

    setApplyFormatting(props.applyFormatting)
  }, [props.applyFormatting])


  const { loading, value: formatDocument } = useAsync(applyFormatting ? loadDocumentFormatter : (async () => { }), [applyFormatting])

  if (applyFormatting) {
    if (loading) {
      return <LoaderCover />
    }
    if (formatDocument == null) {
      return <ErrorCover>formatDocument is null.</ErrorCover>
    }
  }

  const source = String(props.children)
  const sourceFormatted = formatDocument?.(source, { parser: "babel" })

  const content = sourceFormatted ?? source

  return (
    <div {..._.omit(props, "lang", "theme")} className={classMerge("code", props.className)}>
      <div className="code__toolbar">
        <ButtonIcon name="check" color="gray" size="smaller" squared onClick={() => copyToClipboard(content)} ariaLabel="Copy to clipboard" />
        {!applyFormatting && (
          <ButtonIcon name="exclamation-mark" color="gray" size="smaller" squared onClick={() => setApplyFormatting(true)} ariaLabel="Format (significant network usage)" />
        )}
      </div>
      <CodeHighlighter content={content} lang={props.lang} theme={props.theme} />
    </div>
  )
}

// function useCodeFormatting(source: string, disabled?: boolean): {} {
//   const formatDocumentRef = useRef<(source: string) => string>(null)

//   useEffect(() => {
//     if (disabled) return

//     // load document formatter function
//   }, [disabled])

//   if (disabled) {
//     return source
//   }


//   if (formatDocumentRef.current === null) {
//     throw new Error("formatDocumentRef.current is null")
//   }

//   const contentFormatted = formatDocumentRef.current(source)
//   return contentFormatted
// }

export default Code
