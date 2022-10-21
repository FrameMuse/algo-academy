import { Action, MapPredicate } from "infrastructure/persistence/api/client.types"
import { ReactNode, useEffect, useState } from "react"
import { QueryError, useQuery } from "react-fetching-library"
import LoaderCover from "ui/Loader/LoaderCover"

interface QueryContainerProps<P, M = Record<string, unknown>> {
  action: Action<P>
  mapping?: MapPredicate<P, M>
  children: (payload: keyof M extends never ? P : M) => ReactNode
}

function QueryContainer<P, M>(props: QueryContainerProps<P, M>) {
  const [payload, setPayload] = useState<P | M>()
  const response = useQuery(props.action)

  useEffect(() => {
    if (response.payload == null) return

    setPayload(props.mapping ? props.mapping(response.payload) : response.payload)
  }, [response.payload])

  if (response.error) throw new QueryError("Error during sending request or handling response.", response)
  if (response.loading) return <LoaderCover />
  if (payload == null) return <>no content</>

  return <>{props.children(payload as never)}</>
}

export default QueryContainer
