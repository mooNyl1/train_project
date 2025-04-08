import { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setMessage(`Вы ввели: ${inputValue}`);
      setInputValue('');
    } else {
      setMessage('Пожалуйста, введите текст');
    }
  };

  return (
    <div className="app">
      <h1>Мини-приложение</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Введите текст..."
          className="input-field"
        />
        <button type="submit" className="submit-button">
          Отправить
        </button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default App;