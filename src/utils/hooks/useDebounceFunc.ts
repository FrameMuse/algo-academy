import _, { DebouncedFunc, DebounceSettings } from "lodash"
import { useEffect, useRef } from "react"

function useDebounceFunc<T extends (...args: never[]) => unknown>(func: T, wait?: number, options?: DebounceSettings): DebouncedFunc<T> {
  const debouncedFunc = _.debounce(func, wait, options)
  const debouncedFuncRef = useRef(debouncedFunc)

  useEffect(() => {
    debouncedFuncRef.current = debouncedFunc
  }, [String([func, wait, options])])

  return debouncedFuncRef.current
}

export default useDebounceFunc
