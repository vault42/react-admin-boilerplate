import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Router } from '@router'
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider
} from '@mantine/core'
import { useColorScheme, useLocalStorage } from '@mantine/hooks'
import { Provider } from 'react-redux'
import { store } from '@store'

const App: FC = () => {
  const preferredColorScheme = useColorScheme()

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
          primaryColor: 'cyan'
        }}
      >
        <Provider store={store}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Provider>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App
