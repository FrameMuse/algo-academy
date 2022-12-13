import useLessonNotes from "api/hooks/lessons/useLessonNotes"
import useUpdateLessonNotes from "api/hooks/lessons/useUpdateLessonNotes"
import { WorkspaceEditor } from "app/areas/workspace"
import Headings from "app/layouts/Headings/Headings"
import Icon from "app/ui/kit/Icon/Icon"
import { EditorLanguage } from "app/ui/synthetic/Editor/Editor.types"
import Loader from "app/ui/synthetic/Loader/Loader"
import _ from "lodash"
import { useState } from "react"

interface LessonNotesProps {
  id: string
}

function LessonNotes(props: LessonNotesProps) {
  const [pending, setPending] = useState(false)

  const id = `${props.id}-notes`

  const notesContent = useLessonNotes(props.id)
  const updateLessonNotes = useUpdateLessonNotes()

  async function onChange(value: string | undefined) {
    if (value == null) return

    setPending(true)
    await updateLessonNotes(props.id, value)
    setPending(false)
  }
  const onChangeThrottled = _.debounce(onChange, 1000, { trailing: true })


  const pendingSavingElement = <p>Saving... <div><Loader /></div></p>
  const upToDateElement = <p>Up to date <Icon name="check" /></p>
  return (
    <>
      <Headings>
        <h4>Notes</h4>
        <p>Here you can quicly take a note.</p>
        {pending ? pendingSavingElement : upToDateElement}
      </Headings>
      <WorkspaceEditor
        draftId={id}
        height="100%"

        value="" // to prevent updating default value when lesson is refetched.
        defaultValue={notesContent}
        defaultLanguage={EditorLanguage.Markdown}

        onChange={onChangeThrottled}
      />
    </>
  )
}

export default LessonNotes
