import { StaticRoutes } from "app/AppRoutes"
import ButtonLink from "app/ui/kit/Button/ButtonLink"
import Notice from "app/ui/synthetic/Notice/Notice"
import { useAppSelector } from "store/hooks"

function CourseFreeNotice() {
  const user = useAppSelector(state => state.user)
  if (user.pricingPlan) {
    return null
  }

  return (
    <Notice
      title="This is the free preview of our course"
      desc="You only have access to the free content, if you’d like to fully unlock all content that Algo Academy has to offer then you’ll need to purchase our full course."
      element={<ButtonLink to={StaticRoutes.Purchase}>Buy Now</ButtonLink>}
    />
  )
}

export default CourseFreeNotice
