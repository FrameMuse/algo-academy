import useLesson from "api/hooks/lessons/useLesson"
import useUpdateLesson from "api/hooks/lessons/useUpdateLesson"
import { LessonType } from "app/areas/lesson/types"
import Column from "app/layouts/Column/Column"
import { confirmAction } from "app/popups/PopupConfirm/PopupConfirm"
import Button from "app/ui/kit/Button/Button"
import Field from "app/ui/kit/Field/Field"
import Selector from "app/ui/kit/Selector/Selector"
import { optionsFromEnum } from "app/ui/kit/Selector/Selector.helpers"
import { useState } from "react"
import { inputValue } from "utils/common"

interface LessonInfoEditProps {
  id: string
}

function LessonInfoEdit(props: LessonInfoEditProps) {
  const [title, setTitle] = useState<string>("")
  const [type, setType] = useState<LessonType>()

  const lesson = useLesson(props.id)
  const updateLesson = useUpdateLesson()

  async function onSubmit() {
    if (!await confirmAction()) return

    await updateLesson(props.id, { title, type })
  }

  return (
    <div style={{ width: "30vw" }}>
      <Column>
        <Field defaultValue={lesson.title} onChange={inputValue(setTitle)}>Title</Field>
        <Selector<LessonType> label="Type" defaultValue={lesson.type} onChange={setType}>
          {optionsFromEnum(LessonType)}
        </Selector>
        <Button color="dark" await onClick={onSubmit}>Save</Button>
      </Column>
    </div>
  )
}

export default LessonInfoEdit
