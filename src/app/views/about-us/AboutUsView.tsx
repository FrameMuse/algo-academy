import "./AboutUsView.scss"

import { Headings } from "app/areas/base"
import { Helmet } from "react-helmet"

function AboutUsView() {
  return (
    <section className="page-section">
      <Helmet>
        <title>{process.env.TITLE + " | " + "Mission"}</title>
      </Helmet>
      <div className="wrapper">
        <h1>Algo academy’s mission</h1>
        <br />
        <br />
        <br />
        <Headings>
          <h2>Helping software engineers ace their coding interviews</h2>
          <p>
            Over the years, coding interviews have been getting more and more difficult. with faang-style interviews taking over the industry and the difficulty of algorithm questions increasing, {"it's"} no wonder why most software engineers dread coding interviews. one of the biggest pitfalls most people fall into is thinking that they need to {`"grind leet-code"`} in order to prepare for the big interview. but here at algo academy, that {"couldn't"} be further from the truth. we firmly believe in studying smart, not hard. so what makes us different? well, instead of focusing on rote memorization and solutions, we focus on the underlying patterns of algorithms.
            <br />
            <br />
            After undergoing countless interviews, we discovered that most coding problems share common techniques. understanding these techniques helps us develop patterns which we can then use to solve similar problems. the major benefits of pattern-based thinking are faster study time and better problem-solving skills, as well as retaining knowledge for much longer. by learning patterns, you develop a skill you will use your entire career.
          </p>
        </Headings>


        <div className="founder-block">
          <h2>Our founder’s story</h2>

          <div className="founder">
            <div className="founder-left">
              <div className="founder-img">
                <img src="/static/images/founder.jpg" alt="founder's photo" />
              </div>
              <div className="founder-name">Matthew guest</div>
              <div className="founder-position">Founder &amp; ceo of algo academy</div>
            </div>
            <div className="founder-right">
              <p>
                After receiving my {"bachelor's"} degree in economics from the university of washington tacoma in 2017, i made the decision to transition into software engineering.
                Initially, i enrolled in coding dojo, a coding bootcamp based in bellevue, washington.
                I decided to withdraw after only one week.
                I was always more of a self-learner and {"didn't"} like the bootcamp environment.
                After the bootcamp, I embarked on a mission to become a mobile app developer, spending my time studying computer science, programming fundamentals, and algorithms.
                Eventually, I was able to land a role at a startup, which jump-started my entire career.
                Using my experience and with a lot of trial and error, I was able to land a role at a faang company.
                A dream which I thought {"i'd"} never be able to achieve.
              </p>
              <p>
                I was able to rise from nothing to establishing myself in a growing industry as a self-taught software developer.
                {"I'm"} a firm believer that if i can do it, anyone can.
                Which is why i have such a great passion for helping others ace their coding interviews.
              </p>
              <p>
                I also run a you-tube channel, so check it out if {"you're"} interested in my story, interview prep tips, or software engineering in general.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsView
