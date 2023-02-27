import {
  Container,
  Divider,
  Flex,
  ScrollArea,
  Space,
  useMantineColorScheme,
  useMantineTheme
} from '@mantine/core'
import { FC } from 'react'

interface PageLayoutProps {
  title: string
  subTitle?: string
  children: React.ReactNode
}

const PageLayout: FC<PageLayoutProps> = ({ title, subTitle, children }) => {
  const { colorScheme } = useMantineColorScheme()
  const theme = useMantineTheme()

  return (
    <Container
      p={12}
      className='h-full rounded'
      sx={{
        backgroundColor: colorScheme === 'dark' ? theme.colors.gray[9] : '#fff'
      }}
    >
      <Flex mih={36} justify='flex-start' align='center' direction='row'>
        <span className='text-xl font-bold'>{title}</span>
        <Space w='md' />

        {subTitle && (
          <span className='items-end text-sm opacity-75'>{subTitle}</span>
        )}
      </Flex>
      <Divider my='sm' variant='dotted' />
      <ScrollArea pt={12}>{children}</ScrollArea>
    </Container>
  )
}

export default PageLayout
