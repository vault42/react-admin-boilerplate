import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import { store } from '@store'
import App from './App'
import './i18n'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Toaster
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: '4px'
          }
        }}
      />
    </Provider>
  </React.StrictMode>
)
