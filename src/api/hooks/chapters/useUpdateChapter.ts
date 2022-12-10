import appQuery from "api/appQuery"
import { APIActions } from "api/data"
import { isResponseOk, refetchActionQueries } from "api/helpers"
import { toast } from "react-toastify"

function useUpdateChapter() {
  async function updateChapter(id: string, chapter: {
    title?: string
    order?: number
    showInProfile?: boolean
  }) {
    const response = await appQuery(APIActions.patchChaptersId(id, {
      name: chapter.title,
      order_number: chapter.order,
      user_topic: chapter.showInProfile
    }))
    if (!isResponseOk(response)) return

    toast.success(`Chapter ${chapter.title} has been updated.`)

    refetchActionQueries(APIActions.getChaptersId(id))
  }
  return updateChapter
}

export default useUpdateChapter
