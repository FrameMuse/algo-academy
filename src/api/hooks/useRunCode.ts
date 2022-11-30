import appQuery from "api/appQuery"
import { APIActions } from "api/data"
import { isResponseOk } from "api/helpers"
import { APIMappings } from "api/mappings"
import { EditorLanguage } from "app/ui/synthetic/Editor/Editor.types"

function useRunCode() {
  async function getLesson(id: string) {
    const response = await appQuery(APIActions.getLessonsId(id))
    if (!isResponseOk(response)) return

    return APIMappings.mapLesson(response.payload)
  }

  async function getChapter(id: string) {
    const response = await appQuery(APIActions.getChaptersId(id))
    if (!isResponseOk(response)) return

    return APIMappings.mapChapter(response.payload)
  }

  async function runCode(id: string, data: {
    languageId: EditorLanguage
    sourceCode: string
  }) {
    const lesson = await getLesson(id)
    if (lesson == null) return
    if (lesson.chapterRelation == null) return

    const chapter = await getChapter(lesson.chapterRelation.id)
    if (chapter == null) return

    const response = await appQuery(APIActions.postJudge0Compile({
      chapter_id: chapter.id,
      chapter_name: chapter.title,

      lesson_id: id,
      language_id: data.languageId,
      source_code: data.sourceCode
    }))

    return response
  }

  return runCode
}

export default useRunCode
