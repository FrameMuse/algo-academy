import "./Picker.scss"

import Checkbox from "app/ui/kit/Checkbox/Checkbox"
import Field from "app/ui/kit/Field/Field"
import { Children, useState } from "react"
import { classWithModifiers, inputValue } from "utils/common"

import { PickerOptionElement } from "./Picker.types"

type PickerItemValue = string | number

interface PickerProps {
  defaultPicks?: PickerItemValue[]
  onChange?(picks: PickerItemValue[]): void
  children: PickerOptionElement | PickerOptionElement[]
}

function Picker(props: PickerProps) {
  const [search, setSearch] = useState<string>("")
  const [picks, setPicks] = useState<PickerItemValue[]>(props.defaultPicks ?? [])

  function pick(value: PickerItemValue) {
    const newPicks = [...picks, value]

    setPicks(newPicks)
    props.onChange?.(newPicks)
  }

  function unpick(value: PickerItemValue) {
    const newPicks = picks.filter(pick => pick !== value)

    setPicks(newPicks)
    props.onChange?.(newPicks)
  }

  function togglePick(value: PickerItemValue) {
    picks.includes(value) ? unpick(value) : pick(value)
  }

  const options = Children.map(props.children, child => child.props)

  // Search occurrences
  const lowerCaseValue = search.toLowerCase()
  const findSearchValue = (value: string) => value.toLowerCase().search(lowerCaseValue)

  const occurrences =
    options
      .map(option => ({ option, index: findSearchValue(String(option.children)) }))
      .filter(occur => occur.index >= 0)

  return (
    <div className="picker">
      <Field placeholder="Start typing..." onChange={inputValue(setSearch)} />
      <div className="picker__items">
        {occurrences.map(({ option, index }) => (
          <button
            className={classWithModifiers("picker-item", picks.includes(String(option.value)) && "picked")}
            role="option"
            type="button"
            onClick={() => togglePick(String(option.value))}
            key={String(option.value)}
          >
            <Checkbox className="picker-item__checkbox" readOnly checked={picks.includes(String(option.value))} />
            <div className="picker-item__text">
              {String(option.children).slice(0, index)}
              <em>{String(option.children).slice(index, index + search.length)}</em>
              {String(option.children).slice(index + search.length)}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Picker
