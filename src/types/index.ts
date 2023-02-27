export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN'
}

export interface IProfile {
  email: string
  role: Role
  username: string
  avatar: string | null
}
