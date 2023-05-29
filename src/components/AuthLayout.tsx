import { FC, ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

const AuthLayout: FC<IProps> = ({ children }) => {
  return (
    <div className='flex items-center min-h-screen p-6'>
      <div className='flex-1 h-full max-w-xl mx-auto rounded-md overflow-hidden p-8'>
        {children}
      </div>
    </div>
  )
}

export default AuthLayout
