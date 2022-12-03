import appQuery from "api/appQuery"
import queryClient from "api/client"
import { APIActions } from "api/data"
import { getActionQueryKey, isResponseOk } from "api/helpers"
import { LessonType } from "app/areas/lesson/types"
import { toast } from "react-toastify"

function useUpdateChapterLessons() {
  async function updateChapterLessons(id: string, lessonType: LessonType, ids: string[]) {
    const response = await appQuery(APIActions.patchChaptersId(id, { list: ids }))
    if (!isResponseOk(response)) return

    queryClient.refetchQueries([getActionQueryKey(APIActions.getChaptersId(id))])

    toast.success(`Chapter ${LessonType[lessonType]} Lessons have been updated.`)
  }
  return updateChapterLessons
}

export default useUpdateChapterLessons
