import { SVGAttributes } from "react"
import { classMerge, classWithModifiers } from "utils/common"


export type IconName =
  | "chevron-left"
  | "chevron-right"
  | "chevron-down"
  | "gear"
  | "arrow-right"
  | "arrow-left"
  | "question-mark"
  | "exclamation-mark"
  | "play-circle"
  | "quote"
  | "plus"
  | "minus"
  | "cross"
  | "crown"
  | "check"
  | "tag"
  | "touch"
  | "home"
  | "font-size"
  | "github"
  | "google"
  | "facebook"
  // | "asd"
  // eslint-disable-next-line @typescript-eslint/ban-types
  | (string & {})

interface IconProps extends SVGAttributes<SVGElement> {
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
 */

function Icon(props: IconProps) {
  if (props.href) {
    return (
      <img src={props.href} className={classMerge("icon", props.className && classWithModifiers(props.className, ...props.modifiers || []))} />
    )
  }

  return (
    <svg {...props} className={classMerge("icon", props.className && classWithModifiers(classWithModifiers(props.className, props.name), ...props.modifiers || []))}>
      <use href={`/static/icons.svg#${props.name}`} />
    </svg>
  )
}


export default Icon
