import AuthLayout from '@components/AuthLayout'
import { Button, Form, Input } from 'antd'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()

  return (
    <AuthLayout>
      <div className='p-8 flex flex-col items-center border border-solid border-slate-300 shadow-md rounded-xl'>
        <h2 className='mb-6'>登陆</h2>
        <Form name='login' layout='vertical' className='w-full'>
          <Form.Item
            label='用户名'
            name='username'
            rules={[{ required: true, message: '请输入您的用户名!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='密码'
            name='password'
            rules={[{ required: true, message: '请输入您的密码!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button className='w-full mb-2' type='primary' htmlType='submit'>
              登陆
            </Button>
            <a
              onClick={() => {
                navigate('/signup')
              }}
            >
              没有账号，点击注册
            </a>
          </Form.Item>
        </Form>
      </div>
    </AuthLayout>
  )
}

export default LoginPage
