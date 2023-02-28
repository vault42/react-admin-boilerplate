import {
  Box,
  Button,
  Group,
  PasswordInput,
  TextInput,
  Text
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { register, RegisterParams } from '@api/auth'
import AuthLayout from '@components/AuthLayout'

type Input = {
  email: string
  username: string
  password: string
  confirmPassword: string
}

const SignUpPage = () => {
  const navigate = useNavigate()

  const form = useForm({
    initialValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    },
    validate: {
      email: (value: string) =>
        /^\S+@\S+$/.test(value) ? null : 'Invalid email',
      username: (value: string) =>
        value?.length > 0 ? null : 'Username is required',
      password: (value: string) =>
        value?.length > 0 ? null : 'Password is required',
      confirmPassword: (value: string, values: any) =>
        value !== values.password ? 'Passwords did not match' : null
    }
  })

  const { isLoading, mutate } = useMutation(
    (params: RegisterParams) => register(params),
    {
      onSuccess: (data) => {
        if (data.success) {
          toast.success('Create account success!')
          navigate('/login')
        }
      }
    }
  )

  const handleSubmit = (values: Input) => {
    mutate(values)
  }

  return (
    <AuthLayout>
      <Box mx='auto'>
        <p className='my-2 text-2xl font-bold'>Create Account</p>
        <form onSubmit={form.onSubmit((values) => handleSubmit({ ...values }))}>
          <TextInput
            withAsterisk
            label='Email'
            placeholder='your@email.com'
            {...form.getInputProps('email')}
          />
          <TextInput
            withAsterisk
            label='Username'
            placeholder=''
            {...form.getInputProps('username')}
          />
          <PasswordInput
            placeholder='Password'
            label='Password'
            withAsterisk
            {...form.getInputProps('password')}
          />
          <PasswordInput
            placeholder='Confirm Password'
            label='Confirm Password'
            withAsterisk
            {...form.getInputProps('confirmPassword')}
          />
          <Group position='center' mt={36}>
            <Button fullWidth type='submit' loading={isLoading}>
              Create
            </Button>
            <Text
              className='text-sm cursor-pointer hover:underline'
              onClick={() => {
                navigate('/login')
              }}
            >
              Already have an account? Login
            </Text>
          </Group>
        </form>
      </Box>
    </AuthLayout>
  )
}

export default SignUpPage
