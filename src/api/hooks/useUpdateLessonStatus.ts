import appQuery from "api/appQuery"
import { APIActions } from "api/data"
import { isResponseOk } from "api/helpers"
import { APIMappings } from "api/mappings"
import { LessonStatus } from "app/areas/lesson/types"

/**
 * @returns a updater function, which will return true if request is successful and vice versa.
 */
function useUpdateLessonStatus(): (id: string, status: LessonStatus) => Promise<boolean> {
  async function updateStatus(id: string, status: LessonStatus) {
    const response = await appQuery(APIActions.patchLessonsId(id, { status: APIMappings.unmapLessonPreviewStatus(status) }))

    return isResponseOk(response)
  }

  return updateStatus
}

export default useUpdateLessonStatus
