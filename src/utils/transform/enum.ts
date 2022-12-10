import { EnumType } from "types"

class Enum {
  static keys(enumerator: EnumType<never>): string[] {
    return Object.keys(enumerator).filter(key => !isNaN(Number(enumerator[key])))
  }

  /**
   * TODO: Needs requirements.
   */
  static values<T extends string | number>(enumerator: EnumType<never>): T[] {
    return []
    // return Object.values(enumerator).filter(key => !isNaN(Number(enumerator[key])))
  }

  static entries(enumerator: EnumType<never>): [string, number][] {
    return Object
      .keys(enumerator)
      .reduce((result, nextKey) => {
        if (!isNaN(Number(nextKey))) {
          return result
        }

        return [...result, ([nextKey, enumerator[nextKey]] as [string, number])]
      }, [] as [string, number][])
  }

}

export default Enum
