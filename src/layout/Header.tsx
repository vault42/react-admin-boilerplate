import { LayoutContext } from '@layout'
import { Layout, Button, Avatar, MenuProps, Dropdown } from 'antd'
import { useContext } from 'react'
import { Icon } from '@iconify/react'
import textAlignLeft from '@iconify/icons-ph/text-align-left'
import textAlignRight from '@iconify/icons-ph/text-align-right'
import { useNavigate } from 'react-router-dom'

const { Header } = Layout

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target='_blank' rel='noopener noreferrer'>
        个人信息
      </a>
    )
  },
  {
    key: '2',
    label: (
      <a target='_blank' rel='noopener noreferrer'>
        退出登录
      </a>
    )
  }
]

const LayoutHeader = () => {
  const { collapsed, setCollapsed } = useContext(LayoutContext)
  const navigate = useNavigate()

  const handleClick = ({ key }: any) => {
    switch (key) {
      case '2':
        navigate('/login')
        break
      default:
        break
    }
  }

  return (
    <Header className='h-16 px-4 flex flex-row justify-between'>
      <Button
        type='text'
        icon={
          collapsed ? (
            <Icon icon={textAlignLeft} />
          ) : (
            <Icon icon={textAlignRight} />
          )
        }
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64
        }}
      />

      <div className='h-full'>
        <Dropdown
          menu={{ items, onClick: handleClick }}
          placement='bottomRight'
          arrow
        >
          <Avatar className='cursor-pointer' />
        </Dropdown>
      </div>
    </Header>
  )
}

export default LayoutHeader
