import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Инициализация Telegram WebApp
const tg = window.Telegram?.WebApp;

if (tg) {
  tg.expand();
  tg.enableClosingConfirmation();
} else {
  console.warn('Telegram WebApp not detected! Running in fallback mode');
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App tg={tg} />
  </React.StrictMode>
);