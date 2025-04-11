import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const tg = window.Telegram?.WebApp
if (tg) {
  tg.expand()
  tg.enableClosingConfirmation()
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App tg={tg} />
  </React.StrictMode>
)