import { APIActions } from "api/data"
import useAppQuery from "api/useAppQuery"

function useFeedbacks() {
  const { data, isLoading } = useAppQuery(APIActions.getFeedbacks())

  const feedbacks = data?.payload

  return { feedbacks, isLoading }
}

export default useFeedbacks
