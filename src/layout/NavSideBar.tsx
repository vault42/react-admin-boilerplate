import { FC } from 'react'
import { useAppSelector } from '@hooks/use-app-selector'
import { Navbar, ScrollArea } from '@mantine/core'
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock
} from '@tabler/icons-react'

const mockdata = [
  { label: 'Dashboard', icon: <IconGauge /> },
  {
    label: 'Market news',
    icon: IconNotes,
    initiallyOpened: true
    // links: [
    //   { label: 'Overview', link: '/' },
    //   { label: 'Forecasts', link: '/' },
    //   { label: 'Outlook', link: '/' },
    //   { label: 'Real time', link: '/' }
    // ]
  }
  // {
  //   label: 'Releases',
  //   icon: IconCalendarStats,
  //   links: [
  //     { label: 'Upcoming releases', link: '/' },
  //     { label: 'Previous releases', link: '/' },
  //     { label: 'Releases schedule', link: '/' }
  //   ]
  // },
  // { label: 'Analytics', icon: IconPresentationAnalytics },
  // { label: 'Contracts', icon: IconFileAnalytics },
  // { label: 'Settings', icon: IconAdjustments },
  // {
  //   label: 'Security',
  //   icon: IconLock,
  //   links: [
  //     { label: 'Enable 2FA', link: '/' },
  //     { label: 'Change password', link: '/' },
  //     { label: 'Recovery codes', link: '/' }
  //   ]
  // }
]

const NavSideBar: FC = () => {
  console.log(899999, mockdata)
  const { navOpen } = useAppSelector((state) => state.global)
  // const links = mockdata.map((item) => (
  //   <LinksGroup {...item} key={item.label} />
  // ))

  return (
    <Navbar
      p='md'
      hiddenBreakpoint='sm'
      hidden={!navOpen}
      width={{ sm: 200, lg: 300 }}
    >
      <Navbar.Section grow component={ScrollArea}>
        <div>
          {mockdata.map((item, idx) => (
            <a
              key={idx}
              className='flex justify-between items-center p-2 mb-2 cursor-pointer no-underline font-bold rounded-sm'
            >
              <IconPresentationAnalytics />
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </Navbar.Section>
    </Navbar>
  )
}

export default NavSideBar
