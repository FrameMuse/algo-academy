import appQuery from "api/appQuery"
import { APIActions } from "api/data"
import { toast } from "react-toastify"
import FileTransform from "utils/transform/file"

function useUpdateUserAvatar() {
  async function updateUserAvatar(avatar: File) {
    const formData = FileTransform.toFormData(avatar, "avatar")
    await appQuery(APIActions.patchUsersMeAvatar(formData))

    toast.success("Your avatar has beed updated.")
  }

  return updateUserAvatar
}

export default useUpdateUserAvatar
