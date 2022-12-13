import appQuery from "api/appQuery"
import { APIActions } from "api/data"
import { isResponseOk, refetchActionQueries } from "api/helpers"
import { APIMappings } from "api/mappings"
import { LessonType } from "app/areas/lesson/types"
import { toast } from "react-toastify"

function useUpdateLesson() {
  async function updateLesson(id: string, lesson: {
    title?: string
    type?: LessonType
    free?: boolean

    content?: string
    statement?: string
    hints?: string
  }) {
    const response = await appQuery(APIActions.patchLessonsId(id, {
      type: lesson.type ? APIMappings.lessonType.backward(lesson.type) : undefined,
      name: lesson.title,
      free: lesson.free,
      content: lesson.content,
      statement: lesson.statement,
      hints: lesson.hints
    }))
    if (!isResponseOk(response)) return

    refetchActionQueries(APIActions.getLessonsId(id))

    toast.success(`Lesson has been updated.`)
  }
  return updateLesson
}

export default useUpdateLesson
