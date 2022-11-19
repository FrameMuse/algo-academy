import "./ButtonGroup.scss"

import { ButtonBaseProps } from "app/ui/kit/Button/Button.types"
import _ from "lodash"
import { Children, cloneElement, ReactElement } from "react"

interface ButtonGroupProps extends ButtonBaseProps {
  children: ReactElement<ButtonBaseProps> | ReactElement<ButtonBaseProps>[]
}

/**
 * Button props can be passed as a default values.
 */
function ButtonGroup(props: ButtonGroupProps) {
  return (
    <div className="button-group">
      {Children.map(props.children, child => (
        cloneElement(child, { ..._.omit(props, "children"), ...child.props })
      ))}
    </div>
  )
}

export default ButtonGroup
