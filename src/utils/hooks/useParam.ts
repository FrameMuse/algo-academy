import { useParams } from "react-router-dom"

function useParam<N extends boolean = false>(paramKey: string, numeric?: N): N extends true ? number : string {
  const params = useParams()
  const paramValue = params[paramKey]

  if (paramValue == null) {
    throw new Error(`Coundn't find param ${paramKey}. It should be declared in a route path.`)
  }
  if (numeric && isNaN(Number(paramValue))) {
    throw new Error(`Param ${paramKey} is not number.`, { cause: { paramValue } })
  }

  return paramValue as N extends true ? number : string
}

export default useParam
