import useUpdateLessonStatus from "api/hooks/useUpdateLessonStatus"
import Selector from "app/ui/kit/Selector/Selector"

import { LessonStatus } from "../types"

interface LessonStatusSelectorProps {
  /**
   * Id of a course.
   */
  id: string
}

function LessonStatusSelector(props: LessonStatusSelectorProps) {
  const updateStatus = useUpdateLessonStatus()

  function onChange(value: LessonStatus) {
    updateStatus(props.id, value)
  }

  return (
    <Selector defaultValue={LessonStatus.Incomplete} onChange={onChange}>
      <option value={LessonStatus.Incomplete}>Not completed</option>
      <option value={LessonStatus.Complete}>Completed</option>
    </Selector>
  )
}

export default LessonStatusSelector
