import appQuery from "api/appQuery"
import { APIActions } from "api/data"

function useUpdateLessonNotes() {
  async function updateLessonNotes(id: string, content: string) {
    await appQuery(APIActions.patchNotesLessonId(id, { content }))

    // toast.success("Notes has beed updated.")
  }

  return updateLessonNotes
}

export default useUpdateLessonNotes
