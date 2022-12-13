import Column from "app/layouts/Column/Column"
import Row from "app/layouts/Row/Row"
import Button from "app/ui/kit/Button/Button"
import Field from "app/ui/kit/Field/Field"
import { useEffect, useRef, useState } from "react"
import { inputValue } from "utils/common"

interface EditableListProps {
  defaultValue?: string[]
  onChange?(value: string[]): void
}

export function EditableList(props: EditableListProps) {
  const uniqueID = useRef(0)
  const [items, setItems] = useState<{ id: number, value: string }[]>(props.defaultValue?.map(value => ({ id: uniqueID.current++, value })) || [])

  function addEmpty() {
    uniqueID.current += 1
    setItems(items => [...items, { id: uniqueID.current, value: "" }])
  }

  function edit(id: number, newValue: string) {
    setItems(items => {
      const item = items.find(item => item.id === id)
      if (item == null) return items

      item.value = newValue

      return [...items]
    })
  }

  function remove(id: number) {
    setItems(items => items.filter(item => item.id !== id))
  }

  useEffect(() => {
    props.onChange?.(items.map(item => item.value))
  }, [items])

  return (
    <Column>
      {items.map(item => (
        <Row key={item.id}>
          <Field width="35em" value={item.value} onChange={inputValue(value => edit(item.id, value))} />
          <Button onClick={() => remove(item.id)}>Remove</Button>
        </Row>
      ))}
      <Button onClick={addEmpty}>Add more</Button>
    </Column>
  )
}
