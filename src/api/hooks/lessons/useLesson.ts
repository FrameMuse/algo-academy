import { APIActions } from "api/data"
import { APIMappings } from "api/mappings"
import useAppQuery from "api/useAppQuery"

function useLesson(id: string) {
  const { data, isLoading } = useAppQuery(APIActions.getLessonsId(id))

  const lesson = data?.payload && APIMappings.mapLesson(data.payload)

  return { lesson, isLoading }
}

export default useLesson
