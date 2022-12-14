
import useUpdateUser from "api/hooks/user/useUpdateUser"
import useUpdateUserAvatar from "api/hooks/user/useUpdateUserAvatar"
import { FormState } from "app/ui/kit/Form/Form"
import { useAppDispatch, useAppSelector } from "store/hooks"
import { updateUser } from "store/reducers/user"

import GeneralInfo from "../components/GeneralInfo/GeneralInfo"

enum FormInputs {
  userName = "display_name",
  firstName = "first_name",
  lastName = "last_name",
  email = "email"
}

interface UserGeneralInfoProps { }

function UserGeneralInfo(props: UserGeneralInfoProps) {
  const updateMyUser = useUpdateUser()
  const updateMyUserAvatar = useUpdateUserAvatar()

  const user = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()

  async function onSubmit(state: FormState<FormInputs, string>) {
    const user = await updateMyUser(state.values)
    dispatch(updateUser(user))
  }

  async function onAvatarChange(file: File) {
    await updateMyUserAvatar(file)

    const avatar = URL.createObjectURL(file)
    dispatch(updateUser({ avatar }))
  }
  return (
    // Define key to update the component default values when user changes.
    <GeneralInfo user={user} inputNames={FormInputs} onSubmit={onSubmit} onAvatarChange={onAvatarChange} key={user.id} />
  )
}

export default UserGeneralInfo
