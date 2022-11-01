import "./EditableAvatar.scss"

import Icon from "app/ui/kit/Icon/Icon"
import { ChangeEvent, useState } from "react"
import { classWithModifiers } from "utils/common"

interface EditableAvatarProps {
  name?: string
  image: string
  onChange?(file: File): void | Promise<unknown>
}

function EditableAvatar(props: EditableAvatarProps) {
  const [image, setImage] = useState(props.image)
  const [pending, setPending] = useState(false)

  async function onChange(event: ChangeEvent<HTMLInputElement>) {
    const target = event.currentTarget

    // checks
    const files = target.files
    if (files === null) return

    const file = files[0] as File | undefined
    if (file == null) return

    // awaits
    if (props.onChange) {
      setPending(true)
      await props.onChange?.(file)
      setPending(false)
    }

    // updates
    setImage(URL.createObjectURL(file))
  }

  return (
    <div className={classWithModifiers("editable-avatar", pending && "pending")}>
      <img src={image} alt="avatar" className="editable-avatar__image" />
      <label className="editable-avatar__cover">
        <Icon className="editable-avatar__icon" name="touch" />
        <input className="editable-avatar__input" name={props.name} type="file" accept="image/*" onChange={onChange} aria-hidden={false} />
      </label>
    </div>
  )
}

export default EditableAvatar
