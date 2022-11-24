import { APIActions } from "api/data"
import { APIMappings } from "api/mappings"
import useAppQuery from "api/useAppQuery"
import { User } from "store/reducers/user/types"

import useUserToken from "./useUserToken"

function useUser(): User | undefined {
  const userToken = useUserToken()
  const { data } = useAppQuery(APIActions.getUsersMe(), { enabled: !!userToken })

  if (data?.payload == null) return undefined

  return APIMappings.mapUser(data.payload)
}

export default useUser
