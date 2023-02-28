import { FC, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { AppShell, useMantineTheme } from '@mantine/core'
import NavHeader from './NavHeader'
import NavSideBar from './NavSideBar'
import { useAppDispatch } from '@hooks/use-app-dispatch'
import { handleProfile } from '@store/auth-slice'

const Layout: FC = () => {
  const theme = useMantineTheme()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(handleProfile())
  }, [dispatch])

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
