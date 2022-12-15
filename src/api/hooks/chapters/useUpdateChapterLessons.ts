import appQuery from "api/appQuery"
import { APIActions } from "api/data"
import { isResponseOk, refetchActionQueries } from "api/helpers"
import { LessonType } from "app/areas/lesson/types"
import { toast } from "react-toastify"

function useUpdateChapterLessons() {
  async function updateChapterLessons(id: string, lessonType: LessonType, ids: string[]) {
    const response = await appQuery(APIActions.patchChaptersId(id, { list: ids }))
    if (!isResponseOk(response)) return

    refetchActionQueries(APIActions.getChapters())
    refetchActionQueries(APIActions.getChaptersId(id))
    refetchActionQueries(APIActions.getLessonsUnused())

    toast.success(`Chapter ${LessonType[lessonType]} Lessons have been updated.`)
  }
  return updateChapterLessons
}

export default useUpdateChapterLessons
