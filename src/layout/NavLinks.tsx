import {
  IconAdjustments,
  IconCalendarStats,
  IconFileAnalytics,
  IconGauge,
  IconLock,
  IconPresentationAnalytics,
  TablerIconsProps
} from '@tabler/icons-react'
import { FC } from 'react'
import { Box, NavLink, ThemeIcon, useMantineTheme } from '@mantine/core'
import { useLocation, useNavigate } from 'react-router-dom'

const links = [
  { label: 'Dashboard', icon: IconGauge, link: '/' },
  {
    label: 'Releases',
    icon: IconCalendarStats,
    children: [
      { label: 'Upcoming releases', link: '/' },
      { label: 'Previous releases', link: '/' },
      { label: 'Releases schedule', link: '/' }
    ]
  },
  {
    label: 'Analytics',
    icon: IconPresentationAnalytics,
    children: [
      { label: 'Data grid', link: '/datagrid' },
      { label: 'Data flow', link: '/dataflow' }
    ]
  },
  { label: 'Contracts', icon: IconFileAnalytics },
  { label: 'Settings', icon: IconAdjustments, link: '/setting' },
  {
    label: 'Security',
    icon: IconLock,
    children: [
      { label: 'Enable 2FA', link: '/' },
      { label: 'Change password', link: '/' },
      { label: 'Recovery codes', link: '/' }
    ]
  }
]

interface NavLink {
  label: string
  link?: string
  icon?: (props: TablerIconsProps) => JSX.Element
  children?: NavLink[]
}

const NavLinks: FC = () => {
  const theme = useMantineTheme()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const generateNavLinks = (navLinks: NavLink[], isChildren: boolean) => {
    return navLinks.map(({ label, link, icon: Icon, children }) => {
      return (
        <NavLink
          variant='light'
          key={label}
          className={isChildren ? 'p-2 pl-6' : 'p-2'}
          label={label}
          active={link === pathname}
          icon={
            Icon && (
              <ThemeIcon variant='light' size={30}>
                <Icon size={18} stroke={1.5} />
              </ThemeIcon>
            )
          }
          onClick={() => {
            if (link) {
              navigate(link)
            }
          }}
          sx={
            isChildren
              ? {
                  marginRight: theme.spacing.xl,
                  borderTopRightRadius: theme.radius.sm,
                  borderBottomRightRadius: theme.radius.sm,
                  borderLeft: `1px solid ${
                    theme.colorScheme === 'dark'
                      ? theme.colors.dark[4]
                      : theme.colors.gray[3]
                  }`
                }
              : {
                  borderRadius: theme.radius.sm
                }
          }
        >
          {children && generateNavLinks(children, true)}
        </NavLink>
      )
    })
  }
  return <Box>{generateNavLinks(links, false)}</Box>
}

export default NavLinks
