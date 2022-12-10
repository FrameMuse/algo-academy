import { APIActions } from "api/data"
import { refetchActionQueries } from "api/helpers"
import { LessonType } from "app/areas/lesson/types"
import { toast } from "react-toastify"

function useCreateCharge() {
  async function createCharge(id: string, lessonType: LessonType, ids: string[]) {
    // const response = await appQuery(APIActions.postStripeCreateCharge(id, { list: ids }))
    // if (!isResponseOk(response)) return

    refetchActionQueries(APIActions.getChaptersId(id))

    toast.success(`Chapter ${LessonType[lessonType]} Lessons have been updated.`)
  }
  return createCharge
}

export default useCreateCharge
