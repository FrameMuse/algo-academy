import { useAppSelector } from "store/hooks"

import GeneralInfo from "../components/GeneralInfo/GeneralInfo"

interface UserGeneralInfoProps { }

function UserGeneralInfo(props: UserGeneralInfoProps) {
  const user = useAppSelector(state => state.user)

  return (
    <GeneralInfo
      {...user}
    // planTitle={user.pricingPlan?.name}
    // rankTitle="Algo Master"
    // avatarImagePath={"/static/images/user.jpg"}
    // firstName="John"
    // lastName="Smith"
    // userName="j.smith123"
    // email="random_email123@gmail.com"
    />
  )
}

export default UserGeneralInfo
