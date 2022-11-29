import { APIActions } from "api/data"
import { APIMappings } from "api/mappings"
import useAppQuery from "api/useAppQuery"

function useChapters() {
  const { data, isLoading } = useAppQuery(APIActions.getChapters())

  const chapters = data?.payload?.map(APIMappings.mapChapter).sort((a, b) => a.order - b.order)

  return { chapters, isLoading }
}

export default useChapters
