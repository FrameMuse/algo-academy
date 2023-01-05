const everySecondCallbacks = new Set<() => void>
setInterval(() => {
  for (const callback of everySecondCallbacks) callback()
}, 1000)

class Time {
  /**
   * Split time to its delimiters: seconds, minutes, hours and days.
   * 
   * @param time - time to delimit in milliseconds.
   * @param minimumDelimiters - amount of delimiters (default: `0`, which means auto).
   */
  static delimit(time: number, minimumDelimiters = 0): number[] | null {
    // https://www.w3schools.com/howto/howto_js_countdown.asp
    const distance = time
    if (distance <= 0) {
      return null
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    let delimiters = minimumDelimiters
    if (seconds > 0) delimiters = 1
    if (minutes > 0) delimiters = 2
    if (hours > 0) delimiters = 3
    if (days > 0) delimiters = 4
    if (delimiters < minimumDelimiters) delimiters = minimumDelimiters

    const timeTuple = [days, hours, minutes, seconds]
    return timeTuple.slice(4 - delimiters)
  }

  /**
   * Adds zero to ... .
   */
  static addZero(number: number) {
    const numberString = String(number)

    if (numberString.length < 2) {
      return "0" + numberString
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
