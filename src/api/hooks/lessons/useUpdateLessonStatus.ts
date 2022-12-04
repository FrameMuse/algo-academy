import appQuery from "api/appQuery"
import { APIActions } from "api/data"
import { isResponseOk } from "api/helpers"
import { APIMappings } from "api/mappings"
import { LessonStatus } from "app/areas/lesson/types"
import { toast } from "react-toastify"

/**
 * @returns a updater function, which will return true if request is successful and vice versa.
 */
function useUpdateLessonStatus(): (id: string, status: LessonStatus) => Promise<boolean> {
  async function getLesson(id: string) {
    const response = await appQuery(APIActions.getLessonsId(id))
    if (!isResponseOk(response)) return

    return APIMappings.mapLesson(response.payload)
  }

  async function updateStatus(id: string, status: LessonStatus) {
    const lesson = await getLesson(id)
    if (lesson == null) return false
    if (lesson.chapterRelation == null) return false

    const response = await appQuery(APIActions.patchUsersMeProgress({
      chapter_id: lesson.chapterRelation.id,

      lesson_id: id,
      status: APIMappings.lessonStatus.backward(status)
    }))
    if (!isResponseOk(response)) return false

    toast.success("Lesson status has been updated.")

    return true
  }

  return updateStatus
}

export default useUpdateLessonStatus
