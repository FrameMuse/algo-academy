import appQuery from "api/appQuery"
import { APIActions } from "api/data"
import { invalidateActionQuery } from "api/helpers"
import { APIMappings } from "api/mappings"
import { EditorLanguage } from "app/ui/synthetic/Editor/Editor.types"
import { toast } from "react-toastify"

function useDeleteSnippet() {
  async function deleteSnippet(id: string, language: EditorLanguage) {
    await appQuery(APIActions.deleteSnippetsId(id))

    invalidateActionQuery(APIActions.getSnippetsId(id))
    invalidateActionQuery(APIActions.getSnippetsLanguageLanguage(APIMappings.editorLanguage.backward(language)))

    toast.success(`Plan has been DELETED.`)
  }
  return deleteSnippet
}

export default useDeleteSnippet
