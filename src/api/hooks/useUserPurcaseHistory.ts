import { APIActions } from "api/data"
import { APIMappings } from "api/mappings"
import useAppQuery from "api/useAppQuery"
import { PricingPlan } from "app/areas/purchase/types"

function useUserPurcaseHistory(): PricingPlan[] | undefined {
  const { data } = useAppQuery(APIActions.getUsersMe())

  if (data?.payload == null) return undefined

  return data.payload.history.map(APIMappings.mapPricingPlan)
}

export default useUserPurcaseHistory
