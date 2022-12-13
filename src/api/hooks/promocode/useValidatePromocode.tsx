import appQuery from "api/appQuery"
import { APIActions } from "api/data"

function useValidatePromocode() {
  /**
   * @returns discount percentage - e.g. `25` (25%).
   */
  async function validatePromocode(code: string): Promise<number> {
    const response = await appQuery(APIActions.postPromoCheck({ name: code }))

    return response.payload.discount_percent
  }

  return validatePromocode
}

export default useValidatePromocode
