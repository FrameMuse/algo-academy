import "./CookiesNotice.scss"

import Button from "app/ui/kit/Button/Button"
import { useLocalStorage } from "react-use"
import { classWithModifiers } from "utils/common"

function CookiesNotice() {
  const [cookiesAllow, setCookiesAllow] = useLocalStorage("cookies-allow", false)
  function onClick() {
    setCookiesAllow(true)
  }
  if (process.env.NODE_ENV === "production") {
    if (cookiesAllow) return null
  }
  return (
    <div className={classWithModifiers("cookies-notice", cookiesAllow && "allow")}>
      <div className="cookies-notice__container">
        <p className="cookies-notice__text">
          By using our website, you agree to the use of cookies.
        </p>
        <Button onClick={onClick}>Well, Ok</Button>
      </div>
    </div>
  )
}

export default CookiesNotice
