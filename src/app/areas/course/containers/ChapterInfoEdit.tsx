import useChapter from "api/hooks/chapters/useChapter"
import useUpdateChapter from "api/hooks/chapters/useUpdateChapter"
import Column from "app/layouts/Column/Column"
import PopupConfirm from "app/popups/PopupConfirm/PopupConfirm"
import Button from "app/ui/kit/Button/Button"
import Field from "app/ui/kit/Field/Field"
import Selector from "app/ui/kit/Selector/Selector"
import { TrueFalseOptions } from "app/ui/kit/Selector/Selector.helpers"
import { useState } from "react"
import { Modal } from "react-modal-global"
import { inputValue, targetValue } from "utils/common"

interface ChapterInfoEditProps {
  id: string
}

function ChapterInfoEdit(props: ChapterInfoEditProps) {

  const chapter = useChapter(props.id)
  const updateChapter = useUpdateChapter()

  const [title, setTitle] = useState<string>()
  const [order, setOrder] = useState<number>()
  const [showInProfile, setShowInProfile] = useState<boolean>()

  async function onSubmit() {
    let confirmed = false
    const onConfirm = () => confirmed = true
    await Modal.open(PopupConfirm, { weak: true, onConfirm })

    if (!confirmed) return

    await updateChapter(props.id, { title, order, showInProfile })
  }

  return (
    <Column>
      <Field required type="text" defaultValue={chapter.title} onChange={inputValue(setTitle)}>Title</Field>
      <Field required type="number" defaultValue={chapter.order} onChange={inputValue(value => setOrder(Number(value)))}>Order</Field>

      <Selector label="Show this in `Profile Solved Problems`" defaultValue={Number(chapter.showInProfile)} onChange={targetValue(setShowInProfile, Boolean)}>
        {TrueFalseOptions}
      </Selector>

      <Button color="dark" onClick={onSubmit}>Save</Button>
    </Column>
  )
}

export default ChapterInfoEdit
