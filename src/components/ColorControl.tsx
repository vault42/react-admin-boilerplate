import {
  ActionIcon,
  CheckIcon,
  ColorSwatch,
  Group,
  Popover,
  useMantineTheme
} from '@mantine/core'
import { IconColorPicker } from '@tabler/icons-react'
import { FC, useState } from 'react'

interface IProps {
  onChange: (color: string) => void
  value: string
}

const ColorControl: FC<IProps> = ({ onChange, value }) => {
  const [opened, setOpened] = useState(false)
  const theme = useMantineTheme()
  const colors = Object.keys(theme.colors).map((color) => ({
    swatch: theme.colors[color][6],
    color
  }))

  const swatches = colors.map(({ color, swatch }) => (
    <ColorSwatch
      component='button'
      type='button'
      onClick={() => onChange(color)}
      key={color}
      color={swatch}
      size={22}
      style={{ color: theme.white, cursor: 'pointer' }}
    >
      {value === color && <CheckIcon width={10} />}
    </ColorSwatch>
  ))

  return (
    <Popover
      opened={opened}
      onClose={() => setOpened(false)}
      transitionDuration={0}
      width={152}
      position='bottom-end'
      withArrow
      zIndex={99}
    >
      <Popover.Target>
        <ActionIcon
          variant='filled'
          color={theme.primaryColor}
          title='Toggle color'
          onClick={() => setOpened((o) => !o)}
        >
          <IconColorPicker size={18} />
        </ActionIcon>
      </Popover.Target>
      <Popover.Dropdown>
        <Group spacing='xs'>{swatches}</Group>
      </Popover.Dropdown>
    </Popover>
  )
}

export default ColorControl
