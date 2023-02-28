import { IProfile } from '@types'
import http from '@utils/http'

export type LoginParams = { email: string; password: string }
export const login = async (params: LoginParams) => {
  const { data } = await http.post<{ access_token: string }>(
    'auth/login',
    params
  )
  return data
}

export type RegisterParams = {
  email: string
  password: string
  username: string
}
export const register = async (params: RegisterParams) => {
  const { data } = await http.post('auth/register', params)
  return data
}

export const getProfile = async () => {
  const { data } = await http.get<IProfile>('auth/profile')
  return data
}
