import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Router } from '@router'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import zhCN from 'antd/locale/zh_CN'
import { useAppSelector } from '@hooks/use-app-selector'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthProvider } from '@router/helper'
import { ConfigProvider } from 'antd'

dayjs.locale('zh-cn')

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

const App: FC = () => {
  const { primaryColor } = useAppSelector((state) => state.global)

  return (
    <ConfigProvider locale={zhCN}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </AuthProvider>
      </QueryClientProvider>
    </ConfigProvider>
  )
}

export default App
