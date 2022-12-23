import { APIActions } from "api/data"
import { APIMappings } from "api/mappings"
import useAppQuery from "api/useAppQuery"
import { User } from "store/reducers/user/types"
import useObservableLocalStorage from "utils/hooks/useObservableLocalStorage"

function useUser(): User | undefined {
  const [userToken, setUserToken] = useObservableLocalStorage<string>("user-token")

  const { data } = useAppQuery(APIActions.getUsersMe(), {
    enabled: !!userToken,
    onError: () => setUserToken(undefined)
  })

  if (userToken == null) return undefined
  if (data?.payload == null) return undefined

  return APIMappings.mapUser(data.payload)
}

export default useUser
