import { APIActions } from "api/data"
import { APIMappings } from "api/mappings"
import useAppQuery from "api/useAppQuery"
import { Purchase } from "app/areas/purchase/types"

function useUserPurcaseHistory(): Purchase[] | undefined {
  const { data } = useAppQuery(APIActions.getUsersMe())

  if (data?.payload == null) return undefined

  return data.payload.history.map(APIMappings.mapPurchase)
}

export default useUserPurcaseHistory
