import { ValuesOf } from "utils/types"

import { MapActions } from "../../store.types"
import { User } from "./types"


const initialState: User = {
  auth: false
}

interface Actions {
  USER_UPDATE: User
}

type Action = ValuesOf<MapActions<Actions>>


export default (state = initialState, action: Action): User => {
  switch (action.type) {

    case "USER_UPDATE":
      return { ...state, ...action.payload }

    default:
      return state
  }
}


export const updateUser = (payload: Actions["USER_UPDATE"]) => ({
  type: "USER_UPDATE",
  payload
}) as const
