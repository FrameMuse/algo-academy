import appQuery from "api/appQuery"
import { APIActions } from "api/data"
import { APIMappings } from "api/mappings"
import { toast } from "react-toastify"
import { User } from "store/reducers/user/types"

function useUpdateUser() {
  async function updateUser(userInfo: Partial<User>) {
    const response = await appQuery(APIActions.patchUsersMe({
      first_name: userInfo.firstName,
      last_name: userInfo.lastName,
      display_name: userInfo.userName,
      email: userInfo.email
    }))

    toast.success("Your data has beed updated.")

    const user = APIMappings.mapUser(response.payload)
    return user
  }

  return updateUser
}

export default useUpdateUser
