
import _ from "lodash"
import { EnumType } from "types"
import Enum from "utils/transform/enum"

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
export function optionsFromEnum(enumerator: EnumType<never>, startCase = true): SelectorOptionElement[] {
  return optionsFromEntries(Enum.entries(enumerator), startCase)
}
