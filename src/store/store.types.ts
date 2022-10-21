import { reducers } from "./combinedReducers"
type RS = typeof reducers

export interface StoreAction<T, P> {
  type: T
  payload: P
}

// export type ReducersType = { [key in keyof RS]: ReturnType<RS[key]> }
export type MapActions<Actions> = { [K in keyof Actions]: StoreAction<K, Actions[K]> }
