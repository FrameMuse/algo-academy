import { APIActions } from "api/data"
import { APIMappings } from "api/mappings"
import useAppQuery from "api/useAppQuery"

function usePlan(id: string) {
  const { data } = useAppQuery(APIActions.getSubscriptionsId(id))

  const plan = APIMappings.mapPlan(data.payload)
  return plan
}

export default usePlan
