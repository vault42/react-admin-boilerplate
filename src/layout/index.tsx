import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { AppShell, useMantineTheme } from '@mantine/core'
import NavHeader from './NavHeader'
import NavSideBar from './NavSideBar'

const Layout: FC = () => {
  const theme = useMantineTheme()
  return (
    <AppShell
      layout='alt'
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0]
        }
      }}
      navbarOffsetBreakpoint='sm'
      asideOffsetBreakpoint='sm'
      fixed
      navbar={<NavSideBar />}
      header={<NavHeader />}
    >
      <Outlet />
    </AppShell>
  )
}
export default Layout
