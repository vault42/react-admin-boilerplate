import { IconChevronRight, TablerIconsProps } from '@tabler/icons-react'
import { FC, useState } from 'react'
import {
  Box,
  Collapse,
  createStyles,
  Group,
  Text,
  ThemeIcon,
  UnstyledButton
} from '@mantine/core'
import cn from 'classnames'

interface LinksGroupProps {
  icon: (props: TablerIconsProps) => JSX.Element
  label: string
  initiallyOpened?: boolean
  links?: { label: string; link: string }[]
}

const LinksGroup: FC<LinksGroupProps> = ({
  icon: Icon,
  label,
  initiallyOpened,
  links
}) => {
  const { theme } = createStyles(() => ({}))()
  const hasLinks = Array.isArray(links)
  const [opened, setOpened] = useState(initiallyOpened || false)

  const items = (hasLinks ? links : []).map((link) => (
    <Text<'a'>
      component='a'
      key={link.label}
      className={cn(
        'block no-underline cursor-pointer px-1 py-2 pl-6 ml-6 text-sm truncate',
        theme.colorScheme === 'dark'
          ? 'text-gray-50 hover:bg-gray-700 hover:text-white'
          : 'text-black hover:bg-gray-100 hover:text-black'
      )}
      style={{
        borderLeft: `1px solid ${
          theme.colorScheme === 'dark'
            ? theme.colors.dark[4]
            : theme.colors.gray[3]
        }`
      }}
    >
      {link.label}
    </Text>
  ))

  return (
    <>
      <UnstyledButton
        onClick={() => setOpened((o) => !o)}
        className={cn(
          'block w-full px-2 py-2 text-sm rounded-sm',
          theme.colorScheme === 'dark'
            ? 'text-gray-50 hover:bg-gray-700 hover:text-white'
            : 'text-black hover:bg-gray-100 hover:text-black'
        )}
      >
        <Group position='apart' spacing={0}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ThemeIcon variant='light' size={30}>
              <Icon size={18} />
            </ThemeIcon>
            <Box ml='md'>{label}</Box>
          </Box>
          {hasLinks && (
            <IconChevronRight
              className='transition-all'
              size={14}
              stroke={1.5}
              style={{
                transform: opened ? `rotate(${90}deg)` : 'none'
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks && <Collapse in={opened}>{items}</Collapse>}
    </>
  )
}

export default LinksGroup
