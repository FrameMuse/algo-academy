import { APIActions } from "api/data"
import { APIMappings } from "api/mappings"
import useAppQuery from "api/useAppQuery"

function usePlans() {
  const { data } = useAppQuery(APIActions.getSubscriptions())

  const plans = data.payload.map(APIMappings.mapPlan)
  return plans
}

export default usePlans
