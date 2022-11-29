import "./DropDown.scss"

import useTheme from "app/ui/synthetic/Theme/useTheme"
import { Children, ComponentProps, ReactElement, ReactNode, useEffect, useRef, useState } from "react"
import { useKeyPressEvent } from "react-use"
import { classWithModifiers } from "utils/common"

interface DropDownProps<V> {
  name?: string
  default?: V
  /**
   * Open in up direction.
   */
  upwards?: boolean
  size?: "small" | "big"
  expanded: boolean
  onSelect(option: { value: V, children: ReactNode }, index: number): void

  children: ReactElement<ComponentProps<"option">> | ReactElement<ComponentProps<"option">>[]
}

function DropDown<V = string | undefined>(props: DropDownProps<V>) {
  const theme = useTheme()

  const elementRef = useRef<HTMLDivElement>(null)

  const options = Children.map(props.children, child => child.props)
  const initChoice = props.default ? options.findIndex(option => option.value === props.default) : -1

  const [choice, Choose] = useState<number>(initChoice)
  const [choicePointer, setChoicePointer] = useState<number>(initChoice)

  function shiftChoicePointer(by: 1 | -1) {
    setChoicePointer(choicePointer => {
      const newChoicePointer = choicePointer + by
      console.log(choicePointer, newChoicePointer)
      if (newChoicePointer >= options.length) {
        return 0
      }
      if (newChoicePointer < 0) {
        return options.length - 1
      }
      return newChoicePointer
    })
  }

  useEffect(() => {
    if (!props.expanded) return
    if (elementRef.current == null) return
    // https://jsfiddle.net/cxe73c22/
    const element = elementRef.current
    const parentElementRect = element.getBoundingClientRect()

    const choiceElement = element.children.item(choice)
    const choiceElementRect = choiceElement?.getBoundingClientRect()
    if (choiceElementRect == null) return

    const offsetTop = choiceElementRect.top - parentElementRect.top
    const middle = offsetTop - (parentElementRect.height / 2) + (choiceElementRect.height / 2)

    element.scrollBy(0, middle)
  }, [props.expanded])
  // Change focus when choice pointer updated
  useEffect(() => {
    if (elementRef.current == null) return

    const choiceElement = elementRef.current.children.item(choicePointer)
    if (!(choiceElement instanceof HTMLElement)) return

    choiceElement.focus()
  }, [choicePointer])
  // Shift choice pointer on keys pressed
  useKeyPressEvent(event => ["ArrowUp", "ArrowDown"].includes(event.key), event => {
    if (!props.expanded) return
    if (elementRef.current == null) return

    event.preventDefault()

    if (event.key === "ArrowUp") shiftChoicePointer(+1)
    if (event.key === "ArrowDown") shiftChoicePointer(-1)
  })
  return (
    <div className={classWithModifiers("drop-down", props.size, props.expanded && "expanded", props.upwards && "upwards", theme)} role="listbox" aria-expanded={props.expanded} ref={elementRef}>
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
        <input type="hidden" name={props.name} value={options[choice]?.value} />
      )}
    </div>
  )
}

export default DropDown
