import { createContext, Dispatch, SetStateAction } from "react"

const tabRouterContext = createContext<[string, Dispatch<SetStateAction<string>>]>(["", () => { throw new Error("Wrong use of tabRouterContext") }])
export default tabRouterContext
