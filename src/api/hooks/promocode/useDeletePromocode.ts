import appQuery from "api/appQuery"
import { APIActions } from "api/data"
import { invalidateActionQuery } from "api/helpers"
import { toast } from "react-toastify"

function useDeletePromocode() {
  async function deletePlan(id: string) {
    await appQuery(APIActions.deletePromoId(id))

    invalidateActionQuery(APIActions.getPromo())
    invalidateActionQuery(APIActions.getPromoId(id))

    toast.success(`Promocode has been DELETED.`)
  }
  return deletePlan
}

export default useDeletePromocode
