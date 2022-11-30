import "./AdminFeedbackView.scss"

import useFeedbacks from "api/hooks/feedbacks/useFeedbacks"
import { Review } from "app/areas/base"
import Box from "app/layouts/Box/Box"
import Headings from "app/layouts/Headings/Headings"
import ErrorCover from "app/ui/synthetic/ErrorCover/ErrorCover"
import LoaderCover from "app/ui/synthetic/Loader/LoaderCover"

function AdminFeedbackView() {
  const { feedbacks, isLoading } = useFeedbacks()

  if (isLoading) {
    return <LoaderCover />
  }

  if (feedbacks == null) {
    return <ErrorCover>Feedbacks is null.</ErrorCover>
  }

  return (
    <Box className="admin-feedback">
      <Headings>
        <h2>Feedback</h2>
      </Headings>
      <div className="admin-feedback__list">
        {feedbacks.map((feedback, index) => (
          <Review key={index}>
            <Headings>
              <h6>{feedback.title}</h6>
              <p>{feedback.content}</p>
            </Headings>
          </Review>
        ))}
      </div>
    </Box>
  )
}

export default AdminFeedbackView
