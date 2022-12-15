import appQuery from "api/appQuery"
import { APIActions } from "api/data"
import { isResponseOk, refetchActionQueries } from "api/helpers"
import { APIMappings } from "api/mappings"
import { LessonType } from "app/areas/lesson/types"
import { toast } from "react-toastify"

function useAddLesson() {
  async function addLesson(lesson: {
    title: string
    type: LessonType
  }) {
    const response = await appQuery(APIActions.postLessons({
      name: lesson.title,
      type: APIMappings.lessonType.backward(lesson.type)
    }))
    if (!isResponseOk(response)) return

    toast.success(`Lesson ${lesson.title} was added.`)

    refetchActionQueries(APIActions.getLessons())

    return APIMappings.mapLesson(response.payload)
  }
  return addLesson
}

export default useAddLesson
