import { APIActions } from "api/data"
import { APIMappings } from "api/mappings"
import useAppQuery from "api/useAppQuery"
import { LessonType } from "app/areas/lesson/types"

function useLessonsUnused(filterByType?: LessonType) {
  const { data } = useAppQuery(APIActions.getLessonsUnused())

  const lessons = data.payload.map(APIMappings.mapLesson).filter(lesson => lesson.type === filterByType)

  return lessons
}

export default useLessonsUnused
