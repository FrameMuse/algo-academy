import appQuery from "api/appQuery"
import { APIActions } from "api/data"
import { refetchActionQueries } from "api/helpers"
import { APIMappings } from "api/mappings"
import { LessonMultipleContent } from "app/areas/lesson/types"
import { EditorLanguage } from "app/ui/synthetic/Editor/Editor.types"
import { toast } from "react-toastify"

function useUpdateLessonByLanguage() {
  async function updateLesson(id: string, language: EditorLanguage, content: Partial<LessonMultipleContent>) {
    console.log(content)

    const languageId = APIMappings.editorLanguage.backward(language)
    const action = APIActions.patchLessonsIdResourcesLanguageId(languageId, id, {
      default_code: content.startingCode,
      tests: content.tests,
      solution: content.solution,
      validation_func: content.testsValidation
    })

    await appQuery(action)

    refetchActionQueries(APIActions.getLessons())
    refetchActionQueries(APIActions.getLessonsId(id))

    toast.success("Lesson has been updated.")
  }
  return updateLesson
}

export default useUpdateLessonByLanguage
