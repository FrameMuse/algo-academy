import "./LessonArticles.scss"

import { NavLink } from "react-router-dom"

function LessonArticles() {
  return (
    <section className="articles-section">
      <div className="wrapper">
        <div className="articles-wrap">
          <div className="articles-item">
            <div className="articles-item-image">
              <span className="padding"></span>
              <img src="/static/images/article1.jpg" alt="" />
            </div>
            <div className="articles-item-title">
              <div>Focus on patterns, not solutions</div>
            </div>
            <div className="articles-item-description">
              <p>We focus on the underlying patterns that most coding interview problems share. You will learn how to arrive at the answer, not just what the answer is. Our focus on technique, not rote memorization, is what allows our candidates to</p>
              <div className="button-wrap">
                <NavLink className="read-more" to="">read more</NavLink>
              </div>
            </div>
          </div>
          <div className="articles-item">
            <div className="articles-item-image">
              <span className="padding"></span>
              <img src="/static/images/article2.jpg" alt="" />
            </div>
            <div className="articles-item-title">
              <div>Study with our all-in-one platform</div>
            </div>
            <div className="articles-item-description">
              <p>Prep for your next interview with our all-in-one platform. No need to jump between YouTube tutorials, books, or Leetcode; our curriculum covers algorithms, data structures, coding patterns, system design, behavioral interviews, and more!</p>
              <div className="button-wrap">
                <NavLink className="read-more" to="">read more</NavLink>
              </div>
            </div>
          </div>
          <div className="articles-item">
            <div className="articles-item-image">
              <span className="padding"></span>
              <img src="/static/images/article3.jpg" alt="" />
            </div>
            <div className="articles-item-title">
              <div>Increase your salary by $10,000 or more</div>
            </div>
            <div className="articles-item-description">
              <p>Statistically, the best way to increase your salary is to switch jobs. But you can only do that if you ace your coding interviews. Companies can’t afford to let qualified candidates slip by and will use money to fight for you. These negotiation</p>
              <div className="button-wrap">
                <NavLink className="read-more" to="">read more</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LessonArticles
