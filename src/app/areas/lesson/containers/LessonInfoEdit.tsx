import useLesson from "api/hooks/lessons/useLesson"
import { LessonType } from "app/areas/lesson/types"
import Column from "app/layouts/Column/Column"
import PopupConfirm from "app/popups/PopupConfirm/PopupConfirm"
import Button from "app/ui/kit/Button/Button"
import Field from "app/ui/kit/Field/Field"
import Form from "app/ui/kit/Form/Form"
import Selector from "app/ui/kit/Selector/Selector"
import { optionsFromEnum } from "app/ui/kit/Selector/Selector.helpers"
import ErrorCover from "app/ui/synthetic/ErrorCover/ErrorCover"
import LoaderCover from "app/ui/synthetic/Loader/LoaderCover"
import { Modal } from "react-modal-global"

interface LessonInfoEditProps {
  id: string
}

function LessonInfoEdit(props: LessonInfoEditProps) {
  const { lesson, isLoading } = useLesson(props.id)

  if (isLoading) {
    return <LoaderCover />
  }

  if (lesson == null) {
    return <ErrorCover>Lesson is null.</ErrorCover>
  }

  async function onSubmit() {
    Modal.open(PopupConfirm, { weak: true })
  }

  return (
    <Form style={{ width: "30vw" }} onSubmit={onSubmit}>
      <Column>
        <Field defaultValue="Welcome" placeholder="e.g. Lowest Common Ancestor">Title</Field>
        <Selector<LessonType> label="Type" defaultValue={lesson.type}>
          {optionsFromEnum(LessonType)}
        </Selector>
        <Button color="dark" type="submit">Save</Button>
      </Column>
    </Form>
  )
}

export default LessonInfoEdit
