import "./GeneralInfo.scss"

import Box from "app/layouts/Box/Box"
import Row from "app/layouts/Row/Row"
import Field from "app/ui/kit/Field/Field"
import Icon from "app/ui/kit/Icon/Icon"
import EditableAvatar from "app/ui/synthetic/EditableAvatar/EditableAvatar"
import { ReactNode } from "react"

interface GeneralInfoProps {
  planTitle: ReactNode
  rankTitle?: ReactNode

  avatarImagePath: string

  firstName: string
  lastName: string
  userName: string
  email: string
}

function GeneralInfo(props: GeneralInfoProps) {
  return (
    <Box className="general-info">
      <h5>General Information</h5>
      <div className="general-info__plan">Plan - {props.planTitle}</div>
      <div className="general-info__info">
        <div className="general-info__img">
          <EditableAvatar image={props.avatarImagePath} />
        </div>
        {props.rankTitle && (
          <div className="general-info__rank">
            <Icon name="crown" />
            <p>{props.rankTitle}</p>
          </div>
        )}
      </div>

      <div className="general-info__inputs">
        <Row>
          <Field required defaultValue={props.firstName}>First Name</Field>
          <Field required defaultValue={props.lastName}>Last Name</Field>
        </Row>
        <Field type="email" required defaultValue={props.email}>Current Email</Field>
        <Field required defaultValue={props.userName}>User Name</Field>
      </div>
    </Box>
  )
}

export default GeneralInfo
