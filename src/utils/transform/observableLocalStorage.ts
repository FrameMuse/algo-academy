import Observer from "./observer"

class ObservableLocalStorage {
  private static obsever = new Observer()

  static clear(): void {
    return localStorage.clear()
  }
  static key(index: number): string | null {
    return localStorage.key(index)
  }

  static getItem(key: string): string | null {
    return localStorage.getItem(key)
  }
  static removeItem(key: string): void {
    localStorage.removeItem(key)
    this.obsever.emit()
  }
  static setItem(key: string, value: string): void {
    localStorage.setItem(key, value)
    this.obsever.emit()
  }

  /**
   * @returns unsubscribe method.
   */
  static observe(listener: () => void): () => void {
    return this.obsever.observe(listener)
  }
}

export default ObservableLocalStorage
