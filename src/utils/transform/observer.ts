class Observer {
  private listeners = new Set<() => void>

  emit() {
    for (const listener of this.listeners) listener()
  }

  /**
   * @returns unsubscribe method.
   */
  observe(listener: () => void): () => void {
    this.listeners.add(listener)

    return () => {
      this.listeners.delete(listener)
    }
  }
}

export default Observer
