import { PricingPlan } from "app/areas/purchase/types"

export interface Auth { }

export type User = UserDefault & UserSigned

export interface UserSigned {
  id: string

  signed: boolean
  type: UserType

  avatar: string
  userName: string
  firstName: string
  lastName: string
  email: string

  level: number

  createdAt: Date
  pricingPlan?: PricingPlan
}

export interface UserDefault {
  signed: boolean
}

export enum UserType {
  Default, Admin
}
