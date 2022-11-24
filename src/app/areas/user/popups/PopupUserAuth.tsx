import useUserGetAuthLink from "api/hooks/useUserGetAuthLink"
import Headings from "app/layouts/Headings/Headings"
import PopupLayout from "app/layouts/PopupLayout/PopupLayout"

import AuthPrompt from "../components/AuthPrompt/AuthPrompt"

function PopupUserAuth() {
  const getAuthLink = useUserGetAuthLink()
  return (
    <PopupLayout width="25em">
      <Headings>
        <h4>Log in/Sign up</h4>
        <p>
          Log in or register to save progress. It only takes a couple of clicks.
        </p>
      </Headings>
      <AuthPrompt
        githubLink={getAuthLink("github")}
        googleLink={getAuthLink("google")}
        facebookLink={getAuthLink("facebook")}
      />
    </PopupLayout>
  )
}

export default PopupUserAuth
