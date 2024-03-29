import { FC, ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

const AuthLayout: FC<IProps> = ({ children }) => {
  return (
    <div className='flex items-center min-h-screen'>
      <div className='flex-1 h-full max-w-md mx-auto rounded-md overflow-hidden p-8'>
        {children}
      </div>
    </div>
  )
}

export default AuthLayout
