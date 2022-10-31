import "./PurchaseView.scss"

import { Headings } from "app/areas/base"
import { PopupCheckout } from "app/areas/purchase"
import Button from "app/ui/kit/Button/Button"
import List from "app/ui/kit/List/List"
import { Modal } from "react-modal-global"

function PurchaseView() {
  return (
    <section className="page-section pricing-section">
      <div className="wrapper">
        <div className="title-block">
          <h1>Pricing Plans</h1>
        </div>

        <Headings className="pricing-subtitle">
          <h2>Choose a plan that’s right for you</h2>
          <p>
            The quickest way to level up your coding interview skills. Fast-track your
            <br />
            interview prep time and land your dream job.
          </p>
        </Headings>

        <div className="pricing-wrap">
          <div className="pricing-item">
            <div className="pricing-item__headings">
              <div className="pricing-item-title">Job Seeker</div>
              <p className="pricing-item-description">The average job search for a software engineer takes about 4 months. We got you covered.</p>
            </div>
            <div className="pricing-item-cost"><strong>$149/</strong>4 Months Access</div>
            <List icon="check">
              <li>50 Of The Best Coding Interview Questions</li>
              <li>Code Solutions Available In 4 Languages</li>
              <li>Extensive Video Explanations</li>
              <li>Behavioral Interview &amp; Soft Skills Content</li>
              <li>Learn System Design</li>
              <li>In-Depth Space-Time Complexity Analysis</li>
              <li>Coding Interview Tips</li>
              <li>Learn &amp; Understand The Most Common Coding Patterns</li>
            </List>
            <Button>Get Started</Button>
          </div>
          <div className="pricing-item">
            <div className="pricing-item-tag">Most Popular</div>
            <div className="pricing-item__headings">
              <div className="pricing-item-title">Annual Pass</div>
              <p className="pricing-item-description">Keep your coding interview skills sharp all-year round.</p>
            </div>
            <div className="pricing-item-cost">
              <strong>$249/</strong>1 Year Access
            </div>
            <List icon="check">
              <li>Everything Job Seeker Tier Offers</li>
              <li>Stay At The Top Of Your Interview Game For 1 Whole Year</li>
            </List>
            <Button onClick={() => Modal.open(PopupCheckout)}>Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PurchaseView
