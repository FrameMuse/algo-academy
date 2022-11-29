import { APIActions } from "api/data"
import { APIMappings } from "api/mappings"
import useAppQuery from "api/useAppQuery"

function useChaptersProgress() {
  const { data, isLoading } = useAppQuery(APIActions.getUsersMe())

  const chaptersProgress = data?.payload?.progress.map(APIMappings.mapChapterProgress)

  return { chaptersProgress, isLoading }
}

export default useChaptersProgress
