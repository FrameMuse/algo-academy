class PhoneNumber {
  static format(number: number): string {
    if (number <= 0) return ""

    const numberString = String(number)
    let numberArray = []
    switch (numberString.length) {
      case 0: return ""
      // Skip some numbers
      case 1:
      case 2:
      case 3:
        return numberString
      case 4:
        numberArray = numberString.split(/^(\d{1})(\d{3})$/)
        break
      case 6:
        return numberString.match(/\d{2}/g)?.join(" ") ?? ""

      default:
        numberArray = numberString.split(/^(\d+?)(\d{3})?(\d{3})?(\d{2})?(\d{2})?$/)
        break
    }

    return "+" + numberArray.filter(Boolean).join(" ").trim()
  }

  static formatByTemplate(number: number, template: string): string {
    if (number <= 0) return ""
    // template = "+# (###) ### ##-##"

    const phone = [...String(number)]
    // if (phone.length < (template.match(/#/g) || []).length) return String(number)
    let formattedPhone = phone.reduce((result, next) => result.replace("#", next), template)
    if (formattedPhone.search("#") > -1) {
      formattedPhone = formattedPhone.slice(0, formattedPhone.search("#"))
    }
    return formattedPhone
  }

  /**
   * @returns phone number
   */
  static parse(value: string): number {
    return Number(value.replace(/[^\d]/g, ""))
  }

  /**
   * @returns length of a phone number.
   */
  static getLength(value: number): number {
    return String(value).length
  }
}

export default PhoneNumber
