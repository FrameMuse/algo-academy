import appQuery from "api/appQuery"
import { APIActions } from "api/data"
import { invalidateActionQuery, isResponseOk } from "api/helpers"
import { APIMappings } from "api/mappings"
import { toast } from "react-toastify"

function useAddChapter() {
  async function addChapter(chapter: {
    title: string
    order: number
    showInProfile: boolean
  }) {
    const response = await appQuery(APIActions.postChapters({
      name: chapter.title,
      order_number: chapter.order,
      user_topic: chapter.showInProfile
    }))
    if (!isResponseOk(response)) return

    toast.success(`Chapter ${chapter.title} was added.`)

    invalidateActionQuery(APIActions.getChapters())

    return APIMappings.mapChapter(response.payload)
  }
  return addChapter
}

export default useAddChapter
