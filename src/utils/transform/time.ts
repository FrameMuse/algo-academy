const everySecondCallbacks = new Set<() => void>
setInterval(() => {
  for (const callback of everySecondCallbacks) callback()
}, 1000)

class Time {
  /**
   * Split time to its delimiters: seconds, minutes, hours and days.
   * 
   * @param time - time to delimit in milliseconds.
   * @param delimiters - amount of delimiters (default: `4`).
   */
  static delimit(time: number, delimiters = 4): number[] | null {
    // https://www.w3schools.com/howto/howto_js_countdown.asp
    const distance = time
    if (distance <= 0) {
      return null
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    return [days, hours, minutes, seconds].slice(4 - delimiters)
  }

  /**
   * Adds zero to ... .
   */
  static fixZeros(number: number, min = 2) {
    let numberString = String(number)

    if (numberString.length < min) {
      numberString = "0" + numberString
    }

    return numberString
  }

  /**
   * Efficient way of executing code every second.
   * It can handle infinite amount of callbacks since this method relies on only one `setInterval`.
   * 
   * @returns unsubscribe method.
   */
  static everySecond(callback: () => void): () => void {
    everySecondCallbacks.add(callback)

    return () => {
      everySecondCallbacks.delete(callback)
    }
  }
}

export default Time
