import "./LessonView.scss"

import useLesson from "api/hooks/lessons/useLesson"
import { formatAppTitle } from "app/App"
import { LessonStatusSelector } from "app/areas/lesson"
import { LessonType } from "app/areas/lesson/types"
import ArticleMarkdown from "app/ui/kit/Article/ArticleMarkdown"
import ButtonIcon from "app/ui/kit/Button/ButtonIcon"
import ButtonLink from "app/ui/kit/Button/ButtonLink"
import ErrorCover from "app/ui/synthetic/ErrorCover/ErrorCover"
import LoaderCover from "app/ui/synthetic/Loader/LoaderCover"
import { Helmet } from "react-helmet"
import { Navigate } from "react-router-dom"
import useParam from "utils/hooks/useParam"

function LessonView() {
  window.scrollTo(0, 0)

  const lessonId = useParam("lessonId")
  const { lesson, isLoading } = useLesson(lessonId)

  if (isLoading) {
    return <LoaderCover />
  }

  if (lesson == null) {
    return <ErrorCover>Chapter is null.</ErrorCover>
  }

  if (lesson.type === LessonType.Practice) {
    return <Navigate replace to="problem" />
  }

  return (
    <div className="wrapper">
      <Helmet>
        <title>{formatAppTitle(lesson.title, "Lesson")}</title>
      </Helmet>
      <section className="article-section">
        <div className="article-top">
          <div>
            <ButtonLink color="white" size="small" squared iconLeft="arrow-left" iconRight="" to="..">Back to Course</ButtonLink>
          </div>
          <div className="article-nav">
            <ButtonIcon name="chevron-left" color="gray" size="smaller" squared ariaLabel="Previous lesson" />
            <div className="article-nav-chapter">{lesson.title}</div>
            <ButtonIcon name="chevron-right" color="gray" size="smaller" squared ariaLabel="Next lesson" />
          </div>
          <div className="article-status">
            <LessonStatusSelector id={lessonId} defaultStatus={lesson.status} />
          </div>
        </div>

        {/* <h3 className="article-title">{lesson.title}</h3> */}
        <ArticleMarkdown content={lesson.content} />
      </section>
    </div>
  )
}

export default LessonView
