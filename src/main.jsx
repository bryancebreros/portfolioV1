import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { LanguageProvider } from './context/LanguageContext'
import { MenuProvider } from './context/MenuContext'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <MenuProvider>
       
        <App />
      </MenuProvider>
    </LanguageProvider>
  </React.StrictMode>,
)
