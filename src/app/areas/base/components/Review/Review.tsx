import "./Review.scss"

import Icon from "app/ui/kit/Icon/Icon"
import Person from "app/ui/synthetic/Person/Person"
import { ReactNode } from "react"
import { USER_GUEST } from "store/reducers/user"

interface ReviewProps {
  children?: ReactNode
}

function Review(props: ReviewProps) {
  return (
    <div className="review">
      <Icon className="review__quote" name="quote" />
      {props.children}
      <div className="review__row">
        <Person avatar={USER_GUEST.avatar} name="davis westervelt" bio="Recruiter at flexport" />
        <Icon className="review__quote" name="quote" />
      </div>
    </div>
  )
}

export default Review
