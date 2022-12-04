import appQuery from "api/appQuery"
import queryClient from "api/client"
import { APIActions } from "api/data"
import { getActionQueryKey, isResponseOk } from "api/helpers"
import { APIMappings } from "api/mappings"
import { LessonType } from "app/areas/lesson/types"
import { toast } from "react-toastify"

function useUpdateLesson() {
  async function updateLesson(id: string, lesson: {
    title?: string
    type?: LessonType

    content?: string
    statement?: string
    hints?: string
  }) {
    const response = await appQuery(APIActions.patchLessonsId(id, {
      type: lesson.type ? APIMappings.lessonType.backward(lesson.type) : undefined,
      name: lesson.title,
      content: lesson.content,
      statement: lesson.statement,
      hints: lesson.hints
    }))
    if (!isResponseOk(response)) return

    queryClient.refetchQueries(getActionQueryKey(APIActions.getLessonsId(id)))

    toast.success(`Lesson has been updated.`)
  }
  return updateLesson
}

export default useUpdateLesson
