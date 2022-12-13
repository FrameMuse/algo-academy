import useDeleteSnippet from "api/hooks/snippets/useDeleteSnippet"
import useSnippets from "api/hooks/snippets/useSnippets"
import Box from "app/layouts/Box/Box"
import Buttons from "app/layouts/Buttons/Buttons"
import { confirmAction } from "app/popups/PopupConfirm/PopupConfirm"
import Button from "app/ui/kit/Button/Button"
import ButtonLink from "app/ui/kit/Button/ButtonLink"
import Selector from "app/ui/kit/Selector/Selector"
import { optionsFromEnum } from "app/ui/kit/Selector/Selector.helpers"
import Table from "app/ui/kit/Table/Table"
import { EditorLanguage } from "app/ui/synthetic/Editor/Editor.types"
import { useState } from "react"
import { WorkspaceEditorLanguage } from "store/reducers/workspace/types"

function AdminSnippetsView() {
  const [language, setLanguage] = useState<EditorLanguage>(EditorLanguage.Python)
  const snippets = useSnippets(language)

  const deleteSnippet = useDeleteSnippet()
  async function onDelete(id: string) {
    if (!await confirmAction()) return

    deleteSnippet(id, language)
  }

  return (
    <Box>
      <h2>Snippets</h2>
      <ButtonLink color="gray" to="new">Add new snippet</ButtonLink>
      <Selector label="Choose language" defaultValue={language} onChange={setLanguage}>
        {optionsFromEnum(WorkspaceEditorLanguage, false)}
      </Selector>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Label</th>
            <th>Details</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {snippets.map(snippet => (
            <tr key={snippet.id}>
              <td>{snippet.id}</td>
              <td>{snippet.label}</td>
              <td>Run Time: {snippet.runTime}; Space: {snippet.space}</td>
              <td>
                <Buttons>
                  <Button color="dark" size="smaller" onClick={() => onDelete(snippet.id)}>Delete</Button>
                  <ButtonLink color="blue" size="smaller" to={snippet.id}>Edit</ButtonLink>
                </Buttons>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Box>
  )
}

export default AdminSnippetsView
