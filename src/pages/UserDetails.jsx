import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UserDetails() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('male');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (weight && height) {
      navigate('/workouts');
    }
  };

  return (
    <div>
      <h1>Данные пользователя</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Вес (кг)"
          required
        />
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Рост (см)"
          required
        />
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Мужской</option>
          <option value="female">Женский</option>
        </select>
        <button type="submit">Завершить регистрацию</button>
      </form>
    </div>
  );
}