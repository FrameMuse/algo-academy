module ElementUtils {
  export function getCenter(element: HTMLElement) {
    return (element.scrollWidth / 2) - (element.offsetWidth / 2)
  }

  /**
   * Checks if element is visible in screen.
   * 
   * This is possible via [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#creating_an_intersection_observer) as well.
   * But in this case, it's simplier to use ["old method"](https://usefulangle.com/post/113/javascript-detecting-element-visible-during-scroll).
   */
  export function isIntersected(element: Element, partial?: boolean) {
    const position = element.getBoundingClientRect()

    // checking whether fully visible
    if (position.top >= 0 && position.bottom <= window.innerHeight) {
      return true
    }

    if (partial) {
      // checking for partial visibility
      if (position.top < window.innerHeight && position.bottom >= 0) {
        return true
      }
    }

    return false
  }
}

export default ElementUtils
