import { LessonMultipleContent } from "app/areas/lesson/types"
import { EditorLanguage } from "app/ui/synthetic/Editor/Editor.types"

import useLesson from "./useLesson"

function useLessonContents(id: string, editorLanguage: EditorLanguage): LessonMultipleContent {
  const lesson = useLesson(id)

  const contents = lesson.contents.find(content => content.language === editorLanguage)
  if (contents == null) {
    throw new Error(`Could't find lesson content for ${editorLanguage}.`)
  }

  return contents
}

export default useLessonContents
