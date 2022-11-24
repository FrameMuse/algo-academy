import appQuery from "api/appQuery"
import { APIActions } from "api/data"
import { isResponseOk } from "api/helpers"
import { APIMappings } from "api/mappings"
import { FormState } from "app/ui/kit/Form/Form"
import { useAppDispatch, useAppSelector } from "store/hooks"
import { updateUser } from "store/reducers/user"
import FileTransform from "utils/transform/file"

import GeneralInfo from "../components/GeneralInfo/GeneralInfo"

enum FormInputs {
  userName = "user_name",
  firstName = "first_name",
  lastName = "last_name",
  email = "email"
}

interface UserGeneralInfoProps { }

function UserGeneralInfo(props: UserGeneralInfoProps) {
  const user = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()

  async function onSubmit(state: FormState<FormInputs, string>) {
    const response = await appQuery(APIActions.patchUsersMe(state.values))
    if (!isResponseOk(response)) return

    const user = APIMappings.mapUser(response.payload)
    dispatch(updateUser(user))
  }

  async function onAvatarChange(file: File) {
    const avatar = await FileTransform.toURLData(file)
    const response = await appQuery(APIActions.patchUsersMeAvatar({ avatar }))
  }
  return (
    <GeneralInfo user={user} inputNames={FormInputs} onSubmit={onSubmit} onAvatarChange={onAvatarChange} />
  )
}

export default UserGeneralInfo
