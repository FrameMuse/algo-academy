import { BaseRoutes } from "app/AppRoutes"
import ButtonLink from "app/ui/kit/Button/ButtonLink"
import Notice from "app/ui/synthetic/Notice/Notice"

function FreeContentNotice() {
  return (
    <Notice
      title="You haven’t purchased a plan yet!"
      desc="You only have access to the free content, if you’d like to fully unlock all content that Algo Academy has to offer then you’ll need to purchase our full course."
      element={<ButtonLink to={BaseRoutes.Purchase}>Buy Now</ButtonLink>}
    />
  )
}

export default FreeContentNotice