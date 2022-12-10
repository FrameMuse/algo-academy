import useSnippet from "api/hooks/snippets/useSnippet"
import useUpdateSnippet from "api/hooks/snippets/useUpdateSnippet"
import Box from "app/layouts/Box/Box"
import Column from "app/layouts/Column/Column"
import Headings from "app/layouts/Headings/Headings"
import { confirmAction } from "app/popups/PopupConfirm/PopupConfirm"
import Button from "app/ui/kit/Button/Button"
import Field from "app/ui/kit/Field/Field"
import Selector from "app/ui/kit/Selector/Selector"
import { optionsFromEnum } from "app/ui/kit/Selector/Selector.helpers"
import Editor from "app/ui/synthetic/Editor/Editor"
import { EditorLanguage } from "app/ui/synthetic/Editor/Editor.types"
import { useState } from "react"
import { WorkspaceEditorLanguage } from "store/reducers/workspace/types"
import { inputValue } from "utils/common"
import useParam from "utils/hooks/useParam"

export function AdminSnippetsEditView() {
  const snippetId = useParam("snippetId")

  const snippet = useSnippet(snippetId)
  const updateSnippet = useUpdateSnippet()

  const [label, setLabel] = useState(snippet.label)
  const [language, setLanguage] = useState<EditorLanguage>(snippet.language)
  const [content, setContent] = useState(snippet.content)
  const [runTime, setRunTime] = useState(snippet.runTime)
  const [space, setSpace] = useState(snippet.space)

  async function onSave() {
    if (!await confirmAction()) return

    await updateSnippet(snippetId, { label, content, runTime, space })
  }
  return (
    <Box>
      <Headings>
        <h2>Snippet #{snippetId}</h2>
      </Headings>
      <Column>
        <Field placeholder="e.g. DFS" defaultValue={snippet.label} onChange={inputValue(setLabel)} required>Label</Field>
        <Selector label="Language" defaultValue={snippet.language} onChange={setLanguage}>
          {optionsFromEnum(WorkspaceEditorLanguage, false)}
        </Selector>
        <Field placeholder="e.g. O(n)" defaultValue={snippet.runTime} onChange={inputValue(setRunTime)} required>Run Time</Field>
        <Field placeholder="e.g. O(n)" defaultValue={snippet.space} onChange={inputValue(setSpace)} required>Space</Field>
        <Editor width="35em" height="15em" defaultLanguage={language} defaultValue={snippet.content} onChange={value => value && setContent(value)} />
        <Button color="dark" await onClick={onSave}>Save</Button>
      </Column>
    </Box>
  )
}

export default AdminSnippetsEditView
