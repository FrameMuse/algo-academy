import appQuery from "api/appQuery"
import { APIActions } from "api/data"
import { isResponseOk } from "api/helpers"
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
      type: APIMappings.lessonType.mapBackward(lesson.type)
      // order_number: lesson.order,
    }))
    if (!isResponseOk(response)) return

    toast.success(`Chapter ${lesson.title} was added.`)

    return APIMappings.mapLesson(response.payload)
  }
  return addLesson
}

export default useAddLesson
