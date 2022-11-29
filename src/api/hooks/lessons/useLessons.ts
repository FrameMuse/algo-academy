import { APIActions } from "api/data"
import { APIMappings } from "api/mappings"
import useAppQuery from "api/useAppQuery"

function useLessons() {
  const { data, isLoading } = useAppQuery(APIActions.getLessons())

  const lessons = data?.payload?.map(APIMappings.mapLesson)

  return { lessons, isLoading }
}

export default useLessons
