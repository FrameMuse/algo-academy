import { Purchase } from "app/areas/purchase/types"

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
  pricingPlan?: Purchase
}

export interface UserDefault {
  signed: boolean
}

/**
 * To help comparing user types, `Admin` is highest in rank for this enum.
 */
export enum UserType {
  Default, Admin
}
