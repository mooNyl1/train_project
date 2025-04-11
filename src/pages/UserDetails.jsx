import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UserDetails({ tg }) {
  const [data, setData] = useState({ 
    weight: '', 
    height: '', 
    gender: 'male' 
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!tg) return;

    tg.MainButton.setText('СОХРАНИТЬ');
    tg.MainButton.onClick(handleSubmit);

    return () => tg.MainButton.offClick();
  }, [tg]);

  const handleSubmit = () => {
    if (data.weight && data.height) {
      tg.showPopup({
        title: 'Данные сохранены',
        message: `Вес: ${data.weight}кг, Рост: ${data.height}см`,
        buttons: [{ type: 'ok' }]
      });
      navigate('/workouts');
    } else {
      tg.showAlert('Заполните все поля!');
    }
  };

  return (
    <div className="page">
      <h2>Ваши параметры</h2>
      <input
        type="number"
        value={data.weight}
        onChange={(e) => setData({...data, weight: e.target.value})}
        placeholder="Вес (кг)"
        className="tg-input"
      />
      <input
        type="number"
        value={data.height}
        onChange={(e) => setData({...data, height: e.target.value})}
        placeholder="Рост (см)"
        className="tg-input"
      />
      <select 
        value={data.gender}
        onChange={(e) => setData({...data, gender: e.target.value})}
        className="tg-input"
      >
        <option value="male">Мужской</option>
        <option value="female">Женский</option>
      </select>
    </div>
  );
}