import { useEffect, useState } from "react"
import ObservableLocalStorage from "utils/transform/observableLocalStorage"

function useObservableLocalStorage<T>(key: string): [T | undefined, React.Dispatch<T | undefined>] {
  const [value, setValue] = useState<T>()

  function getItem() {
    const item = ObservableLocalStorage.getItem(key)
    if (item == null) return null

    return JSON.parse(item)
  }

  function refreshItem() {
    const localStorageItem = getItem()

    setValue(localStorageItem)
  }

  function updateValue(value: T | undefined) {
    const serializedValue = JSON.stringify(value)

    ObservableLocalStorage.setItem(key, serializedValue)
    setValue(value)
  }

  useEffect(() => {
    // Get value on mount
    refreshItem()
    // Observe
    return ObservableLocalStorage.observe(refreshItem)
  }, [key])

  return [value, updateValue]
}

export default useObservableLocalStorage
