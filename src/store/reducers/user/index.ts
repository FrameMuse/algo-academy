import { MapActions } from "store/store.types"
import { ValuesOf } from "types"

import { User, UserType } from "./types"

export const USER_GUEST: User = {
  signed: false,
  type: UserType.default,
  avatar: "/static/images/guest-avatar.jpg",
  firstName: "Mr.",
  lastName: "Guest"
}

const initialState: User = { ...USER_GUEST }

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
