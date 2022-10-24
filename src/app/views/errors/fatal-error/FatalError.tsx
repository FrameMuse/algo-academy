import { ErrorBoundaryError, ErrorBoundaryReset } from "app/containers/ErrorBoundary/ErrorBoundary.types"
import Button from "app/ui/kit/Button/Button"
import { ErrorInfo } from "react"

interface FatalErrorProps {
  reset?: ErrorBoundaryReset
  error?: ErrorBoundaryError
  errorInfo?: ErrorInfo
}

function FatalError(props: FatalErrorProps) {
  function report() {
    const error = props.error
    if (error == null) return
    // ClientAPI
    //   .query(postError(error.name, error.message, [error.stack?.replace(/ \(.*\)/g, "").replace(/\t| {2}/g, "") || "", props.errorInfo?.componentStack.replace(/ \(.*\)/g, "").replace(/\t| {2}/g, "") || ""]))
    //   .then(({ error, payload }) => {
    //     if (error || !payload) {
    //       alert("Ошибка во время отправки, попробуйте ещё раз")
    //       return
    //     }
    //     alert("Отправлено")
    //   })
  }
  return (
    <div className="error-view">
      <div className="error-view__container">
        <h1>FATAL</h1>
        <div className="error-view__desc">
          <h3>Произошла непредвиденная ошибка</h3>
          <h3>Сообщите нам об этом кнопкой ниже!</h3>
          <p>Название:</p>
          <pre>{props.error?.name}</pre>
          <p>Сообщение:</p>
          <pre>{props.error?.message}</pre>
          <p>Лог:</p>
          <pre>{props.error?.stack}</pre>
          <p>Лог компонента:</p>
          <pre>{props.errorInfo?.componentStack}</pre>
        </div>
        <Button onClick={report}>Отправить отчёт</Button>
        <Button onClick={props.reset}>Попробовать ещё раз</Button>
      </div>
    </div>
  )
}

export default FatalError
