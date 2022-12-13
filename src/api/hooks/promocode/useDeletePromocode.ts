import appQuery from "api/appQuery"
import { APIActions } from "api/data"
import { refetchActionQueries } from "api/helpers"
import { toast } from "react-toastify"

function useDeletePromocode() {
  async function deletePlan(id: string) {
    await appQuery(APIActions.deletePromoId(id))

    refetchActionQueries(APIActions.getPromo())
    refetchActionQueries(APIActions.getPromoId(id))

    toast.success(`Promocode has been DELETED.`)
  }
  return deletePlan
}

export default useDeletePromocode
