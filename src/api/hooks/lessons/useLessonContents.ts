import { EditorLanguage } from "app/ui/synthetic/Editor/Editor.types"

import useLesson from "./useLesson"

function useLessonContents(id: string, editorLanguage: EditorLanguage) {
  const lesson = useLesson(id)

  const contents = lesson.contents.find(content => content.language === editorLanguage)
  if (contents == null) {
    return {
      solution: "",
      language: EditorLanguage.TypeScript,
      notes: "",
      tests: "",
      defaultCode: ""
    }
  }

  return contents
}

export default useLessonContents
