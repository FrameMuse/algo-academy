import appQuery from "api/appQuery"
import { APIActions } from "api/data"
import { invalidateActionQuery } from "api/helpers"
import { APIMappings } from "api/mappings"
import { Plan } from "app/areas/purchase/types"
import { toast } from "react-toastify"

function useAddPlan() {
  async function addPlan(plan: Omit<Plan, "id">) {
    const response = await appQuery(APIActions.postSubscriptions({
      title: plan.title,
      subtitle: plan.description,
      cost: plan.cost,
      period: APIMappings.mapPlanDurationBackward(plan.durationMonths),
      descriptions: plan.benefits,
      most_popular: plan.mostPopular
    }))

    invalidateActionQuery(APIActions.getSubscriptions())

    toast.success(`Plan has been added.`)

    return APIMappings.mapPlan(response.payload)
  }
  return addPlan
}

export default useAddPlan
