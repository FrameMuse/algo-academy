import "./LessonView.scss"

import Article from "app/ui/kit/Article/Article"
import ButtonIcon from "app/ui/kit/Button/ButtonIcon"
import ButtonLink from "app/ui/kit/Button/ButtonLink"
import Selector from "app/ui/kit/Selector/Selector"
import Video from "app/ui/kit/Video/Video"
import { Helmet } from "react-helmet"
import useParam from "utils/hooks/useParam"

function LessonView() {
  const chapter = useParam("chapter", true)
  window.scrollTo(0, 0)
  return (
    <div className="wrapper">
      <Helmet>
        <title>{process.env.TITLE + " | " + "Lesson " + chapter}</title>
      </Helmet>
      <section className="article-section">
        <div className="article-top">
          <div>
            <ButtonLink color="white" size="small" squared iconLeft="arrow-left" iconRight="" to="..">Back to Course</ButtonLink>
          </div>
          <div className="article-nav">
            <ButtonIcon name="chevron-left" color="gray" size="smaller" squared ariaLabel="Previous chapter" />
            <div className="article-nav-chapter">Chapter {chapter}</div>
            <ButtonIcon name="chevron-right" color="gray" size="smaller" squared ariaLabel="Next chapter" />
          </div>
          <div className="article-status">
            <Selector defaultValue="Incomplete">
              <option value="Incomplete">Not completed</option>
              <option value="complete">Completed</option>
            </Selector>
          </div>
        </div>


        <Article>
          <h2>Understanding the Problem</h2>

          <Video poster="/static/images/video1.jpg" />

          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          <h5>Section 1</h5>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>



          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
          </ul>

          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>

          <img src="/static/images/video1.jpg" alt="" />

          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>

          <ol>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
          </ol>

          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>
        </Article>
      </section>
    </div>
  )
}

export default LessonView
