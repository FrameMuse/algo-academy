import { toast } from "react-toastify"
import { useCopyToClipboard } from "react-use"

import { appToasts } from "./useAppToast"
import useReportError from "./useReportError"

function useAppCopyToClipboard() {
  const reportError = useReportError()
  const [copyToClipboardState, copyToClipboardOriginal] = useCopyToClipboard()

  function copyToClipboard(value: string) {
    copyToClipboardOriginal(value)

    if (copyToClipboardState.error) {
      reportError(copyToClipboardState.error)
      return
    }

    toast.success(appToasts.copiedToClipboard)
  }

  // Enforce base naming
  return { copyToClipboard, copyToClipboardState }
}

export default useAppCopyToClipboard
