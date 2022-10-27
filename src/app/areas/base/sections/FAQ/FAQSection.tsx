import "./FAQSection.scss"

import OuterLink from "app/ui/kit/OuterLink/OuterLink"
import FAQ from "app/ui/synthetic/FAQ/FAQ"
import FAQClause from "app/ui/synthetic/FAQ/FAQClause"

function FAQSection() {
  return (
    <FAQ>
      <FAQClause summary="How long do I have access to the course?">
        After enrolling, you have unlimited access to this course for either 4 months up to one full year - depending on which tier you purchased.
        The content is the same for both tiers, the only difference between the two is length of access.
      </FAQClause>
      <FAQClause summary="Are there any prerequisites?">
        A lot of these concepts are theoretical in nature, so you should have studied them at some point, or be willing to learn them now.
        This course is primarily for people who have a background in software engineering, either through college, coding boot camps, or working in the industry.
      </FAQClause>
      <FAQClause summary="I don’t have a CS degree, is this course for me?">
        Yes, of course! We go through introductions of each data structure and algorithm, and make sure to break down tough technical concepts so it’s easier to understand.
        However, if you have not learned algorithms and data structures before, we expect you to allocate more time to these topics.
      </FAQClause>
      <FAQClause summary="How much time should I dedicate?">
        The amount of time is up to you.
        The course is structured in a very logical, yet linear fashion so following along at your own pace shouldn’t be a problem.
      </FAQClause>
      <FAQClause summary="How does Algo Academy differ from Leetcode and other similar services?">
        Other coding interview prep services focus only on breaking down popular algorithm problems and how to arrive at an efficient solution.
        This is fine, but we at Algo Academy believe that the best results come from focusing on patterns, not solutions.
        Coding patterns are the superior way to prep because the human brain internalizes new information better when we can apply systematic, proven knowledge to problems.
        <br /><br />
        Instead of grinding hundreds of algorithm problems on Leetcode, why not focus your prep time on learning the key building blocks that underlie most algorithm problems?
        The key benefits are that you reduce prep time significantly and retain information for much longer.
        <br /><br />
        Luckily for you, we have done the hard work of building a curriculum that compiles the most common patterns you might encounter in an interview setting.
        With our self-paced, structured curriculum, we put you on the path to success.
      </FAQClause>
      <FAQClause summary="Is this course worth the money?">
        We would say YES! Imagine how much money you’re leaving on the table by not passing your coding interviews.
        The number easily adds up to tens of thousands, if not hundreds of thousands of dollars.
        If you’re going to spend months studying in your free time and taking time off from work to attend interviews, wouldn’t you want to see results?
        The amount you spend on this course pales in comparison to the amount you could be making in a new job that you love.
      </FAQClause>
      <FAQClause summary="What can I expect by the end of the course?">
        If you’ve gone through the course in its entirety then you will definitely be ready for any coding interview.
        After mastering all of the coding patterns you’ll have the confidence to tackle any algorithm problem.
        You’ll also develop a good understanding of system design and how to sell yourself in behavioral interviews.
      </FAQClause>
      <FAQClause summary="How can I submit questions or feedback?">
        If you have any questions or feedback don’t hesitate to reach out to us at <OuterLink>algo.academy@gmail.com</OuterLink>
      </FAQClause>
      <FAQClause summary="If I’m not happy with the course, can I get a refund?">
        Hopefully, this won’t be the case, but if the content isn’t what you expected you can request a refund within the 30-day money-back guarantee window.
      </FAQClause>
    </FAQ>
  )
}

export default FAQSection
