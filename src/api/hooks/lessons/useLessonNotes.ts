import { APIActions } from "api/data"
import useAppQuery from "api/useAppQuery"

function useLessonNotes(id: string) {
  const { data } = useAppQuery(APIActions.getNotes(id))

  return data.payload.content
}

export default useLessonNotes
