import "./ProblemView.scss"

import ButtonIcon from "app/ui/kit/Button/ButtonIcon"
import Selector from "app/ui/kit/Selector/Selector"

function ProblemView() {
  return (
    <>
      <header>
        <div className="code-header-wrap">
          <a href="/" className="logo">&lt;Algo Academy/&gt;</a>

          <div className="header-level">
            <ButtonIcon name="chevron-left" size="little" squared ariaLabel="Previous" />
            <div className="header-level-text">Level Order Traversal</div>
            <ButtonIcon name="chevron-right" size="little" squared ariaLabel="Next" />
          </div>

          <div className="header-code-right">
            <div className="header-status">
              <Selector defaultValue="1">
                <option value="1">Not completed</option>
                <option value="2">Completed</option>
              </Selector>
            </div>

            <div className="header-time">
              <img src="/static/images/header-time.svg" alt="" className="header-time-img" />
              <div className="header-time-inner">05:10</div>
            </div>

            <a href="#" className="header-feedback show-feedback-modal">
              <svg width="24" height="24">
                ?
              </svg>
              <span className="header-feedback-text">Submit Feedback</span>
            </a>
          </div>
        </div>
      </header>
      <section className="code-section">
        <div className="code-left">
          {/* <a href="#" className="code-home">
            <svg width="20" height="20">
              <use xlink:href="sprites.svg#home"></use>
            </svg>
          </a> */}

          <div className="code-tabs code-left-tabs">
            <a href="#" className="code-tabs-item code-tab-active">Problem Statment</a>
            <a href="#" className="code-tabs-item">Solution Video</a>
          </div>

          <h2>Interview Question</h2>
          <h3>Level Order Traversal</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>

          <div className="code-example">
            <div className="code-example-title">Example #1</div>
            <div className="code-example-content">
              Input: [2, 1, 5, 1, 3, 2], k=3 <br />
              Output: 9 <br />
              Explanation: Subarray with maximum sum is [5, 1, 3].
            </div>
          </div>
          <div className="code-example">
            <div className="code-example-title">Example #2</div>
            <div className="code-example-content">
              Input: [2, 1, 5, 1, 3, 2], k=3 <br />
              Output: 9 <br />
              Explanation: Subarray with maximum sum is [5, 1, 3].
            </div>
          </div>
          <div className="code-example">
            <div className="code-example-title">Example #3</div>
            <div className="code-example-content">
              Input: [2, 1, 5, 1, 3, 2], k=3 <br />
              Output: 9 <br />
              Explanation: Subarray with maximum sum is [5, 1, 3].
            </div>
          </div>

          <h4>Constraints</h4>
          <ul>
            <li>sample constraint one</li>
            <li>sample constraint two</li>
            <li>sample constraint three</li>
          </ul>
        </div>
        <div className="code-right">
          {/* <a href="#" className="settings-button">
                  <svg width="20" height="20">
                    <use xlink:href="sprites.svg#settings"></use>
                  </svg>
                  <span className="settings-button-text">Settings</span>
                </a> */}

          <div className="code-tabs code-right-tabs">
            <a href="#" className="code-tabs-item code-tab-active">Code</a>
            <a href="#" className="code-tabs-item">Hints</a>
            <a href="#" className="code-tabs-item">Templates</a>
            <a href="#" className="code-tabs-item">Tests</a>
            <a href="#" className="code-tabs-item">Notes</a>
            <a href="#" className="code-tabs-item">Solution</a>
          </div>

          <div className="code-place">
            {/* <!-- Место для вставки редактора --> */}
          </div>

          <div className="code-bottom">
            <div className="code-bottom-line">
              <div className="code-bottom-buttons">
                <a href="#" className="code-button code-button-red">Run Code</a>
                <a href="#" className="code-button code-button-reset">Reset</a>
              </div>
              <div className="code-bottom-lang">
                {/* <div className="select">
                        <div className="select-top">TypeScript</div>
                        <div className="select-list">
                          <div className="select-list-item">TypeScript</div>
                          <div className="select-list-item">Javascript</div>
                          <div className="select-list-item">Python</div>
                          <div className="select-list-item">Java</div>
                          <div className="select-list-item">C++</div>
                        </div>
                      </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProblemView
