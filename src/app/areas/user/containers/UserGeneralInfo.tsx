import appQuery from "api/appQuery"
import { APIActions } from "api/data"
import { FormState } from "app/ui/kit/Form/Form"
import { useAppSelector } from "store/hooks"
import FileTransform from "utils/transform/file"

import GeneralInfo from "../components/GeneralInfo/GeneralInfo"

enum FormInputs {
  userName = "user-name",
  firstName = "first-name",
  lastName = "last-name",
  email = "email"
}

interface UserGeneralInfoProps { }

function UserGeneralInfo(props: UserGeneralInfoProps) {
  const user = useAppSelector(state => state.user)
  function onSubmit(state: FormState<FormInputs, string>) {
    // state.
  }

  async function onAvatarChange(file: File) {
    const avatar = await FileTransform.toURLData(file)
    const response = await appQuery(APIActions.patchUsersMeAvatar({ avatar }))
  }
  return (
    <GeneralInfo user={user} onAvatarChange={onAvatarChange} />
  )
}

export default UserGeneralInfo
