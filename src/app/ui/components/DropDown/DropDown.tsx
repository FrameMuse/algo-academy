import "./DropDown.scss"

import { Children, ComponentProps, ReactElement, ReactNode, useEffect, useRef, useState } from "react"
import { classWithModifiers } from "utils/common"

interface DropDownProps<V> {
  name?: string
  default?: V
  expanded: boolean
  onSelect(option: { value: V, children: ReactNode }, index: number): void

  children: ReactElement<ComponentProps<"option">>[]
}

function DropDown<V = string | undefined>(props: DropDownProps<V>) {
  const parentRef = useRef<HTMLDivElement>(null)
  const options = Children.map(props.children, child => child.props)
  const initChoice = props.default ? options.findIndex(option => option.value === props.default) : -1
  const [choice, Choose] = useState<number>(initChoice)
  useEffect(() => {
    if (!props.expanded) return
    if (parentRef.current == null) return
    // https://jsfiddle.net/cxe73c22/
    const parentElement = parentRef.current
    const parentElementRect = parentElement.getBoundingClientRect()

    const choiceElement = parentElement.children.item(choice)
    const choiceElementRect = choiceElement?.getBoundingClientRect()
    if (choiceElementRect == null) return

    const offsetTop = choiceElementRect.top - parentElementRect.top
    const middle = offsetTop - (parentElementRect.height / 2) + (choiceElementRect.height / 2)
    parentElement.scrollBy(0, middle)
  }, [props.expanded])
  return (
    <div className={classWithModifiers("drop-down", props.expanded && "expanded")} role="listbox" aria-expanded={props.expanded} ref={parentRef}>
      {options.map((option, index) => (
        <button
          className={classWithModifiers("drop-down__option", choice === index && "selected")}
          onClick={() => (Choose(index), props.onSelect({ value: option.value as unknown as V, children: option.children }, index))}
          role="option"
          type="button"
          disabled={!props.expanded}
          key={index}
        >{option.children}</button>
      ))}
      {props.name && (
        <input type="hidden" name={props.name} value={options[choice].value} />
      )}
    </div>
  )
}

export default DropDown
