import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Workouts({ tg }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!tg) return;

    tg.BackButton.show();
    tg.BackButton.onClick(() => navigate('/'));
    tg.MainButton.setText('НОВАЯ ТРЕНИРОВКА');
    tg.MainButton.onClick(() => tg.showAlert('Функция в разработке'));

    return () => {
      tg.BackButton.offClick();
      tg.MainButton.offClick();
    };
  }, [tg, navigate]);

  return (
    <div className="page">
      <h2>Мои тренировки</h2>
      <div className="tg-card">
        <h3>Тренировка #1</h3>
        <p>Статус: завершена</p>
      </div>
    </div>
  );
}