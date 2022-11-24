function ads() {
  const popup = window.open("", "popup", "popup = true")
  const interval = setInterval(() => {
    if (popup == null || popup.closed) {
      clearInterval(interval)
      return
    }
    if (popup.window.location.href.includes("return")) {
      popup.close()
    }
  }, 1000)
}

export { }
