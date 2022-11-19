
import _ from "lodash"
import { Enum } from "types"
import { getEnumEntries } from "utils/transform/enum"

import { SelectorOptionElement } from "./Selector.types"

/**
 * @param startCase - whether or not transform keys to start case (default `false`).
 * 
 */
export function optionsFromEntries(entries: [key: string | number, value: string | number][], startCase = false): SelectorOptionElement[] {
  return entries.map(([key, value], index) => (
    <option value={value} key={index}>{startCase ? _.startCase(String(key)) : key}</option>
  ))
}

/**
 * @param startCase - whether or not transform keys to start case (default `true`).
 * 
 */
export function optionsFromEnum(enumerator: Enum<never>, startCase = true): SelectorOptionElement[] {
  return optionsFromEntries(getEnumEntries(enumerator), startCase)
}
