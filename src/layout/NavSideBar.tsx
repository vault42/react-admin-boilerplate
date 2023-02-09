import { FC } from 'react'
import { useAppSelector } from '@hooks/use-app-selector'
import { Navbar, ScrollArea } from '@mantine/core'
import NavLinks from './NavLinks'
import UserLink from './UserLink'

const NavSideBar: FC = () => {
  const { navOpen } = useAppSelector((state) => state.global)

  return (
    <Navbar
      p='md'
      hiddenBreakpoint='sm'
      hidden={!navOpen}
      width={{ sm: 250, lg: 300 }}
    >
      <Navbar.Section grow component={ScrollArea}>
        <div className='py-2'>{<NavLinks />}</div>
      </Navbar.Section>
      <Navbar.Section>
        <UserLink />
      </Navbar.Section>
    </Navbar>
  )
}

export default NavSideBar
