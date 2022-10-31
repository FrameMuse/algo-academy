import { ReactNode } from "react"

import Icon, { IconName } from "../Icon/Icon"

export interface ListItemProps {
  icon?: IconName
  children: ReactNode
}

function ListItem(props: ListItemProps) {
  return (
    <div className="list-item" role="listitem">
      <Icon className="list-item__icon" name={props.icon} />
      <div className="list-item__text">{props.children}</div>
    </div>
  )
}

export default ListItem
