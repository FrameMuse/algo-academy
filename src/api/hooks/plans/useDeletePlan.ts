import appQuery from "api/appQuery"
import { APIActions } from "api/data"
import { invalidateActionQuery } from "api/helpers"
import { toast } from "react-toastify"

function useDeletePlan() {
  async function deletePlan(id: string) {
    await appQuery(APIActions.deleteSubscriptionsId(id))

    invalidateActionQuery(APIActions.getSubscriptions())
    invalidateActionQuery(APIActions.getSubscriptionsId(id))

    toast.success(`Plan has been DELETED.`)
  }
  return deletePlan
}

export default useDeletePlan
