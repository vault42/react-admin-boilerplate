import AuthLayout from '@components/AuthLayout'
import { useAppDispatch } from '@hooks/use-app-dispatch'
import { Box, Button, Group, PasswordInput, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { handleLogin } from '@store/auth-slice'

type Input = {
  email: string
  password: string
}

const LoginPage = () => {
  const dispath = useAppDispatch()

  const form = useForm({
    initialValues: {
      email: '',
      password: ''
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value: string) =>
        value?.length > 0 ? null : 'Password is required'
    }
  })

  const handleSubmit = (values: Input) => {
    console.log(234444, values)
    dispath(handleLogin(values))
  }

  return (
    <AuthLayout>
      <Box mx='auto'>
        <p className='my-2 text-2xl font-bold'>Login</p>
        <form onSubmit={form.onSubmit((values) => handleSubmit({ ...values }))}>
          <TextInput
            withAsterisk
            label='Email'
            placeholder='your@email.com'
            {...form.getInputProps('email')}
          />
          <PasswordInput
            placeholder='Password'
            label='Password'
            withAsterisk
            {...form.getInputProps('password')}
          />
          <Group position='center' mt={36}>
            <Button fullWidth type='submit'>
              Login
            </Button>
          </Group>
        </form>
      </Box>
    </AuthLayout>
  )
}

export default LoginPage
