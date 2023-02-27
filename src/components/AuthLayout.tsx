import { useMantineTheme } from '@mantine/core'
import { FC, ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

const AuthLayout: FC<IProps> = ({ children }) => {
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
      <div
        className='flex-1 h-full max-w-xl mx-auto rounded-md overflow-hidden p-8'
        style={{
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[7]
              : theme.colors.gray[2]
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default AuthLayout
