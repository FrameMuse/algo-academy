import "./s.scss"

import { EAppRoutes } from "app/AppRoutes"
import ButtonLink from "app/ui/components/Button/ButtonLink"
import Video from "app/ui/components/Video/Video"
import TabLink from "app/ui/containers/TabRouter/TabLink"
import TabRoute from "app/ui/containers/TabRouter/TabRoute"
import TabRouter from "app/ui/containers/TabRouter/TabRouter"

import __TESTVIDEO__ from "./video.mp4"

function HomeView() {
  return (
    <>
      <section className="main-title-section">
        <div className="wrapper">
          <div className="main-title-wrap">
            <div className="main-title-left">
              <h1>Coding interviews made easy</h1>
              <p className="subtitle">learn the techniques to breakdown and solve any coding problem. algo academy is the ultimate resource for aceing the coding interview.</p>

              <div className="button-wrap">
                <ButtonLink iconRight="arrow-right" to={EAppRoutes.FullCourse}>Try a Question</ButtonLink>
              </div>
            </div>
            <div className="main-title-right">
              <Video src={__TESTVIDEO__} poster="/static/images/video1.jpg" aspectRatio="1.25" />
            </div>
          </div>
        </div>
      </section>

      <section className="main-second-section">
        <div className="wrapper">
          <div className="main-second-wrap">
            <div className="main-second-img">
              <img src="/static/images/main-second-img.svg" alt="" />
            </div>
            <div className="main-second-text">
              <h2>Other interview prep services vs. algo academy</h2>

              <p>Tired of grinding random algorithm problems online? are you aimlessly studying day after day only to still feel unprepared on the day of the interview? with algo academy, you’ll streamline your studying and learn the systematic knowledge needed to tackle any algorithm problem.</p>
              <p>Unlike other interview prep websites, we focus on the underlying patterns of the most commonly asked algorithms in tech interviews, not just solutions.</p>
              <p>For example, did you know most array or string problems can be solved with the two pointer or sliding window technique? or that most tree or graph algorithms involve some variation of depth-first and breadth-first search? by focusing on patterns you increase your general problem-solving ability as well as retain knowledge longer.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section blue1-bg">
        <div className="wrapper">
          <div className="features-wrap">
            <div className="features-title">
              <h2>Course features</h2>
              <p className="subtitle">We have everything you need to prep for your next interview.</p>
            </div>
            <div className="features-list">
              <div className="features-item">
                <div className="features-item-icon">
                  <img src="/static/images/features1.png" alt="" />
                </div>
                <div className="features-item-title">50 questions</div>
                <div className="features-item-text">We’ve chosen 50 of the best coding interview questions to prepare you for your next interview. our questions cover the most important algorithms one could face in an interview.</div>
              </div>
              <div className="features-item">
                <div className="features-item-icon">
                  <img src="/static/images/features2.png" alt="" />
                </div>
                <div className="features-item-title">In-depth videos</div>
                <div className="features-item-text">Struggling to understand a concept? each of our questions contains an in-depth two-part video walkthrough to help solidify your understanding. never feel lost again.</div>
              </div>
              <div className="features-item">
                <div className="features-item-icon">
                  <img src="/static/images/features3.png" alt="" />
                </div>
                <div className="features-item-title">Data structures course</div>
                <div className="features-item-text">Data structures are the building blocks of all algorithms. our curriculum includes videos on every data structure you’d need to know to succeed in any interview.</div>
              </div>
              <div className="features-item">
                <div className="features-item-icon">
                  <img src="/static/images/features4.png" alt="" />
                </div>
                <div className="features-item-title">System design course</div>
                <div className="features-item-text">Building large-scale distributed systems is no easy task. our curriculum includes all the fundamentals you need to properly design scalable applications.</div>
              </div>
              <div className="features-item">
                <div className="features-item-icon">
                  <img src="/static/images/features5.png" alt="" />
                </div>
                <div className="features-item-title">Soft skills</div>
                <div className="features-item-text">The best way to become a well-rounded candidate is to balance your technical knowledge with strong soft skills. learn how to excel in behavioral interviews and even negotiate a higher salary!</div>
              </div>
              <div className="features-item">
                <div className="features-item-icon">
                  <img src="/static/images/features6.png" alt="" />
                </div>
                <div className="features-item-title">Space-time complexity analysis</div>
                <div className="features-item-text">Every coding interview will ask about space-time complexity. understanding this concept is key to passing interviews. all of our explanations include a space-time complexity breakdown to further your understanding.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="curriculum-section">
        <div className="wrapper">
          <div className="curriculum-block">
            <div className="curriculum-title">
              <h2>Course curriculum</h2>
              <p className="subtitle">30+ hours of practice questions, readings and in-depth solution breakdowns, covering:</p>

              <div className="button-wrap">
                <ButtonLink iconRight="arrow-right" to={EAppRoutes.FullCourse}>Explore curriculum</ButtonLink>
              </div>
            </div>

            <TabRouter defaultPath="data-structures">
              <div className="curriculum-content">
                <div className="curriculum-tabs">
                  <TabLink className="curriculum-tabs-item" to="data-structures">Data structures</TabLink>
                  <TabLink className="curriculum-tabs-item" to="coding-patterns">Coding patterns</TabLink>
                  <TabLink className="curriculum-tabs-item" to="bonus-content">Bonus content</TabLink>
                </div>
                <TabRoute path="data-structures">
                  <div className="curriculum-wrap">
                    <div className="curriculum-item">
                      <div className="curriculum-item-digit">01.</div>
                      <div className="curriculum-item-name">Arrays</div>
                    </div>
                    <div className="curriculum-item">
                      <div className="curriculum-item-digit">02.</div>
                      <div className="curriculum-item-name">Hash maps</div>
                    </div>
                    <div className="curriculum-item">
                      <div className="curriculum-item-digit">03.</div>
                      <div className="curriculum-item-name">Linked lists</div>
                    </div>
                    <div className="curriculum-item">
                      <div className="curriculum-item-digit">04.</div>
                      <div className="curriculum-item-name">Trees</div>
                    </div>
                    <div className="curriculum-item">
                      <div className="curriculum-item-digit">05.</div>
                      <div className="curriculum-item-name">Graphs</div>
                    </div>
                    <div className="curriculum-item">
                      <div className="curriculum-item-digit">06.</div>
                      <div className="curriculum-item-name">Heaps</div>
                    </div>
                    <div className="curriculum-item">
                      <div className="curriculum-item-digit">07.</div>
                      <div className="curriculum-item-name">Tries</div>
                    </div>
                    <div className="curriculum-item">
                      <div className="curriculum-item-digit">08.</div>
                      <div className="curriculum-item-name">Stack</div>
                    </div>
                  </div>
                </TabRoute>
              </div>
            </TabRouter>
          </div>
        </div>
      </section>

      <section className="reviews-section" id="reviews">
        <div className="wrapper">
          <div className="reviews-title">
            <h2>What our users are saying</h2>
            <p className="subtitle">Our course has helped many software engineers ace their coding interviews. will you be our next success story?</p>
          </div>

          <div className="reviews-block">
            <div className="reviews-arrow prev">
              <svg width="28" height="45">

              </svg>
            </div>

            <div className="reviews-arrow next">
              <svg width="28" height="45">
                {/*  */}
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="main-six-section blue1-bg">
        <div className="wrapper">
          <div className="main-six-wrap">
            <div className="main-six-left">
              <div className="main-six-item">
                <div className="main-six-item-title">In-depth video explanations</div>
                <div className="main-six-item-text grey-color">
                  <p>Studying for coding interviews is difficult enough. at algo academy we believe that video is the best medium to learn new topics. each of our coding...</p>
                  <div className="button-wrap">
                    <a href="#" className="read-more"> read more</a>
                  </div>
                </div>
              </div>
              <div className="main-six-item active">
                <div className="main-six-item-title">Hands-on coding environment</div>
                <div className="main-six-item-text grey-color">
                  <p>Put your skills to the test. practice and learn interactively with our built-in coding workspace. pick a language. run your solution against our test cases. and if you get stuck, we got you covered with our in-depth solution videos. we have it all.</p>
                </div>
              </div>
              <div className="main-six-item">
                <div className="main-six-item-title">All-in-one solution</div>
                <div className="main-six-item-text grey-color">
                  <p>Studying algorithms is not enough to prepare for coding interviews anymore. many companies are stepping up their interview style and expect much...</p>
                  <div className="button-wrap">
                    <a href="#" className="read-more">Read more</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-six-right">
              <Video src={__TESTVIDEO__} poster="/static/images/video2.jpg" />
            </div>
          </div>
        </div>
      </section>

      <section className="lang-section">
        <div className="wrapper">
          <div className="lang-wrap">
            <div className="lang-title">
              <h2>We support these programming languages</h2>
              <p className="subtitle">It can be frustrating to find an interview prep resource with solutions written in programming languages you’re unfamiliar with. that’s why we offer support in 5 popular languages, with more on the way!</p>
            </div>
            <div className="lang-items">
              <div className="lang-item">
                <div className="lang-item-icon">
                  <img src="/static/images/lang1.png" alt="" />
                </div>
                <div className="lang-item-name">Python</div>
              </div>
              <div className="lang-item">
                <div className="lang-item-icon">
                  <img src="/static/images/lang2.png" alt="" />
                </div>
                <div className="lang-item-name">TypeScript</div>
              </div>
              <div className="lang-item">
                <div className="lang-item-icon">
                  <img src="/static/images/lang3.png" alt="" />
                </div>
                <div className="lang-item-name">JavaScript</div>
              </div>
              <div className="lang-item">
                <div className="lang-item-icon">
                  <img src="/static/images/lang4.png" alt="" />
                </div>
                <div className="lang-item-name">Java</div>
              </div>
              <div className="lang-item">
                <div className="lang-item-icon">
                  <img src="/static/images/lang5.png" alt="" />
                </div>
                <div className="lang-item-name">C++</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ace-section">
        <div className="wrapper">
          <div className="ace-wrap">
            <div className="ace-text">
              <h2>Ace your next coding interview</h2>
              <p className="subtitle">Learn what it takes to master all aspects of the coding interview. level up your interview skills today!</p>

              <div className="ace-buttons">
                <ButtonLink iconRight="arrow-right" to={EAppRoutes.Purchase}>Join now</ButtonLink>
                <ButtonLink color="white" outline iconRight="arrow-right" to={EAppRoutes.FullCourse}>Explore curriculum</ButtonLink>
              </div>
            </div>
            <div className="ace-img">
              <img src="/static/images/ace.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeView
