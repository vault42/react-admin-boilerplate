import React, { createContext, useState } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons'
import { Layout, Menu, theme } from 'antd'
import { Outlet } from 'react-router-dom'
import { useToggle } from 'react-use'
import { ReactComponent as ReactLogo } from '@assets/react.svg'
import LayoutHeader from './Header'

const { Header, Sider, Content } = Layout

interface LayoutState {
  collapsed: boolean
  setCollapsed: (v: boolean) => void
}

export const LayoutContext = createContext({} as LayoutState)

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useToggle(false)

  const {
    token: { colorBgContainer }
  } = theme.useToken()

  return (
    <LayoutContext.Provider
      value={{
        collapsed,
        setCollapsed
      }}
    >
      <Layout className='w-screen h-screen'>
        <Sider theme='light' trigger={null} collapsible collapsed={collapsed}>
          <div className='h-16 rounded-sm flex items-center justify-center'>
            <ReactLogo />
          </div>
          <Menu
            theme='light'
            mode='inline'
            className='py-4'
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'nav 1'
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'nav 2'
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'nav 3'
              }
            ]}
          />
        </Sider>
        <Layout>
          <LayoutHeader />
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </LayoutContext.Provider>
  )
}

export default App
