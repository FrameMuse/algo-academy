import appQuery from "api/appQuery"
import { APIActions, APISchemas } from "api/data"
import { APIMappings } from "api/mappings"
import { toast } from "react-toastify"

function useUpdateUser() {
  async function updateUser(partialUser: Partial<APISchemas.User>) {
    const response = await appQuery(APIActions.patchUsersMe(partialUser))

    toast.success("Your data has beed updated.")

    const user = APIMappings.mapUser(response.payload)
    return user
  }

  return updateUser
}

export default useUpdateUser
