import { URLDataBase64 } from "types"

class FileTransform {
  static toURLData(file: File): Promise<URLDataBase64> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()

      reader.readAsDataURL(file)
      reader.onload = () => {
        if (reader.result === null) {
          throw new Error("File reading resulted in null.")
        }

        if (reader.result instanceof ArrayBuffer) {
          throw new Error("ArrayBuffer suddenly appeared as a result of file reading.")
        }

        resolve(reader.result as URLDataBase64)
      }
      reader.onerror = reject
    })
  }


  static async fetchFile(url: string) {
    const fileName = url.slice(url.lastIndexOf("/") + 1)

    const response = await fetch(url)
    const Uint8Array = (await response.body?.getReader()?.read())?.value

    return new File(Uint8Array ? [Uint8Array] : [], fileName, { type: response.headers.get("content-type") || "image" })
  }
}

export default FileTransform
