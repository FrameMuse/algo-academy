import { EditorLanguage } from "app/ui/synthetic/Editor/Editor.types"
import EditorPreview from "app/ui/synthetic/EditorPreview/EditorPreview"

interface LessonArticleEditProps {
  id: string
}

function LessonArticleEdit(props: LessonArticleEditProps) {
  return (
    <EditorPreview language={EditorLanguage.Markdown} value="1" onChange={() => { 1 }} />
  )
}

export default LessonArticleEdit
