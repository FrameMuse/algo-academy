import GeneralInfo from "../components/GeneralInfo/GeneralInfo"

interface UserGeneralInfoProps { }

function UserGeneralInfo(props: UserGeneralInfoProps) {
  return (
    <GeneralInfo
      planTitle="Job Seeker"
      rankTitle="Algo Master"
      avatarImagePath={"/static/images/user.jpg"}
      firstName="John"
      lastName="Smith"
      userName="j.smith123"
      email="random_email123@gmail.com"
    />
  )
}

export default UserGeneralInfo
