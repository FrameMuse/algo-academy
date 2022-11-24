import "./GeneralInfo.scss"

import Box from "app/layouts/Box/Box"
import Row from "app/layouts/Row/Row"
import Field from "app/ui/kit/Field/Field"
import Form, { FormState } from "app/ui/kit/Form/Form"
import Icon from "app/ui/kit/Icon/Icon"
import EditableAvatar from "app/ui/synthetic/EditableAvatar/EditableAvatar"
import { FormEvent } from "react"
import { User } from "store/reducers/user/types"

type InputName = "userName" | "firstName" | "lastName" | "email"

interface GeneralInfoProps {
  user: User

  inputNames?: Record<InputName, string>
  onSubmit?(state: FormState<InputName, string>, event: FormEvent<HTMLFormElement>): void

  onAvatarChange?(file: File): void | Promise<unknown>
}

function GeneralInfo(props: GeneralInfoProps) {
  return (
    <Box className="general-info">
      <h5>General Information</h5>
      {props.user.pricingPlan && (
        <div className="general-info__plan">Plan - {props.user.pricingPlan.name}</div>
      )}
      <div className="general-info__info">
        <div className="general-info__img">
          <EditableAvatar image={props.user.avatar} onChange={props.onAvatarChange} />
        </div>
        {!!props.user.level && (
          <div className="general-info__rank">
            <Icon name="crown" />
            <p>{props.user.level}</p>
          </div>
        )}
      </div>

      <Form className="general-info__inputs" onSubmit={props.onSubmit}>
        <Row>
          <Field required autoComplete="given-name" defaultValue={props.user.firstName} name={props.inputNames?.firstName}>First Name</Field>
          <Field required autoComplete="family-name" defaultValue={props.user.lastName} name={props.inputNames?.lastName}>Last Name</Field>
        </Row>
        <Field required type="email" defaultValue={props.user.email} name={props.inputNames?.email}>Current Email</Field>
        <Field required autoComplete="nickname" defaultValue={props.user.userName} name={props.inputNames?.userName}>User Name</Field>
      </Form>
    </Box>
  )
}

export default GeneralInfo
