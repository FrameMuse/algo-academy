import appQuery from "api/appQuery"
import { APIActions } from "api/data"

function useCreateCharge() {
  async function createCharge(id: string, promocode?: string) {
    const response = await appQuery(APIActions.postStripeCreateCharge({
      subscription_id: id,
      promo_name: promocode
    }))

    const url = response.payload.url
    return url
  }
  return createCharge
}

export default useCreateCharge
