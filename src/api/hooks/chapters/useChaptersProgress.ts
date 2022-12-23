import { APIActions } from "api/data"
import { APIMappings } from "api/mappings"
import useAppQuery from "api/useAppQuery"
import useObservableLocalStorage from "utils/hooks/useObservableLocalStorage"


function useChaptersProgress() {
  const [userToken, setUserToken] = useObservableLocalStorage<string | null>("user-token")

  const { data } = useAppQuery(APIActions.getUsersMe(), {
    enabled: !!userToken,
    onError: () => setUserToken(null)
  })

  if (userToken == null) return []
  if (data?.payload == null) return []

  const chaptersProgress = data.payload.progress.map(APIMappings.mapChaptersProgress)
  return chaptersProgress
}

export default useChaptersProgress
