import AuthLayout from '@components/AuthLayout'
import { Button, Form, Input } from 'antd'
import { useNavigate } from 'react-router-dom'

const SignUpPage = () => {
  const navigate = useNavigate()

  return (
    <AuthLayout>
      <div className='p-8 flex flex-col items-center border border-solid border-slate-300 shadow-md rounded-xl'>
        <h2 className='mb-6'>注册账号</h2>
        <Form name='login' layout='vertical' className='w-full'>
          <Form.Item
            label='用户名'
            name='username'
            rules={[{ required: true, message: '请输入您的用户名!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='手机号'
            name='phoneNumber'
            rules={[{ required: true, message: '请输入您的手机号!' }]}
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
          <Form.Item
            label='重复密码'
            name='repeatPassword'
            rules={[{ required: true, message: '请重复输入您的密码!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button className='w-full mb-2' type='primary' htmlType='submit'>
              登陆
            </Button>
            <a
              onClick={() => {
                navigate('/login')
              }}
            >
              已有账号，点击登录
            </a>
          </Form.Item>
        </Form>
      </div>
    </AuthLayout>
  )
}

export default SignUpPage
