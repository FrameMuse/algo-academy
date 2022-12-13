class Percentage {
  /**
   * Add `percent` to `value`.
   * 
   * @example
   * 250 + 10% => 275
   */
  static add(percent: number, value: number): number {
    return value + (value * Percentage.multiplier(percent))
  }

  /**
   * Subtract `percent` from `value`.
   * 
   * @example
   * 250 - 10% => 225
   */
  static subtract(percent: number, value: number): number {
    return value - (value * Percentage.multiplier(percent))
  }

  /**
   * Normalizes and converts percentage to convient multiplier (from 0 to 1).
   */
  static multiplier(percent: number): number {
    const normalizedPercent = Percentage.normalize(percent)

    return normalizedPercent / 100
  }

  /**
   * Make the percent be not less than 0 nor less than 100.
   */
  static normalize(percent: number): number {
    if (percent < 0) percent = 0
    if (percent > 100) percent = 100

    return percent
  }
}

export default Percentage
