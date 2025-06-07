import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GrowthBookProvider } from '@growthbook/growthbook-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GrowthBookProvider>
      <App />
    </GrowthBookProvider>
  </React.StrictMode>,
)
