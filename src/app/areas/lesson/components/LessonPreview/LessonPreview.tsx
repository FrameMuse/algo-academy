import "./LessonPreview.scss"

import { StaticRoutes } from "app/AppRoutes"
import ButtonLink from "app/ui/kit/Button/ButtonLink"
import { ReactNode } from "react"
import { NavLink } from "react-router-dom"

import { LessonStatus } from "../../types"

interface LessonPreviewProps {
  id: string
  status: LessonStatus
  locked?: boolean
  lockedReason?: string
  title: ReactNode
}

function LessonPreview(props: LessonPreviewProps) {
  return (
    <div className="lesson-preview">
      {props.locked && (
        <div className="lesson-preview-locked">
          <p className="lesson-preview-locked__title">{props.lockedReason ?? "Locked"}</p>
          {/* <Icon name="cross" /> */}
          <NavLink className="ghost" to={StaticRoutes.Purchase} />
        </div>
      )}
      <div className="lesson-preview__info">
        <p className="lesson-preview__text">{props.title}</p>
      </div>
      <LessonPreviewButton {...props} />
    </div>
  )
}

function LessonPreviewButton(props: LessonPreviewProps) {
  const link = `${StaticRoutes.FullCourse}/lessons/${props.id}`

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
