import { Enum } from "types"

export function getEnumKeys(enumerator: Enum<never>): string[] {
  return Object.keys(enumerator).filter(key => !isNaN(Number(enumerator[key])))
}

export function getEnumEntries(enumerator: Enum<never>): [string, number][] {
  return Object
    .keys(enumerator)
    .reduce((result, nextKey) => {
      if (!isNaN(Number(nextKey))) {
        return result
      }

      return [...result, ([nextKey, enumerator[nextKey]] as [string, number])]
    }, [] as [string, number][])
}
