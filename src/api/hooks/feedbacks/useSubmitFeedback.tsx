import appQuery from "api/appQuery"
import queryClient from "api/client"
import { APIActions } from "api/data"
import { isResponseOk } from "api/helpers"
import { toast } from "react-toastify"

function useSubmitFeedback() {
  async function submitFeedback(feedback: {
    title: string
    content: string
  }) {
    const response = await appQuery(APIActions.postFeedbacks(feedback))
    if (!isResponseOk(response)) return

    queryClient.refetchQueries([APIActions.getFeedbacks()])

    toast.success(`Feedback has been submited.`)
  }
  return submitFeedback
}

export default useSubmitFeedback
