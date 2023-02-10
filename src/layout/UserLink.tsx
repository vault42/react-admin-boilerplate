import { IconChevronRight } from '@tabler/icons-react'
import {
  UnstyledButton,
  Group,
  Avatar,
  Text,
  Box,
  useMantineTheme
} from '@mantine/core'
import cn from 'classnames'
import { useNavigate } from 'react-router-dom'

const UserLink = () => {
  const theme = useMantineTheme()
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        paddingTop: theme.spacing.sm,
        borderTop: `1px solid ${
          theme.colorScheme === 'dark'
            ? theme.colors.dark[4]
            : theme.colors.gray[2]
        }`
      }}
    >
      <UnstyledButton
        className={cn('block w-full rounded-t')}
        sx={{
          padding: theme.spacing.xs,
          color:
            theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
          '&:hover': {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[6]
                : theme.colors.gray[0]
          }
        }}
      >
        <Group>
          <Avatar
            src='https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80'
            radius='xl'
          />
          <Box sx={{ flex: 1 }}>
            <Text size='sm' weight={500}>
              Amy Horsefighter
            </Text>
            <Text color='dimmed' size='xs'>
              ahorsefighter@gmail.com
            </Text>
          </Box>
          <IconChevronRight
            size={18}
            onClick={() => {
              navigate('/user')
            }}
          />
        </Group>
      </UnstyledButton>
    </Box>
  )
}

export default UserLink
