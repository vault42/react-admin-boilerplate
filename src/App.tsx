import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Router } from '@router'
import { MantineProvider } from '@mantine/core'
import { Provider } from 'react-redux'
import { store } from '@store'

const App: FC = () => (
  <MantineProvider
    withGlobalStyles
    theme={{
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
)

export default App
