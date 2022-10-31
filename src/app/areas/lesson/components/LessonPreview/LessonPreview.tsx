import "./LessonPreview.scss"

import ButtonLink from "app/ui/kit/Button/ButtonLink"
import { ReactNode } from "react"

import { LessonStatus } from "../../types"

interface LessonPreviewProps {
  id: number
  status: LessonStatus
  children: ReactNode
}

function LessonPreview(props: LessonPreviewProps) {
  return (
    <div className="lesson-preview">
      <div className="lesson-preview__info">
        <p className="lesson-preview__text">{props.children}</p>
      </div>
      <LessonPreviewButton id={props.id} status={props.status} />
    </div>
  )
}

function LessonPreviewButton(props: { id: number; status: LessonStatus }) {
  const link = `lesson/${props.id}`

  switch (props.status) {
    case LessonStatus.Complete:
      return (
        <ButtonLink color="green" iconRight="" to={link}>Completed</ButtonLink>
      )

    case LessonStatus.Incomplete:
      return (
        <ButtonLink color="white" to={link}>Start Now</ButtonLink>
      )

    case LessonStatus.NeedsReviews:
      return (
        <ButtonLink to={link} iconRight="">Needs Review</ButtonLink>
      )

    default:
      return (
        <ButtonLink color="dark" iconRight="" to={link}>Unknown</ButtonLink>
      )
  }
}

export default LessonPreview
