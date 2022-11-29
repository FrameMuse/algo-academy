import appQuery from "api/appQuery"
import queryClient from "api/client"
import { APIActions } from "api/data"
import { isResponseOk } from "api/helpers"
import { toast } from "react-toastify"

function useUpdateLesson() {
  async function updateLesson(id: string, lesson: {
    title?: string
    content?: string
    statement?: string
    hints?: string
  }) {
    const response = await appQuery(APIActions.patchLessonsId(id, {
      ...lesson,
      name: lesson.title,
      content: lesson.content,
    }))
    if (!isResponseOk(response)) return

    queryClient.refetchQueries([APIActions.getLessonsId(id).endpoint, APIActions.getLessonsId(id).operationId])

    toast.success(`Lesson ${id} was updated.`)
  }
  return updateLesson
}

export default useUpdateLesson
