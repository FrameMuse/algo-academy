export type User = UserDefault & Partial<UserSigned>

export interface UserSigned {
  auth: boolean
  type: UserType
  avatar: string
}

export interface UserDefault {
  auth: boolean
}

export enum UserType {
  banned, default, admin
}
