import useUpdateLessonStatus from "api/hooks/lessons/useUpdateLessonStatus"
import Selector from "app/ui/kit/Selector/Selector"

import { LessonStatus } from "../types"

interface LessonStatusSelectorProps {
  /**
   * Id of a course.
   */
  id: string
  defaultStatus?: LessonStatus
  transparent?: boolean
}

function LessonStatusSelector(props: LessonStatusSelectorProps) {
  const updateStatus = useUpdateLessonStatus()

  function onChange(value: LessonStatus) {
    updateStatus(props.id, value)
  }

  return (
    <Selector transparent={props.transparent} defaultValue={props.defaultStatus} onChange={onChange}>
      <option value={LessonStatus.Incomplete}>Not completed</option>
      <option value={LessonStatus.Complete}>Completed</option>
    </Selector>
  )
}

export default LessonStatusSelector
