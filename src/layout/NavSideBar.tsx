import { FC } from 'react'
import { useAppSelector } from '@hooks/use-app-selector'
import {
  Burger,
  Code,
  Group,
  MediaQuery,
  Navbar,
  ScrollArea,
  useMantineColorScheme,
  useMantineTheme
} from '@mantine/core'
import { useAppDispatch } from '@hooks/use-app-dispatch'
import { setNavOpen } from '@store/global-slice'
import NavLinks from './NavLinks'
import UserLink from './UserLink'
import { Logo } from './Logo'

const NavSideBar: FC = () => {
  const dispatch = useAppDispatch()
  const { navOpen } = useAppSelector((state) => state.global)
  const { colorScheme } = useMantineColorScheme()
  const { primaryColor } = useAppSelector((state) => state.global)
  const theme = useMantineTheme()

  return (
    <Navbar
      hiddenBreakpoint='sm'
      hidden={!navOpen}
      width={{ sm: 250, lg: 300 }}
    >
      <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
        <div className='h-[48px] p-4 flex items-center'>
          <Burger
            opened={navOpen}
            onClick={() => dispatch(setNavOpen(!navOpen))}
            size='sm'
            color={theme.colors.gray[6]}
          />
        </div>
      </MediaQuery>
      <div className='h-full flex flex-col px-4 pb-4'>
        <Navbar.Section px={8}>
          <Group position='apart'>
            <Logo colorScheme={colorScheme} primaryColor={primaryColor} />
            <Code sx={{ fontWeight: 700 }}>v3.1.2</Code>
          </Group>
        </Navbar.Section>
        <Navbar.Section grow component={ScrollArea}>
          <div className='py-2'>
            <NavLinks />
          </div>
        </Navbar.Section>
        <Navbar.Section>
          <UserLink />
        </Navbar.Section>
      </div>
    </Navbar>
  )
}

export default NavSideBar
