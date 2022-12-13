class Price {
  /**
   * @argument currency - default `"USD"`
   * @argument locale - default `"EN"`
   */
  static format(value: number, currency: Intl.NumberFormatOptions["currency"] = "USD", locale = "EN"): string {
    try {
      return value.toLocaleString(locale, { style: "currency", currency, minimumFractionDigits: 0 })
    } catch (error) {
      if (process.env.NODE_ENV === "production") {
        if (error instanceof Error) {
          if (error.message.includes("tag") || error.message.includes("locale")) {
            return "Invalid language tag"
          }

          return "Invalid currency code"
        }
      }

      throw error
    }
  }

  /**
   * @returns price value without currency sign
   */
  static parseValue(value: string): number {
    return Number(value.replace(/[^\d.,]/g, "").replace(",", "."))
  }
}

export default Price
