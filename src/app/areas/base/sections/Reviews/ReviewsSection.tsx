import "./ReviewsSection.scss"

import Slider from "app/ui/kit/Slider/Slider"

import { Headings } from "../.."
import Review from "../../components/Review/Review"

function ReviewsSection() {
  return (
    <section className="reviews-section" id="reviews">
      <div className="wrapper">
        <Headings className="reviews-title">
          <h2>What our users are saying</h2>
          <p>Our course has helped many software engineers ace their coding interviews. will you be our next success story?</p>
        </Headings>
        <div className="reviews-block">
          <Slider>
            {[...Array(15)].map((_, index) => (
              <Review key={index}>
                <Headings>
                  <h6>Title of the content</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc curabitur nibh blandit in. At vel dignissim neque ipsum. Proin mattis cursus rhoncus amet sed. Nunc condimentum mi ipsum id scelerisque tempus sagittis, fermentum lectus. A, in risus morbi id.
                  </p>
                </Headings>
              </Review>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection
