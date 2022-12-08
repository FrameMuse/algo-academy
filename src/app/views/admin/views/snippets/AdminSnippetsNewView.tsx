import useAddSnippet from "api/hooks/snippets/useAddSnippet"
import Box from "app/layouts/Box/Box"
import Column from "app/layouts/Column/Column"
import Headings from "app/layouts/Headings/Headings"
import Button from "app/ui/kit/Button/Button"
import Field from "app/ui/kit/Field/Field"
import Selector from "app/ui/kit/Selector/Selector"
import { optionsFromEnum } from "app/ui/kit/Selector/Selector.helpers"
import Editor from "app/ui/synthetic/Editor/Editor"
import { EditorLanguage } from "app/ui/synthetic/Editor/Editor.types"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { WorkspaceEditorLanguage } from "store/reducers/workspace/types"
import { inputValue } from "utils/common"

function AdminSnippetsNewView() {
  const addSnippet = useAddSnippet()
  const navigate = useNavigate()

  const [label, setLabel] = useState("")
  const [language, setLanguage] = useState<EditorLanguage>(EditorLanguage.Python)
  const [content, setContent] = useState("")
  const [runTime, setRunTime] = useState("")
  const [space, setSpace] = useState("")

  async function onSubmit() {
    const snippet = await addSnippet(language, { label, content, runTime, space })

    if (snippet == null) return
    navigate("../" + snippet.id)
  }
  return (
    <Box>
      <Headings>
        <h2>New Snippet</h2>
        {/* <p>After creating, you will be navigated to it.</p> */}
      </Headings>
      <Column>
        <Field placeholder="e.g. DFS" onChange={inputValue(setLabel)} required>Label</Field>
        <Selector label="Language" defaultValue={language} onChange={setLanguage}>
          {optionsFromEnum(WorkspaceEditorLanguage)}
        </Selector>
        <Field placeholder="e.g. O(n)" onChange={inputValue(setRunTime)} required>Run Time</Field>
        <Field placeholder="e.g. O(n)" onChange={inputValue(setSpace)} required>Space</Field>
        <Editor width="35em" height="15em" defaultLanguage={language} onChange={value => value && setContent(value)} />
        <Button color="dark" await onClick={onSubmit}>Create</Button>
      </Column>
    </Box>
  )
}

export default AdminSnippetsNewView
