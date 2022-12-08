import appQuery from "api/appQuery"
import { APIActions } from "api/data"
import { toast } from "react-toastify"

function useUpdateSnippet() {
  async function updateSnippet(id: string, snippet: Partial<{
    label: string
    content: string
    runTime: string
    space: string
  }>) {
    await appQuery(APIActions.patchSnippetsId(id, {
      name: snippet.label,
      code: snippet.content,
      space_complex: snippet.space,
      time_complex: snippet.runTime
    }))

    toast.success("Snippet has beed updated.")
  }

  return updateSnippet
}

export default useUpdateSnippet
