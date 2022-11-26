// import { Buffer } from "buffer"
import { SyntheticEvent } from "react"

/**
 *
 * @returns `class1 class2`
 */
export function classMerge(...classNames: Array<string | null | undefined>): string {
  const space = " "
  return classNames.filter(Boolean).join(space)
}

/**
 * Join modifiers with origin class.
 * @returns `"origin-class origin-class--modifier"`
 */
export function classWithModifiers(originClass: string, ...modifiers: Array<string | number | false | null | undefined>): string {
  modifiers = modifiers.filter(Boolean)
  if (!modifiers.length) return originClass

  const space = " "
  const separator = "--"

  modifiers = modifiers.map(modifier => originClass + separator + modifier)
  return originClass + space + modifiers.join(space)
}

/**
 * Creates query from given object.
 * - Stringify objects and arrays
 * - Supports deep nesting
 * @returns `state1=6&state2=horse` without `?`
 */
export function createQuery(queryObject?: Record<string | number, unknown> | null): string {
  if (!queryObject || !Object.keys(queryObject).length) return ""

  const queryKeys = Object.keys(queryObject)
  const queryArray = queryKeys.map(key => {
    const value = queryObject[key]
    if (value) {
      if (isDictionary(value)) {
        return createQuery(value)
      }

      return encodeURIComponent(key) + "=" + encodeURIComponent(String(value))
    }
    return ""
  })

  return queryArray.filter(Boolean).join("&")
}

/**
 * Interpolates {variable} in string.
 */
export function interpolate<T extends string>(value: T, vars: Record<string, string | number>): string {
  const varKeys = Object.keys(vars)
  return varKeys.reduce((result: string, next) => result.replace(new RegExp(`{${next}}`, "g"), String(vars[next])), value)
}


/**
 * Stops propagation from container. Callback exists only on the `current` target
 * @param callback any function
 * @returns mouse event handler
 */
export function stopPropagation(callback?: () => void | null) {
  return ({ target, currentTarget }: Event | SyntheticEvent) => {
    if (target instanceof Element && currentTarget instanceof Element) {
      if (target !== currentTarget) return
    }

    callback?.()
  }
}

export function inputValue(callback: (value: string) => void) {
  return (event: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    callback(event.currentTarget.value)
  }
}

/**
 * Continues the array, creating minimum fill level of the array by duplicating its items.
 * 
 * It **doesn't** mutate original `array`.
 * @returns new array
 */
export function minFill<T>(array: T[], minLevel?: number): T[] {
  if (array.length === 0) return array
  if (!minLevel || (array.length >= minLevel)) {
    return array
  }

  const newArray: T[] = []
  for (let i = 0; i < (minLevel - array.length); i++) {
    newArray.push(...array.slice(0, minLevel - newArray.length))
  }
  return newArray
}

export function isDictionary(object: unknown): object is Record<keyof never, unknown> {
  return object instanceof Object && object.constructor === Object
}
