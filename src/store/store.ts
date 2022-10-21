import { configureStore } from "@reduxjs/toolkit"

import combinedReducers from "./combinedReducers"

const store = configureStore({
  reducer: combinedReducers,
  preloadedState: {}
})

export default store
