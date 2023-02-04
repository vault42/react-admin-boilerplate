import { FC, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  MediaQuery,
  Burger,
  useMantineTheme
} from '@mantine/core'
import NavHeader from './NavHeader'
import NavSideBar from './NavSideBar'
import { useAppDispatch } from '@hooks/use-app-dispatch'
import { useAppSelector } from '@hooks/use-app-selector'
import { setNavOpen } from '@store/global-slice'

const Layout: FC = () => {
  const theme = useMantineTheme()
  const dispatch = useAppDispatch()
  const { navOpen } = useAppSelector((state) => state.global)
  // const [opened, setOpened] = useState(false)
  return (
    <AppShell
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
      navbar={
        <Navbar
          p='md'
          hiddenBreakpoint='sm'
          hidden={!navOpen}
          width={{ sm: 200, lg: 300 }}
        >
          <NavSideBar />
        </Navbar>
      }
      footer={
        <Footer height={60} p='md'>
          Application footer
        </Footer>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p='md'>
          <div
            style={{ display: 'flex', alignItems: 'center', height: '100%' }}
          >
            <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
              <Burger
                opened={navOpen}
                onClick={() => dispatch(setNavOpen(!navOpen))}
                size='sm'
                color={theme.colors.gray[6]}
                mr='xl'
              />
            </MediaQuery>

            <NavHeader />
          </div>
        </Header>
      }
    >
      <Outlet />
    </AppShell>
  )
}
export default Layout
