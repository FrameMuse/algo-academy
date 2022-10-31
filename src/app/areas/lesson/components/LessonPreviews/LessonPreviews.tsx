import "./LessonPreviews.scss"

import { ReactNode } from "react"

interface LessonPreviewsProps {
  title: string
  children: ReactNode
}

/**
 * A group of lessons.
 * 
 * @param title - A group name.
 * @param children - A list of [`LessonPreview`](../LessonPreview/LessonPreview.tsx).
 */
function LessonPreviews(props: LessonPreviewsProps) {
  return (
    <div className="lesson-previews">
      <div className="lesson-previews__title">{props.title}</div>
      <div className="lesson-previews__container">{props.children}</div>
    </div>
  )
}

export default LessonPreviews
