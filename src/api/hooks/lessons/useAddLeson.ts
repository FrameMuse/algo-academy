import appQuery from "api/appQuery"
import { APIActions } from "api/data"
import { isResponseOk } from "api/helpers"
import { APIMappings } from "api/mappings"
import { LessonType } from "app/areas/lesson/types"
import { toast } from "react-toastify"

function useAddLeson() {
  async function addLeson(lesson: {
    title: string
    type: LessonType
  }) {
    const response = await appQuery(APIActions.postLessons({
      name: lesson.title,
      type: APIMappings.unmapLessonType(lesson.type)
      // order_number: lesson.order,
    }))
    if (!isResponseOk(response)) return

    toast.success(`Chapter ${lesson.title} was added.`)

    return APIMappings.mapLesson(response.payload)
  }
  return addLeson
}

export default useAddLeson
