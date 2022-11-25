import { APIActions } from "api/data"
import useAppQuery from "api/useAppQuery"

function useCurriculum() {
  const { data } = useAppQuery(APIActions.getCurriculums())

  if (data?.payload == null) return undefined

  return data.payload
}

export default useCurriculum
