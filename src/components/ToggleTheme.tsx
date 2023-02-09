import {
  ActionIcon,
  useMantineColorScheme,
  useMantineTheme
} from '@mantine/core'
import { IconMoonStars, IconSun } from '@tabler/icons-react'
import { FC } from 'react'

const ToggleTheme: FC = () => {
  const theme = useMantineTheme()
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'

  return (
    <ActionIcon
      variant='filled'
      color={theme.primaryColor}
      onClick={() => toggleColorScheme()}
      title='Toggle color scheme'
    >
      {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
    </ActionIcon>
  )
}

export default ToggleTheme
