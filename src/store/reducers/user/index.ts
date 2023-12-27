import { MapActions } from "store/store.types"
import { ValuesOf } from "types"

import { User, UserType } from "./types"

export const USER_GUEST: User = {
  id: "",

  signed: true,
  type: UserType.Admin,
  avatar: "/static/images/guest-avatar.jpg",
  firstName: "",
  lastName: "",

  createdAt: new Date(-1),
  email: "mr.guest@example.com",
  level: 0,
  userName: "MrGuest"
}

const initialState: User = { ...USER_GUEST }

interface Actions {
  USER_UPDATE: Partial<User>
  USER_RESET: void
}

type Action = ValuesOf<MapActions<Actions>>


export default (state = initialState, action: Action): User => {
  switch (action.type) {

    case "USER_UPDATE":
      return { ...state, ...action.payload }

    case "USER_RESET":
      return { ...USER_GUEST }

    default:
      return state
  }
}


export const updateUser = (payload: Actions["USER_UPDATE"]) => ({
  type: "USER_UPDATE",
  payload
}) as const

export const resetUser = () => ({
  type: "USER_RESET"
}) as const
