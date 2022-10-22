import "./CookiesNotice.scss"

import Button from "app/ui/components/Button/Button"
import { useRef, useState } from "react"
import { classWithModifiers } from "utils/common"

function CookiesNotice() {
  const cookiesRef = useRef(localStorage.getItem("cookies"))
  const [cookies, setCookies] = useState("")
  function onClick() {
    setCookies("accept")
    localStorage.setItem("cookies", "accept")
  }
  if (process.env.NODE_ENV === "production") {
    if (cookiesRef.current === "accept") {
      return null
    }
  }
  return (
    <div className={classWithModifiers("cookies-notice", cookies === "accept" && "accept")}>
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
