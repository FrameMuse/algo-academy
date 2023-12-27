import { APIActions } from "api/data"
import useAppQuery from "api/useAppQuery"
import { USER_GUEST } from "store/reducers/user"
import { User, UserType } from "store/reducers/user/types"
import useObservableLocalStorage from "utils/hooks/useObservableLocalStorage"

function useUser(): User | undefined {
  return {
    ...USER_GUEST,
    type: UserType.Admin,
    signed: true
  }
  const [userToken, setUserToken] = useObservableLocalStorage<string>("user-token")

  const { data } = useAppQuery(APIActions.getUsersMe(), {
    enabled: !!userToken,
    onError: () => setUserToken(undefined)
  })


  if (userToken == null) return undefined
  if (data?.payload == null) return undefined

  // return APIMappings.mapUser(data.payload)
}

export default useUser
