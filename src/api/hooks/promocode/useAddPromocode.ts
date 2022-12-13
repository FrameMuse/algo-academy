import appQuery from "api/appQuery"
import { APIActions } from "api/data"
import { refetchActionQueries } from "api/helpers"
import { APIMappings } from "api/mappings"
import { toast } from "react-toastify"

function useAddPromocode() {
  async function addPromocode(name: string, discountPercentage: number) {
    const response = await appQuery(APIActions.postPromo({
      name,
      discount_percent: discountPercentage
    }))

    refetchActionQueries(APIActions.getPromo())

    toast.success(`Promocode has been added.`)

    return APIMappings.mapPromocode(response.payload)
  }
  return addPromocode
}

export default useAddPromocode
