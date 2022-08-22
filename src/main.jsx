import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppProvider } from './context'
import { AppRoutes } from './routes'
import { ChakraProvider } from '@chakra-ui/react'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </ChakraProvider>
  </React.StrictMode>
)
