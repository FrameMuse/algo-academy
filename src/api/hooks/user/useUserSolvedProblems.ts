import { APIActions } from "api/data"
import useAppQuery from "api/useAppQuery"

function useUserSolvedProblems() {
  const { data } = useAppQuery(APIActions.getUsersMe())

  if (data?.payload == null) return undefined

  return data.payload.progress
}

export default useUserSolvedProblems
