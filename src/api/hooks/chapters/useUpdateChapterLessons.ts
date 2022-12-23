import appQuery from "api/appQuery"
import { APIActions } from "api/data"
import { invalidateActionQuery, isResponseOk } from "api/helpers"
import { LessonType } from "app/areas/lesson/types"
import { toast } from "react-toastify"

function useUpdateChapterLessons() {
  async function updateChapterLessons(id: string, lessonType: LessonType, ids: string[]) {
    const response = await appQuery(APIActions.patchChaptersId(id, { list: ids }))
    if (!isResponseOk(response)) return

    invalidateActionQuery(APIActions.getChapters())
    invalidateActionQuery(APIActions.getChaptersId(id))
    invalidateActionQuery(APIActions.getLessonsUnused())

    toast.success(`Chapter ${LessonType[lessonType]} Lessons have been updated.`)
  }
  return updateChapterLessons
}

export default useUpdateChapterLessons
