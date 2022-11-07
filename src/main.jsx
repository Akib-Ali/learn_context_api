import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AppProvider } from './component/appprovider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
      <App />
  </AppProvider>
 


)
