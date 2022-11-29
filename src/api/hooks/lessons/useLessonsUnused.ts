import { APIActions } from "api/data"
import { APIMappings } from "api/mappings"
import useAppQuery from "api/useAppQuery"

function useLessonsUnused() {
  const { data, isLoading } = useAppQuery(APIActions.getLessonsUnused())

  const lessons = data?.payload?.map(APIMappings.mapLesson)

  return { lessons, isLoading }
}

export default useLessonsUnused
