import { useMantineTheme } from '@mantine/core'
import { FC, ReactNode } from 'react'

interface IProps {
  imgPath: string
  children: ReactNode
}

const AuthLayout: FC<IProps> = ({ imgPath, children }) => {
  const theme = useMantineTheme()

  return (
    <div
      className='flex items-center min-h-screen p-6'
      style={{
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[8]
            : theme.colors.gray[0]
      }}
    >
      <div className='flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800'>
        {children}
      </div>
    </div>
  )
}

export default AuthLayout
