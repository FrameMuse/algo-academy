import useChapter from "../chapters/useChapter"

/**
 * @returns methods that return id of the prev or next lesson in the chapter.
 */
function useLessonNavigator(id: string, chapterId: string) {
  const chapter = useChapter(chapterId)

  const currentLessonIndex = chapter.lessons.findIndex(lesson => lesson.id === id)

  /**
   * @returns same lesson id if can't find lesson at the index.
   */
  function getIdByIndex(index: number): string {
    const lesson = chapter.lessons[index]
    if (lesson == null) return id

    return lesson.id
  }


  function getPrevId(): string {
    return getIdByIndex(currentLessonIndex - 1)
  }
  function getNextId(): string {
    return getIdByIndex(currentLessonIndex + 1)
  }

  return { getPrevId, getNextId }
}

export default useLessonNavigator
