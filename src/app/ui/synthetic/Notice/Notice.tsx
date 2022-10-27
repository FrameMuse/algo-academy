import "./Notice.scss"

import { ReactNode } from "react"

interface NoticeProps {
  title: ReactNode
  desc: ReactNode
  element?: ReactNode
}

function Notice(props: NoticeProps) {
  return (
    <div className="notice">
      <div className="notice__info">
        <div className="notice__title">{props.title}</div>
        <div className="notice__desc">{props.desc}</div>
      </div>
      <div className="notice__element">
        {props.element}
      </div>
    </div>
  )
}

export default Notice
