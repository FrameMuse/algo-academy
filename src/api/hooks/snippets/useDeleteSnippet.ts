import appQuery from "api/appQuery"
import { APIActions } from "api/data"
import { refetchActionQueries } from "api/helpers"
import { APIMappings } from "api/mappings"
import { EditorLanguage } from "app/ui/synthetic/Editor/Editor.types"
import { toast } from "react-toastify"

function useDeleteSnippet() {
  async function deleteSnippet(id: string, language: EditorLanguage) {
    await appQuery(APIActions.deleteSnippetsId(id))

    refetchActionQueries(APIActions.getSnippetsId(id))
    refetchActionQueries(APIActions.getSnippetsLanguageLanguage(APIMappings.editorLanguage.backward(language)))

    toast.success(`Plan has been DELETED.`)
  }
  return deleteSnippet
}

export default useDeleteSnippet
