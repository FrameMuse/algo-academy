import appQuery from "api/appQuery"
import { APIActions } from "api/data"
import { refetchActionQueries } from "api/helpers"
import { APIMappings } from "api/mappings"
import { EditorLanguage } from "app/ui/synthetic/Editor/Editor.types"

function useAddSnippet() {
  async function addSnippet(editorlanguage: EditorLanguage, snippet: {
    label: string
    content: string
    runTime: string
    space: string
  }) {
    const language = APIMappings.editorLanguage.backward(editorlanguage)
    const response = await appQuery(APIActions.postSnippets({
      name: snippet.label,
      language,
      code: snippet.content,
      space_complex: snippet.space,
      time_complex: snippet.runTime
    }))

    refetchActionQueries(APIActions.getSnippetsLanguageLanguage(language))

    return APIMappings.mapSnippet(response.payload)
  }

  return addSnippet
}

export default useAddSnippet
