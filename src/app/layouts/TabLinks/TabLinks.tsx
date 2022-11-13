import "./TabLinks.scss"

import TabLink from "app/ui/synthetic/TabRouter/TabLink"
import useTheme from "app/ui/synthetic/Theme/useTheme"
import { Children, cloneElement, ReactElement } from "react"
import { classWithModifiers } from "utils/common"

interface TabLinksProps {
  children: ReactElement<HTMLElement> | ReactElement<HTMLElement>[]
}

/**
 * This particular component is suited for `TabLink` components, applying styles to them.
 * 
 * If a child is instance of `TabLink`, will replace className with `tab-links__link`.
 * 
 * If the last element is `Button`, it will be spaced to the right.
 */
function TabLinks(props: TabLinksProps) {
  const theme = useTheme()

  return (
    <div className={classWithModifiers("tab-links", theme)}>
      {Children.map(props.children, child => (
        cloneElement(child, {
          ...child.props,
          className: (child.type === TabLink) ? "tab-links__link" : child.props.className
        })
      ))}
    </div>
  )
}

export default TabLinks
