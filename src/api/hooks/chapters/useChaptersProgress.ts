import { APIActions } from "api/data"
import { APIMappings } from "api/mappings"
import useAppQuery from "api/useAppQuery"

function useChaptersProgress() {
  const { data } = useAppQuery(APIActions.getUsersMe())

  const chaptersProgress = data.payload.progress.map(APIMappings.mapChaptersProgress)

  return chaptersProgress
}

export default useChaptersProgress
