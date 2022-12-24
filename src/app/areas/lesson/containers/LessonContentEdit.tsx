import useLesson from "api/hooks/lessons/useLesson"

import { LessonType } from "../types"
import LessonArticleEdit from "./LessonArticleEdit"
import LessonProblemEdit from "./LessonProblemEdit"

interface LessonContentEditProps {
  id: string
}

function LessonContentEdit(props: LessonContentEditProps) {
  const lesson = useLesson(props.id, true)


  if (lesson.type === LessonType.Learning) {
    return <LessonArticleEdit id={props.id} />
  }

  if (lesson.type === LessonType.Practice) {
    return <LessonProblemEdit id={props.id} />
  }

  throw new Error("Unknown Lesson Type.")
}

export default LessonContentEdit
