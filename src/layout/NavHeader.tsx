import { FC } from 'react'
import ColorControl from '@components/ColorControl'
import {
  Burger,
  Group,
  Header,
  MediaQuery,
  useMantineTheme
} from '@mantine/core'
import { useAppDispatch } from '@hooks/use-app-dispatch'
import { useAppSelector } from '@hooks/use-app-selector'
import { setPrimaryColor } from '@store/global-slice'
import ToggleTheme from '../components/ToggleTheme'
import { setNavOpen } from '@store/global-slice'

const NavHeader: FC = () => {
  const dispatch = useAppDispatch()
  const theme = useMantineTheme()
  const { navOpen } = useAppSelector((state) => state.global)
  const { primaryColor } = useAppSelector((state) => state.global)

  return (
    <Header height={{ base: 48, md: 70 }} p='md'>
      <div className='flex items-center w-ful h-full'>
        <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
          <Burger
            opened={navOpen}
            onClick={() => dispatch(setNavOpen(!navOpen))}
            size='sm'
            color={theme.colors.gray[6]}
            mr='xl'
          />
        </MediaQuery>

        <div className='w-full flex justify-end'>
          <Group>
            <ColorControl
              onChange={(color) => {
                dispatch(setPrimaryColor(color))
              }}
              value={primaryColor}
            />
            <ToggleTheme />
          </Group>
        </div>
      </div>
    </Header>
  )
}

export default NavHeader
