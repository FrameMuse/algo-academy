import "./List.scss"

import { Children, ReactElement } from "react"

import { IconName } from "../Icon/Icon"
import ListItem, { ListItemProps } from "./ListItem"

interface ListProps {
  icon?: IconName
  children: ReactElement<ListItemProps> | ReactElement<ListItemProps>[]
}

function List(props: ListProps) {
  return (
    <div className="list" role="list">
      {Children.map(props.children, child => (
        <ListItem icon={child.props.icon ?? props.icon} key={child.key}>
          {child.props.children}
        </ListItem>
      ))}
    </div>
  )
}

export default List
