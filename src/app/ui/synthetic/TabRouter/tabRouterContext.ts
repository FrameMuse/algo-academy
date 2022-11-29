import { createContext, Dispatch, SetStateAction, useContext } from "react"

type TabId = string | number
const tabRouterContext = createContext<[TabId, Dispatch<SetStateAction<TabId>>]>(["", () => { throw new Error("No TabRouter context was found.") }])
export default tabRouterContext

export function useRouterTab(): string | number {
  const [tab] = useContext(tabRouterContext)

  return tab
}
