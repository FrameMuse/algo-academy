import { APIActions } from "api/data"
import { APIMappings } from "api/mappings"
import useAppQuery from "api/useAppQuery"

function usePromocode(id: string) {
  const { data } = useAppQuery(APIActions.getPromoId(id))

  const promocode = APIMappings.mapPromocode(data.payload)
  return promocode
}

export default usePromocode
