import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Router } from '@router'
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider
} from '@mantine/core'
import { useColorScheme, useLocalStorage } from '@mantine/hooks'
import { useAppSelector } from '@hooks/use-app-selector'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

const App: FC = () => {
  const preferredColorScheme = useColorScheme()
  const { primaryColor } = useAppSelector((state) => state.global)

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: preferredColorScheme,
    getInitialValueInEffect: true
  })

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        theme={{
          colorScheme: colorScheme,
          // fontFamily: 'monospace',
          primaryColor: primaryColor
        }}
      >
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </QueryClientProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App
