import { toast } from "react-toastify"
import { useCopyToClipboard } from "react-use"

function useAppCopyToClipboard() {
  const [copyToClipboardState, copyToClipboardOriginal] = useCopyToClipboard()

  function copyToClipboard(value: string) {
    copyToClipboardOriginal(value)

    if (copyToClipboardState.error) {
      toast.error("Error when copying to clipboard: " + copyToClipboardState.error.message)
      return
    }

    toast.success("Copied to clipboard!")
  }

  // Enforce base naming
  return { copyToClipboard, copyToClipboardState }
}

export default useAppCopyToClipboard
