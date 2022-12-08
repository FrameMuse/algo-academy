import { APIActions } from "api/data"
import { APIMappings } from "api/mappings"
import useAppQuery from "api/useAppQuery"

function useSnippet(id: string) {
  const { data } = useAppQuery(APIActions.getSnippetsId(id))

  const snippets = APIMappings.mapSnippet(data.payload)
  return snippets
}

export default useSnippet
