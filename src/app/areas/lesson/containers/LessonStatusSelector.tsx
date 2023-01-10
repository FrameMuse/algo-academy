import useUpdateLessonStatus from "api/hooks/lessons/useUpdateLessonStatus"
import Selector from "app/ui/kit/Selector/Selector"
import { useEffect, useState } from "react"

import { LessonStatus } from "../types"

interface LessonStatusSelectorProps {
  /**
   * Id of a course.
   */
  id: string
  status?: LessonStatus
  transparent?: boolean
}

function LessonStatusSelector(props: LessonStatusSelectorProps) {
  const [status, setStatus] = useState(props.status)
  const updateStatus = useUpdateLessonStatus()

  async function onChange(value: LessonStatus) {
    const prevStatus = status
    setStatus(value)

    const success = await updateStatus(props.id, value)
    if (!success) {
      setStatus(prevStatus)
    }
  }

  useEffect(() => setStatus(props.status), [props.status])

  return (
    <Selector transparent={props.transparent} value={status} onChange={onChange}>
      <option value={LessonStatus.Incomplete}>Not completed</option>
      <option value={LessonStatus.Complete}>Completed</option>
    </Selector>
  )
}

export default LessonStatusSelector
