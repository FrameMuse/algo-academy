import "./EditorPreview.scss"

import { WorkspaceEditor, WorkspaceTheme } from "app/areas/workspace"
import ArticleMarkdown from "app/ui/kit/Article/ArticleMarkdown"

import { EditorLanguage } from "../Editor/Editor.types"


interface EditorPreviewProps {
  language?: EditorLanguage

  value: string
  onChange(value: string): void
}


/**
 * TODO: Currently uses outside class names and styles of `problem-layout`, but should be reworked to have its own.
 */
function EditorPreview(props: EditorPreviewProps) {
  // const [content, setContent] = useState<string | undefined>(props.value ?? "")

  // useEffect(() => {
  //   setContent(props.value ?? "")
  // }, [props.value])

  function onChange(value: string | undefined) {
    if (value == null) return

    // setContent(value)
    props.onChange(value)
  }

  return (
    <WorkspaceTheme>
      <div className="problem-layout" style={{ width: "100%" }}>
        <div className="problem-layout__container">
          <div className="problem-layout__section problem-layout__section--shrink">
            <ArticleMarkdown content={props.value} />
          </div>
          <div className="problem-layout__section">
            <WorkspaceEditor height="100%" defaultLanguage={props.language} language={props.language} value={props.value} onChange={onChange} />
          </div>
        </div>
      </div>
    </WorkspaceTheme>
  )

  // return (
  //   <div className="editor-preview"></div>
  // )
}

export default EditorPreview
