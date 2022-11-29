import useLesson from "api/hooks/lessons/useLesson"
import ErrorCover from "app/ui/synthetic/ErrorCover/ErrorCover"
import LoaderCover from "app/ui/synthetic/Loader/LoaderCover"

import { LessonType } from "../types"
import LessonArticleEdit from "./LessonArticleEdit"
import LessonProblemEdit from "./LessonProblemEdit"

interface LessonContentEditProps {
  id: string
}

function LessonContentEdit(props: LessonContentEditProps) {
  const { lesson, isLoading } = useLesson(props.id)

  if (isLoading) {
    return <LoaderCover />
  }

  if (lesson == null) {
    return <ErrorCover>Lesson is null.</ErrorCover>
  }


  if (lesson.type === LessonType.Learning) {
    return <LessonArticleEdit id={props.id} />
  }

  if (lesson.type === LessonType.Practice) {
    return <LessonProblemEdit id={props.id} />
  }

  throw new Error("Unknown Lesson Type.")
}

export default LessonContentEdit
