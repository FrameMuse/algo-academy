import "./PurchaseView.scss"

import { APP_TITLE } from "app/App"
import { PopupCheckout } from "app/areas/purchase"
import Headings from "app/layouts/Headings/Headings"
import Button from "app/ui/kit/Button/Button"
import List from "app/ui/kit/List/List"
import { Helmet } from "react-helmet"
import { Modal } from "react-modal-global"
import Price from "utils/transform/price"

function PurchaseView() {
  return (
    <section className="page-section pricing-section">
      <Helmet>
        <title>{APP_TITLE + " | " + "Purchase"}</title>
      </Helmet>
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
  )
}


function PricingItems() {
  return (
    <div className="pricing-wrap">
      <PricingItem
        title="Job Seeker"
        desc="The average job search for a software engineer takes about 4 months. We got you covered."
        duration="4 Months"
        price={149}
        benefits={[
          "50 Of The Best Coding Interview Questions",
          "Code Solutions Available In 4 Languages",
          "Extensive Video Explanations",
          "Behavioral Interview & Soft Skills Content",
          "Learn System Design",
          "In-Depth Space-Time Complexity Analysis",
          "Coding Interview Tips",
          "Learn & Understand The Most Common Coding Patterns"
        ]}
      />
      <PricingItem
        title="Annual Pass"
        desc="Keep your coding interview skills sharp all-year round."
        duration="1 Year"
        price={249}
        benefits={[
          "Everything Job Seeker Tier Offers",
          "Stay At The Top Of Your Interview Game For 1 Whole Year"
        ]}
        mostPopular
      />
    </div>
  )
}


interface PricingItemProps {
  title: string
  desc: string
  duration: string
  price: number
  benefits: string[]
  mostPopular?: boolean
}

function PricingItem(props: PricingItemProps) {
  return (
    <div className="pricing-item">
      {props.mostPopular && (
        <div className="pricing-item-tag">Most Popular</div>
      )}
      <div className="pricing-item__headings">
        <div className="pricing-item-title">{props.title}</div>
        <p className="pricing-item-description">{props.desc}</p>
      </div>
      <div className="pricing-item-cost">
        <strong>{Price.format(props.price)}/</strong>
        <span>{props.duration} Access</span>
      </div>
      <List icon="check">
        {props.benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </List>
      <Button onClick={() => Modal.open(PopupCheckout)}>Get Started</Button>
    </div>
  )
}

export default PurchaseView
