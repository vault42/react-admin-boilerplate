import { IconChevronRight, IconLogout } from '@tabler/icons-react'
import {
  UnstyledButton,
  Group,
  Avatar,
  Text,
  Box,
  useMantineTheme
} from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '@hooks/use-app-selector'
import { useAppDispatch } from '@hooks/use-app-dispatch'
import { handleLogout } from '@store/auth-slice'

const UserLink = () => {
  const dispatch = useAppDispatch()
  const theme = useMantineTheme()
  const navigate = useNavigate()
  const { profile } = useAppSelector((state) => state.auth)

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
        className='block w-full rounded'
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
              {profile?.username}
            </Text>
            <Text color='dimmed' size='xs'>
              {profile?.email}
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
      <UnstyledButton
        className='w-full flex items-center no-underline text-sm rounded'
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
        onClick={() => {
          dispatch(handleLogout())
        }}
      >
        <IconLogout className='mr-4' stroke={1.5} />
        <span>Logout</span>
      </UnstyledButton>
    </Box>
  )
}

export default UserLink
