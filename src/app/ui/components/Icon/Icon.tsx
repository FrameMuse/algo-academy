import "./Icon.scss"

import { SVGAttributes } from "react"
import { classMerge, classWithModifiers } from "utils/common"

export type IconName = (
  | ""
  // `string & {}` is to make property accept both plain and literal string with suggestions in VSCode
  // eslint-disable-next-line @typescript-eslint/ban-types
) | (string & {})

interface IconProps extends Exclude<SVGAttributes<SVGElement>, "aria-hidden"> {
  size?: string
  name?: IconName
  modifiers?: Array<string | number | false | null | undefined>
}

/**
 *
 * @prop `modifiers` only work when className given.
 * @prop `className` is a root class, which is modified by `name`,
 * that will be modified by `modifiers` including `name` modifications.
 *
 * Example: `"icon mentor-search__icon mentor-search__icon--chevron mentor-search__icon mentor-search__icon--chevron--up"`
 *
 * When `href` is given, will render `img` with styles of svg
 */

function Icon(props: IconProps) {
  if (props.href) {
    return (
      <img src={props.href} aria-hidden="true" style={{ "--icon-size": props.size }} className={classMerge("icon", props.className && classWithModifiers(props.className, ...props.modifiers || []))} />
    )
  }

  return (
    <svg {...props} aria-hidden="true" style={{ "--icon-size": props.size }} className={classMerge("icon", props.className && classWithModifiers(classWithModifiers(props.className, props.name), ...props.modifiers || []))}>
      <use href={`/static/icons.svg#${props.name}`} />
    </svg>
  )
}

export default Icon
