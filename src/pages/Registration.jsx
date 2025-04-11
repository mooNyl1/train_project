import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Registration({ tg }) {
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!tg) return;

    // Автозаполнение из данных Telegram
    if (tg.initDataUnsafe?.user) {
      const { first_name, username } = tg.initDataUnsafe.user;
      setNickname(username || first_name || '');
    }

    // Настройка кнопки "Далее"
    tg.MainButton.setText('ПРОДОЛЖИТЬ');
    tg.MainButton.onClick(() => {
      if (nickname.trim()) {
        navigate('/user-details');
      } else {
        tg.showAlert('Введите никнейм!');
      }
    });

    return () => tg.MainButton.offClick();
  }, [tg, nickname, navigate]);

  useEffect(() => {
    if (!tg) return;
    tg.MainButton[nickname.trim() ? 'show' : 'hide']();
  }, [tg, nickname]);

  return (
    <div className="page">
      <h2>Введите никнейм</h2>
      <input
        type="text"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        placeholder="Ваш игровой ник"
        className="tg-input"
      />
    </div>
  );
}