import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Registration() {
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nickname.trim()) {
      navigate('/user-details');
    }
  };

  return (
    <div>
      <h1>Регистрация</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="Введите ваш никнейм"
          required
        />
        <button type="submit">Далее</button>
      </form>
    </div>
  );
}