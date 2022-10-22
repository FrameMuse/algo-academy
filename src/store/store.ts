import { combineReducers, configureStore } from "@reduxjs/toolkit"

import user from "./reducers/user"

export const reducers = {
  user,
}

const store = configureStore({
  reducer: combineReducers(reducers),
  preloadedState: {}
})

export default store
