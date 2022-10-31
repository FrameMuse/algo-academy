import Selector from "app/ui/kit/Selector/Selector"

import { LessonStatus } from "../types"

interface LessonStatusSelectorProps {
  /**
   * Id of a course.
   */
  id: number
}

function LessonStatusSelector(props: LessonStatusSelectorProps) {
  function onChange(value: LessonStatus) {

  }

  return (
    <Selector defaultValue={LessonStatus.Incomplete} onChange={onChange}>
      <option value={LessonStatus.Incomplete}>Not completed</option>
      <option value={LessonStatus.Complete}>Completed</option>
    </Selector>
  )
}

export default LessonStatusSelector
