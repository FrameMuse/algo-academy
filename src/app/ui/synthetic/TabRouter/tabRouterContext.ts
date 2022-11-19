import { createContext, Dispatch, SetStateAction } from "react"

type TabId = string | number
const tabRouterContext = createContext<[TabId, Dispatch<SetStateAction<TabId>>]>(["", () => { throw new Error("No TabRouter context was found.") }])
export default tabRouterContext
