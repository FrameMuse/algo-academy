import appQuery from "api/appQuery"
import { APIActions } from "api/data"
import { refetchActionQueries } from "api/helpers"
import { APIMappings } from "api/mappings"
import { Plan } from "app/areas/purchase/types"
import { toast } from "react-toastify"

function useUpdatePlan() {
  async function updatePlan(id: string, plan: Partial<Plan>) {
    await appQuery(APIActions.patchSubscriptionsId(id, {
      title: plan.title,
      subtitle: plan.description,
      cost: plan.cost,
      period: plan.durationMonths ? APIMappings.mapPlanDurationBackward(plan.durationMonths) : undefined,
      descriptions: plan.benefits,
      most_popular: plan.mostPopular
    }))

    refetchActionQueries(APIActions.getSubscriptions())
    refetchActionQueries(APIActions.getSubscriptionsId(id))

    toast.success(`Plan has been updated.`)
  }
  return updatePlan
}

export default useUpdatePlan
