import { FC } from 'react'
import { useAppSelector } from '@hooks/use-app-selector'
import { Navbar, ScrollArea } from '@mantine/core'
import {
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock
} from '@tabler/icons-react'
import LinksGroup from './LinksGroup'

const mockdata = [
  { label: 'Dashboard', icon: IconGauge },
  {
    label: 'Releases',
    icon: IconCalendarStats,
    links: [
      { label: 'Upcoming releases', link: '/' },
      { label: 'Previous releases', link: '/' },
      { label: 'Releases schedule', link: '/' }
    ]
  },
  { label: 'Analytics', icon: IconPresentationAnalytics },
  { label: 'Contracts', icon: IconFileAnalytics },
  { label: 'Settings', icon: IconAdjustments },
  {
    label: 'Security',
    icon: IconLock,
    links: [
      { label: 'Enable 2FA', link: '/' },
      { label: 'Change password', link: '/' },
      { label: 'Recovery codes', link: '/' }
    ]
  }
]

const NavSideBar: FC = () => {
  const { navOpen } = useAppSelector((state) => state.global)
  const links = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ))

  return (
    <Navbar
      p='md'
      hiddenBreakpoint='sm'
      hidden={!navOpen}
      width={{ sm: 250, lg: 300 }}
    >
      <Navbar.Section grow component={ScrollArea}>
        <div className='py-2'>{links}</div>
      </Navbar.Section>
    </Navbar>
  )
}

export default NavSideBar
