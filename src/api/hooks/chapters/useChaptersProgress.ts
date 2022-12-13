import { APIActions } from "api/data"
import { APIMappings } from "api/mappings"
import useAppQuery from "api/useAppQuery"
import { useLocalStorage } from "react-use"


function useChaptersProgress() {
  const [userToken, setUserToken] = useLocalStorage<string | null>("user-token")

  const { data } = useAppQuery(APIActions.getUsersMe(), {
    enabled: !!userToken,
    onError: () => setUserToken(null)
  })

  if (!userToken) return []

  const chaptersProgress = data.payload.progress.map(APIMappings.mapChaptersProgress)
  return chaptersProgress
}

export default useChaptersProgress
