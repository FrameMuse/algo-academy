export interface Auth {

}

export type User = UserDefault & UserSigned

export interface UserSigned {
  signed: boolean
  type: UserType

  avatar: string
  firstName: string
  lastName: string
}

export interface UserDefault {
  signed: boolean
}

export enum UserType {
  banned, default, admin
}
