import { IProfile } from '@types'
import http from '@utils/http'

export const login = async (email: string, password: string) => {
  const { data } = await http.post<{ access_token: string }>('auth/login', {
    email,
    password
  })
  console.log('wtf', data)
  return data
}

export const register = async (
  email: string,
  password: string,
  username: string
) => {
  const { data } = await http.post('auth/register', {
    email,
    password,
    username
  })
  return data
}

export const getProfile = async () => {
  const { data } = await http.get<IProfile>('auth/profile')
  return data
}
