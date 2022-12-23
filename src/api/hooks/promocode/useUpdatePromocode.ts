import appQuery from "api/appQuery"
import { APIActions } from "api/data"
import { invalidateActionQuery } from "api/helpers"
import { toast } from "react-toastify"

function useUpdatePromocode() {
  async function updatePromocode(id: string, promocode: { name?: string, discountPercentage?: number }) {
    await appQuery(APIActions.patchPromoId(id, {
      name: promocode.name,
      discount_percent: promocode.discountPercentage
    }))

    invalidateActionQuery(APIActions.getPromo())
    invalidateActionQuery(APIActions.getPromoId(id))

    toast.success(`Promocode has been updated.`)
  }
  return updatePromocode
}

export default useUpdatePromocode
