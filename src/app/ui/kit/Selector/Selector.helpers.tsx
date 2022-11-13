
import _ from "lodash"

import { SelectorType } from "./Selector.types"

export function optionsFromEntries(entries: [key: string | number, value: string | number][], startCase = false): SelectorType[] {
  return entries.map(([key, value], index) => (
    <option value={value} key={index}>{startCase ? _.startCase(String(key)) : key}</option>
  ))
}
