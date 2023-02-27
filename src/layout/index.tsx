import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import {
  AppShell,
  Header,
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
      navbar={<NavSideBar />}
      // footer={}
      header={
        <Header height={{ base: 48, md: 64 }} p='md'>
          <div className='flex items-center h-full'>
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
