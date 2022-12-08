import useLessonNavigator from "api/hooks/lessons/useLessonNavigator"
import { useNavigate, useResolvedPath } from "react-router-dom"

/**
 * 
 * @param id - lesson id.
 * @param chapterId - chapter id which has this lesson.
 * @param basePath
 * - will navigate starting with this path.
 * - (uses `useResolvedPath` with `relative path`).
 * - this field supposed to look like this `"../../"`.
 * 
 * @returns methods that will navigate to a related lesson.
 */
function useLessonNavigate(id: string, chapterId: string | null | undefined, basePath = "") {
  if (chapterId == null) {
    throw new Error("This lesson can't be navigated.")
  }

  const navigate = useNavigate()
  const { getPrevId, getNextId } = useLessonNavigator(id, chapterId)
  const { pathname: basePathResolved } = useResolvedPath(basePath, { relative: "path" })


  function goTo(newId: string) {
    if (newId === id) return // Skip if trying to go to the same lesson.

    const path = basePathResolved + newId
    navigate(path)
  }


  function navigateToPrev() { goTo(getPrevId()) }
  function navigateToNext() { goTo(getNextId()) }

  return { navigateToPrev, navigateToNext }
}

export default useLessonNavigate
