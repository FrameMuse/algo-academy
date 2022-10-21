import { combineReducers } from "redux"

import user from "./reducers/user"

export const reducers = {
  user,
}

const combinedReducers = combineReducers(reducers)
export default combinedReducers
