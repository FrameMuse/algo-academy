import { APIActions } from "api/data"
import useAppQuery from "api/useAppQuery"

function useFeedbacks() {
  const { data } = useAppQuery(APIActions.getFeedbacks())

  const feedbacks = data.payload

  return feedbacks
}

export default useFeedbacks
