import { login, LoginParams } from '@api/auth'
import AuthLayout from '@components/AuthLayout'
import { useAppDispatch } from '@hooks/use-app-dispatch'
import { setToken } from '@store/auth-slice'
import { useMutation } from '@tanstack/react-query'
import { message } from 'antd'
import { useNavigate } from 'react-router-dom'

type Input = {
  email: string
  password: string
}

const LoginPage = () => {
  const dispath = useAppDispatch()
  const navigate = useNavigate()

  const { isLoading, mutate } = useMutation(
    (params: LoginParams) => login(params),
    {
      onSuccess: (data) => {
        if (data.success) {
          dispath(setToken(data.data.access_token))
          message.success('login success!')
          navigate('/')
        }
      }
    }
  )

  const handleSubmit = (values: Input) => {
    mutate(values)
  }

  return (
    <AuthLayout>
      <div>
        <p>Login</p>
      </div>
    </AuthLayout>
  )
}

export default LoginPage
