import { APIActions } from "api/data"
import { APIMappings } from "api/mappings"
import useAppQuery from "api/useAppQuery"
import { EditorLanguage } from "app/ui/synthetic/Editor/Editor.types"

function useSnippets(editorLanguage: EditorLanguage) {
  const language = APIMappings.editorLanguage.backward(editorLanguage)

  const { data } = useAppQuery(APIActions.getSnippetsLanguageLanguage(language))

  const snippets = data.payload.map(APIMappings.mapSnippet)
  return snippets
}

export default useSnippets
