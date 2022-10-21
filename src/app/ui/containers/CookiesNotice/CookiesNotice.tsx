import "./CookiesNotice.scss"

import { useRef, useState } from "react"
import Button from "ui/Button/Button"
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
          Этот сайт использует файлы cookies. Продолжая использовать наш сайт, вы соглашаетесь с использованием данных технологий.
        </p>
        <Button onClick={onClick}>Ок</Button>
      </div>
    </div>
  )
}

export default CookiesNotice
