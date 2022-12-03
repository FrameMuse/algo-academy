import appQuery from "api/appQuery"
import queryClient from "api/client"
import { APIActions } from "api/data"
import { getActionQueryKey, isResponseOk } from "api/helpers"
import { APIMappings } from "api/mappings"
import { LessonMultipleContent } from "app/areas/lesson/types"
import { EditorLanguage } from "app/ui/synthetic/Editor/Editor.types"
import { toast } from "react-toastify"

function useUpdateLessonByLanguage() {
  async function updateLesson(id: string, language: EditorLanguage, content: Partial<LessonMultipleContent>) {
    const languageId = APIMappings.resourceLanguage.backward(language)
    const action = APIActions.patchLessonsIdResourcesLanguageId(languageId, id, {
      default_code: content.defaultCode,
      tests: content.tests,
      notes: content.notes,
      solution: content.solution,
    })

    const response = await appQuery(action)
    if (!isResponseOk(response)) return

    queryClient.refetchQueries(getActionQueryKey(APIActions.getLessonsId(id)))

    toast.success("Lesson has been updated.")
  }
  return updateLesson
}

export default useUpdateLessonByLanguage
