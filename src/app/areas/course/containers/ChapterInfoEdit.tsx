import useChapter from "api/hooks/chapters/useChapter"
import useUpdateChapter from "api/hooks/chapters/useUpdateChapter"
import Column from "app/layouts/Column/Column"
import PopupConfirm from "app/popups/PopupConfirm/PopupConfirm"
import Button from "app/ui/kit/Button/Button"
import Field from "app/ui/kit/Field/Field"
import Selector from "app/ui/kit/Selector/Selector"
import ErrorCover from "app/ui/synthetic/ErrorCover/ErrorCover"
import LoaderCover from "app/ui/synthetic/Loader/LoaderCover"
import { useState } from "react"
import { Modal } from "react-modal-global"
import { inputValue } from "utils/common"

interface ChapterInfoEditProps {
  id: string
}

function ChapterInfoEdit(props: ChapterInfoEditProps) {

  const { chapter, isLoading } = useChapter(props.id)
  const updateChapter = useUpdateChapter()

  const [title, setTitle] = useState<string>()
  const [order, setOrder] = useState<number>()
  const [showInProfile, setShowInProfile] = useState<boolean>()

  if (isLoading) {
    return <LoaderCover />
  }

  if (chapter == null) {
    return <ErrorCover>Chapter is null.</ErrorCover>
  }

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

      <Selector label="Show this in `Profile Solved Problems`" defaultValue={String(chapter.showInProfile)} onChange={value => setShowInProfile(Boolean(value))}>
        <option value="true">True</option>
        <option value="false">False</option>
      </Selector>

      <Button color="dark" onClick={onSubmit}>Save</Button>
    </Column>
  )
}

export default ChapterInfoEdit
