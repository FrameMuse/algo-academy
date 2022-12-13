import { APIActions } from "api/data"
import { APIMappings } from "api/mappings"
import useAppQuery from "api/useAppQuery"

function usePromocodes() {
  const { data } = useAppQuery(APIActions.getPromo())

  const promocodes = data.payload.map(APIMappings.mapPromocode)
  return promocodes
}

export default usePromocodes
