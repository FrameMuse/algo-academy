import { Buffer } from "buffer"
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

  static toFormData(file: File, fieldName?: string): FormData {
    const formData = new FormData
    formData.append(fieldName ?? file.name, file)

    return formData
  }

  /**
   * https://stackoverflow.com/a/61321728/12468111
   */
  static parseDataURI(dataURI: string): File {
    const splitDataURI = dataURI.split(",")

    const mimeString = splitDataURI[0].split(":")[1].split(";")[0]

    const buffer = Buffer.from(splitDataURI[1], "base64")

    return new File([buffer], "file." + mimeString.split("/")[1], { type: mimeString })
  }


  static async fetchFile(url: string): Promise<File> {
    const fileName = url.slice(url.lastIndexOf("/") + 1)

    const response = await fetch(url)
    const Uint8Array = (await response.body?.getReader()?.read())?.value

    return new File(Uint8Array ? [Uint8Array] : [], fileName, { type: response.headers.get("content-type") || "image" })
  }
}

export default FileTransform
