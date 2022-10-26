import "./Slider.scss"

import { Children, ReactNode, useEffect, useRef } from "react"
import { getCenterOfElement } from "utils/common"

import ButtonIcon from "../Button/ButtonIcon"

interface SliderProps {
  emptyFallback?: ReactNode
  children: ReactNode
}

function Slider(props: SliderProps) {
  const innerRef = useRef<HTMLDivElement>(null)

  function prev() {
    slideBy(-1)
  }
  function next() {
    slideBy(+1)
  }
  function slideBy(by: 1 | -1) {
    if (!innerRef.current) return

    const firstChild = innerRef.current.children[0]
    if (!(firstChild instanceof HTMLElement)) return
    const secondChild = innerRef.current.children[1]
    if (!(secondChild instanceof HTMLElement)) return

    // Calc the "offsetLeft" difference between two elements to account all gaps
    const scrollInterval = secondChild.offsetLeft - firstChild.offsetLeft

    innerRef.current.scrollBy({
      behavior: "smooth",
      left: scrollInterval * by
    })
  }

  useEffect(() => {
    if (!innerRef.current) return

    innerRef.current.scrollTo(getCenterOfElement(innerRef.current), 0)
  }, [])

  const children = Children.toArray(props.children)

  return (
    <div className="slider">
      <div className="slider__buttons">
        <ButtonIcon name="chevron-left" size="small" color="gray" squared onClick={prev} />
        <ButtonIcon name="chevron-right" size="small" color="gray" squared onClick={next} />
      </div>
      <div className="slider__container">
        <div className="slider__inner" ref={innerRef}>
          {children.length === 0 && props.emptyFallback}
          {children.map((child, index) => (
            <div className="slider__item" key={index}>{child}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Slider
