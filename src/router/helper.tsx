import { createContext, FC, useContext, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import jwtDecode from 'jwt-decode'
import { useAppDispatch } from '@hooks/use-app-dispatch'
import { useAppSelector } from '@hooks/use-app-selector'
import { handleLogout } from '@store/auth-slice'
import { Navigate } from 'react-router-dom'

interface AuthState {
  authed: boolean
}

const AuthContext = createContext({} as AuthState)
export const AuthConsumer = () => {
  return useContext(AuthContext)
}

const useAuth = () => {
  const [authed, setAuthed] = useState(false)
  const dispath = useAppDispatch()
  const { token } = useAppSelector((state) => state.auth)

  useEffect(() => {
    if (token) {
      const now = new Date().getTime() / 1000
      const decoded = jwtDecode(token) as any
      const exp = decoded.exp
      if (now > exp) {
        toast.error('登录过期！')
        dispath(handleLogout())
      } else {
        setAuthed(true)
      }
    } else {
      setAuthed(false)
    }
  }, [dispath, token])

  return {
    authed
  }
}

export const AuthProvider: FC<{ children: JSX.Element }> = ({ children }) => {
  const auth = useAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const AuthRequired: FC<{ children: JSX.Element }> = ({ children }) => {
  const { authed } = AuthConsumer()

  if (!authed) {
    return <Navigate to='/login' replace />
  }

  return children
}
