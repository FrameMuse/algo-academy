import { APIActions } from "api/data"
import { APIMappings } from "api/mappings"
import useAppQuery from "api/useAppQuery"
import { useLocalStorage } from "react-use"
import { User } from "store/reducers/user/types"

function useUser(): User | undefined {
  const [userToken, setUserToken] = useLocalStorage<string | null>("user-token")

  const { data } = useAppQuery(APIActions.getUsersMe(), {
    enabled: !!userToken,
    onError: () => setUserToken(null)
  })

  if (data?.payload == null) return undefined

  return APIMappings.mapUser(data.payload)
}

export default useUser
