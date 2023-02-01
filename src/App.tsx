import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Router } from '@router'
import { MantineProvider } from '@mantine/core'

const App: FC = () => (
  <MantineProvider
    withGlobalStyles
    theme={{
      fontFamily: 'monospace',
      primaryColor: 'cyan'
    }}
  >
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </MantineProvider>
)

export default App
