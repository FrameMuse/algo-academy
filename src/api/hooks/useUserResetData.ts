import { APIActions } from "api/data"
import { isResponseOk } from "api/helpers"
import { appQuery } from "api/useAppQuery"
import { toast } from "react-toastify"

const SUCCESSFUL_RESET_TEXT = ""

function useUserResetData(): () => void {
  async function resetData() {
    const response = await appQuery(APIActions.postUsersRevokeAccessMe())
    if (!isResponseOk(response)) return

    toast.success(SUCCESSFUL_RESET_TEXT)
  }

  return resetData
}

export default useUserResetData
