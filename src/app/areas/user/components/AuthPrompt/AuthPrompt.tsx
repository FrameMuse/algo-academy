import "./AuthPrompt.scss"

import Icon, { IconName } from "app/ui/kit/Icon/Icon"
import OuterLink from "app/ui/kit/OuterLink/OuterLink"
import { ReactNode } from "react"
import { classWithModifiers } from "utils/common"

interface AuthPromptProps {
  githubLink: string
  googleLink: string
  facebookLink: string
}

function AuthPrompt(props: AuthPromptProps) {
  return (
    <div className="auth-prompt">
      <AuthPromptLink color="gray" iconName="github" to={props.githubLink}>Github Auth</AuthPromptLink>
      <AuthPromptLink color="red" iconName="google" to={props.googleLink}>Google Auth</AuthPromptLink>
      <AuthPromptLink color="blue" iconName="facebook" to={props.facebookLink}>Facebook Auth</AuthPromptLink>
    </div>
  )
}


interface AuthPromptLinkProps {
  to: string
  color: "gray" | "red" | "blue"
  iconName: IconName
  children: ReactNode
}

function AuthPromptLink(props: AuthPromptLinkProps) {
  return (
    <OuterLink className={classWithModifiers("auth-prompt-link", props.color)} noTarget to={props.to}>
      <Icon className="auth-prompt-link__icon" name={props.iconName} />
      <div className="auth-prompt-link__text">{props.children}</div>
    </OuterLink>
  )
}

export default AuthPrompt
