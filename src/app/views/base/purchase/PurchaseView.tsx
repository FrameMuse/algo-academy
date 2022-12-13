import "./PurchaseView.scss"

import usePlans from "api/hooks/plans/usePlans"
import { APP_TITLE } from "app/App"
import FAQSection from "app/areas/base/sections/FAQ/FAQSection"
import LessonArticles from "app/areas/base/sections/LessonArticles/LessonArticles"
import ReviewsSection from "app/areas/base/sections/Reviews/ReviewsSection"
import { PopupCheckout } from "app/areas/purchase"
import { formatDuration } from "app/areas/purchase/helpers"
import { Plan } from "app/areas/purchase/types"
import Headings from "app/layouts/Headings/Headings"
import Button from "app/ui/kit/Button/Button"
import List from "app/ui/kit/List/List"
import { Helmet } from "react-helmet"
import { Modal } from "react-modal-global"
import { GAEventLabel } from "services/ga"
import Price from "utils/transform/price"

function PurchaseView() {
  return (
    <>
      <Helmet>
        <title>{APP_TITLE + " | " + "Purchase"}</title>
      </Helmet>
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

          <PricingItems />
        </div>

      </section>
      <LessonArticles />

      <ReviewsSection />
      <section className="faq-section" id="faq">
        <div className="wrapper">
          <div className="faq-wrap">
            <Headings className="faq-title">
              <h2>Frequently Asked Questions</h2>
              <p>Any general questions should be answered in our FAQ. Contact us if {"you're"} still having problems or if your question {"isn't"} answered here.</p>
            </Headings>
            <div className="faq-block">
              <FAQSection />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


function PricingItems() {
  const plans = usePlans()

  return (
    <div className="pricing-wrap">
      {plans.map(plan => (
        <PricingItem {...plan} key={plan.id} />
      ))}
      {/* <PricingItem
        id="1"
        title="Job Seeker"
        description="The average job search for a software engineer takes about 4 months. We got you covered."
        durationMonths={4}
        cost={149}
        benefits={[
          "50 Of The Best Coding Interview Questions",
          "Code Solutions Available In 5 Languages",
          "Extensive Video Explanations",
          "Behavioral Interview & Soft Skills Content",
          "Learn System Design",
          "In-Depth Space-Time Complexity Analysis",
          "Coding Interview Tips",
          "Learn & Understand The Most Common Coding Patterns"
        ]}
      />
      <PricingItem
        id="2"
        title="Annual Pass"
        description="Keep your coding interview skills sharp all-year round."
        durationMonths={12}
        cost={249}
        benefits={[
          "Everything Job Seeker Tier Offers",
          "Stay At The Top Of Your Interview Game For 1 Whole Year"
        ]}
        mostPopular
      /> */}
    </div>
  )
}


interface PricingItemProps extends Plan { }

function PricingItem(props: PricingItemProps) {
  function onClick() {
    Modal.open(PopupCheckout, {
      planId: props.id,
      cost: props.cost,
      durationMonths: props.durationMonths
    })
  }
  return (
    <div className="pricing-item">
      {props.mostPopular && (
        <div className="pricing-item-tag">Most Popular</div>
      )}
      <div className="pricing-item__headings">
        <div className="pricing-item-title">{props.title}</div>
        <p className="pricing-item-description">{props.description}</p>
      </div>
      <div className="pricing-item-cost">
        <strong>{Price.format(props.cost)}/</strong>
        <span>{formatDuration(props.durationMonths)} Access</span>
      </div>
      <List icon="check">
        {props.benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </List>
      <Button onClick={onClick} eventLabel={GAEventLabel.PlanGetStarted}>Get Started</Button>
    </div>
  )
}

export default PurchaseView
