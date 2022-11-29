import appQuery from "api/appQuery"
import { APIActions } from "api/data"
import { isResponseOk } from "api/helpers"
import { APIMappings } from "api/mappings"
import { LessonStatus } from "app/areas/lesson/types"
import { toast } from "react-toastify"

/**
 * @returns a updater function, which will return true if request is successful and vice versa.
 */
function useUpdateLessonStatus(): (id: string, status: LessonStatus) => Promise<void> {
  async function getLesson(id: string) {
    const response = await appQuery(APIActions.getLessonsId(id))
    if (!isResponseOk(response)) return

    return APIMappings.mapLesson(response.payload)
  }

  async function getChapter(id: string) {
    const response = await appQuery(APIActions.getChaptersId(id))
    if (!isResponseOk(response)) return

    return APIMappings.mapChapter(response.payload)
  }

  async function updateStatus(id: string, status: LessonStatus) {
    const lesson = await getLesson(id)
    if (lesson == null) return

    const chapter = await getChapter(lesson.chapterRelationId)
    if (chapter == null) return

    const response = await appQuery(APIActions.patchUsersMeProgress({
      chapter_id: chapter.id,
      chapter_name: chapter.title,

      lesson_id: id,
      status: APIMappings.lessonStatus.mapBackward(status)
    }))
    if (!isResponseOk(response)) return

    toast.success("Lesson status updated.")
  }

  return updateStatus
}

export default useUpdateLessonStatus
