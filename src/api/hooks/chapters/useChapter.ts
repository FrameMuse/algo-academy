import { APIActions } from "api/data"
import { APIMappings } from "api/mappings"
import useAppQuery from "api/useAppQuery"

function useChapter(id: string) {
  const { data, isLoading } = useAppQuery(APIActions.getChaptersId(id))

  const chapter = data?.payload && APIMappings.mapChapter(data.payload)

  return { chapter, isLoading }
}

export default useChapter
