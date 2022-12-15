import "./s.scss"

import { APP_TITLE } from "app/App"
import { StaticRoutes } from "app/AppRoutes"
import ReviewsSection from "app/areas/base/sections/Reviews/ReviewsSection"
import Headings from "app/layouts/Headings/Headings"
import TabLinks from "app/layouts/TabLinks/TabLinks"
import ButtonLink from "app/ui/kit/Button/ButtonLink"
import Video from "app/ui/kit/Video/Video"
import ReadMore from "app/ui/synthetic/ReadMore/ReadMore"
import TabLink from "app/ui/synthetic/TabRouter/TabLink"
import TabRoute from "app/ui/synthetic/TabRouter/TabRoute"
import TabRouter from "app/ui/synthetic/TabRouter/TabRouter"
import { Helmet } from "react-helmet"

function HomeView() {
  return (
    <>
      <Helmet>
        <title>{APP_TITLE}</title>
      </Helmet>
      <section className="main-title-section">
        <div className="wrapper">
          <div className="main-title-wrap">
            <div className="main-title-left">
              <Headings white>
                <h1>Coding interviews made easy</h1>
                <p>Learn the techniques to breakdown and solve any coding problem. Algo academy is the ultimate resource for aceing the coding interview.</p>
              </Headings>
              <div className="button-wrap">
                <ButtonLink to={StaticRoutes.FullCourse}>Try a Question</ButtonLink>
              </div>
            </div>
            <div className="main-title-right">
              <Video src="https://vod-progressive.akamaized.net/exp=1671064912~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2590%2F8%2F212952840%2F731971441.mp4~hmac=5c2e94277b8b701084f9f67c9e80c1c759ad20999ce62712abb5e1b34eea89bb/vimeo-prod-skyfire-std-us/01/2590/8/212952840/731971441.mp4?download=1&filename=plataforma_5_-_coding_bootcamp+%28720p%29.mp4" poster="/static/images/video1.jpg" aspectRatio="1.25" />
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
              <h2>Other interview prep <br /> services vs. algo academy</h2>

              <p>Tired of grinding random algorithm problems online? are you aimlessly studying day after day only to still feel unprepared on the day of the interview? with algo academy, you’ll streamline your studying and learn the systematic knowledge needed to tackle any algorithm problem.</p>
              <p>Unlike other interview prep websites, we focus on the underlying patterns of the most commonly asked algorithms in tech interviews, not just solutions.</p>
              <p>For example, did you know most array or string problems can be solved with the two pointer or sliding window technique? or that most tree or graph algorithms involve some variation of depth-first and breadth-first search? by focusing on patterns you increase your general problem-solving ability as well as retain knowledge longer.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="wrapper">
          <div className="features-wrap">
            <Headings className="features-title">
              <h2>Course features</h2>
              <p>We have everything you need to prep for your next interview.</p>
            </Headings>
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
            <Headings className="curriculum-title">
              <h2>Course curriculum</h2>
              <p>30+ hours of practice questions, readings and in-depth solution breakdowns, covering:</p>

              <div className="button-wrap">
                <ButtonLink to={StaticRoutes.FullCourse}>Explore curriculum</ButtonLink>
              </div>
            </Headings>

            <TabRouter defaultPath="data-structures">
              <div className="curriculum-content">
                <TabLinks>
                  <TabLink to="data-structures">Data structures</TabLink>
                  <TabLink to="coding-patterns">Coding patterns</TabLink>
                  <TabLink to="bonus-content">Bonus content</TabLink>
                </TabLinks>
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
                <TabRoute path="coding-patterns">
                  <div className="curriculum-wrap">
                    <div className="curriculum-item">
                      <div className="curriculum-item-digit">01.</div>
                      <div className="curriculum-item-name">Two Pointers</div>
                    </div>
                    <div className="curriculum-item">
                      <div className="curriculum-item-digit">02.</div>
                      <div className="curriculum-item-name">Depth-first Search</div>
                    </div>
                    <div className="curriculum-item">
                      <div className="curriculum-item-digit">03.</div>
                      <div className="curriculum-item-name">Breadth-first search</div>
                    </div>
                    <div className="curriculum-item">
                      <div className="curriculum-item-digit">04.</div>
                      <div className="curriculum-item-name">Monotonic stack</div>
                    </div>
                    <div className="curriculum-item">
                      <div className="curriculum-item-digit">05.</div>
                      <div className="curriculum-item-name">Binary search</div>
                    </div>
                    <div className="curriculum-item">
                      <div className="curriculum-item-digit">06.</div>
                      <div className="curriculum-item-name">Merge intervals</div>
                    </div>
                    <div className="curriculum-item">
                      <div className="curriculum-item-digit">07.</div>
                      <div className="curriculum-item-name">Dynamic programming</div>
                    </div>
                    <div className="curriculum-item">
                      <div className="curriculum-item-digit">08.</div>
                      <div className="curriculum-item-name">And more!</div>
                    </div>
                  </div>
                </TabRoute>
                <TabRoute path="bonus-content">
                  <div className="curriculum-wrap">
                    <div className="curriculum-item">
                      <div className="curriculum-item-digit">01.</div>
                      <div className="curriculum-item-name">System Design</div>
                    </div>
                    <div className="curriculum-item">
                      <div className="curriculum-item-digit">02.</div>
                      <div className="curriculum-item-name">Coding Interview Tips</div>
                    </div>
                    <div className="curriculum-item">
                      <div className="curriculum-item-digit">03.</div>
                      <div className="curriculum-item-name">Behavioral Interview Tips</div>
                    </div>
                    <div className="curriculum-item">
                      <div className="curriculum-item-digit">04.</div>
                      <div className="curriculum-item-name">Salary Negotiation</div>
                    </div>
                    <div className="curriculum-item">
                      <div className="curriculum-item-digit">05.</div>
                      <div className="curriculum-item-name">Resume Templates</div>
                    </div>
                    <div className="curriculum-item">
                      <div className="curriculum-item-digit">06.</div>
                      <div className="curriculum-item-name">And more</div>
                    </div>
                  </div>
                </TabRoute>
              </div>
            </TabRouter>
          </div>
        </div>
      </section>

      <ReviewsSection />

      <section className="main-six-section">
        <div className="wrapper">
          <TabRouter defaultPath="1">
            <div className="main-six-wrap">
              <div className="main-six-left">
                <TabLink className="main-six-item" to="1">
                  <div className="main-six-item-title">In-depth video explanations</div>
                  <div className="main-six-item-text grey-color">
                    <p>Studying for coding interviews is difficult enough. At algo academy we believe that video is the best medium to learn new topics. each of our coding...</p>
                    <div className="button-wrap">
                      <ReadMore>
                        hidden content
                      </ReadMore>
                    </div>
                  </div>
                </TabLink>
                <TabLink className="main-six-item" to="2">
                  <div className="main-six-item-title">Hands-on coding environment</div>
                  <div className="main-six-item-text grey-color">
                    <p>Put your skills to the test. practice and learn interactively with our built-in coding workspace. pick a language. run your solution against our test cases. and if you get stuck, we got you covered with our in-depth solution videos. we have it all.</p>
                  </div>
                </TabLink>
                <TabLink className="main-six-item" to="3">
                  <div className="main-six-item-title">All-in-one solution</div>
                  <div className="main-six-item-text grey-color">
                    <p>Studying algorithms is not enough to prepare for coding interviews anymore. many companies are stepping up their interview style and expect much...</p>
                    <div className="button-wrap">
                      <ReadMore>
                        hidden content
                      </ReadMore>
                    </div>
                  </div>
                </TabLink>
              </div>
              <div className="main-six-right">
                <TabRoute path="1">
                  <Video src="https://vod-progressive.akamaized.net/exp=1671064912~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2590%2F8%2F212952840%2F731971441.mp4~hmac=5c2e94277b8b701084f9f67c9e80c1c759ad20999ce62712abb5e1b34eea89bb/vimeo-prod-skyfire-std-us/01/2590/8/212952840/731971441.mp4?download=1&filename=plataforma_5_-_coding_bootcamp+%28720p%29.mp4" poster="/static/images/video2.jpg" />
                </TabRoute>
                <TabRoute path="2">
                  2
                </TabRoute>
                <TabRoute path="3">
                  3
                </TabRoute>
              </div>
            </div>
          </TabRouter>
        </div>
      </section>

      <section className="lang-section">
        <div className="wrapper">
          <div className="lang-wrap">
            <Headings className="lang-title">
              <h2>We support these programming languages</h2>
              <p>It can be frustrating to find an interview prep resource with solutions written in programming languages you’re unfamiliar with. that’s why we offer support in 5 popular languages, with more on the way!</p>
            </Headings>
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
              <Headings white>
                <h2>Ace your next coding interview</h2>
                <p>Learn what it takes to master all aspects of the coding interview. level up your interview skills today!</p>
              </Headings>

              <div className="ace-buttons">
                <ButtonLink to={StaticRoutes.Purchase}>Join now</ButtonLink>
                <ButtonLink color="white" outline to={StaticRoutes.FullCourse}>Explore curriculum</ButtonLink>
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
