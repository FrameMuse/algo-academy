import appQuery from "api/appQuery"
import { APIActions } from "api/data"
import { toast } from "react-toastify"

const SUCCESSFUL_RESET_TEXT = "Your progress has beed reset. This is irreversible."

function useUserResetData() {
  async function resetData() {
    await appQuery(APIActions.postUsersRevokeAccessMe())

    toast.success(SUCCESSFUL_RESET_TEXT)
  }

  return resetData
}

export default useUserResetData
