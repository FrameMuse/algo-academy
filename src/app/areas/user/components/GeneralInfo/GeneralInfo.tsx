import "./GeneralInfo.scss"

import Box from "app/layouts/Box/Box"
import Row from "app/layouts/Row/Row"
import Field from "app/ui/kit/Field/Field"
import Icon from "app/ui/kit/Icon/Icon"
import EditableAvatar from "app/ui/synthetic/EditableAvatar/EditableAvatar"
import { User } from "store/reducers/user/types"

interface GeneralInfoProps extends User { }

function GeneralInfo(props: GeneralInfoProps) {
  return (
    <Box className="general-info">
      <h5>General Information</h5>
      {props.pricingPlan && (
        <div className="general-info__plan">Plan - {props.pricingPlan.name}</div>
      )}
      <div className="general-info__info">
        <div className="general-info__img">
          <EditableAvatar image={props.avatar} />
        </div>
        {props.level && (
          <div className="general-info__rank">
            <Icon name="crown" />
            <p>{props.level}</p>
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
