import appQuery from "api/appQuery"
import queryClient from "api/client"
import { APIActions } from "api/data"
import { isResponseOk } from "api/helpers"
import { APIMappings } from "api/mappings"
import { toast } from "react-toastify"

function useUpdateLesson() {
  async function updateLesson(id: string, lesson: {
    title?: string
    statement?: string
    hints?: string
  }) {
    const response = await appQuery(APIActions.patchLessonsId(id, {
      ...lesson,
      name: lesson.title,
    }))
    if (!isResponseOk(response)) return

    queryClient.refetchQueries([APIActions.getLessonsId(id).endpoint, APIActions.getLessonsId(id).operationId])

    toast.success(`Lesson ${response.payload.name} was updated.`)

    return APIMappings.mapLesson(response.payload)
  }
  return updateLesson
}

export default useUpdateLesson
