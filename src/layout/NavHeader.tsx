import { FC } from 'react'
import ColorControl from '@components/ColorControl'
import { Group, useMantineColorScheme } from '@mantine/core'
import { useAppDispatch } from '@hooks/use-app-dispatch'
import { useAppSelector } from '@hooks/use-app-selector'
import { setPrimaryColor } from '@store/global-slice'
import ToggleTheme from '../components/ToggleTheme'
import { Logo } from './Logo'

const NavHeader: FC = () => {
  const dispatch = useAppDispatch()
  const { colorScheme } = useMantineColorScheme()
  const { primaryColor } = useAppSelector((state) => state.global)

  return (
    <div className='w-full flex justify-between'>
      <Logo colorScheme={colorScheme} />
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
  )
}

export default NavHeader
