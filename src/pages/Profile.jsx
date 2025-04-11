import { useEffect } from 'react';

export default function Profile({ tg }) {
  const user = tg?.initDataUnsafe?.user || {};

  useEffect(() => {
    if (!tg) return;

    tg.MainButton.setText('РЕДАКТИРОВАТЬ');
    tg.MainButton.show();
    tg.MainButton.onClick(() => tg.showAlert('Редактирование в разработке'));

    return () => tg.MainButton.offClick();
  }, [tg]);

  return (
    <div className="page">
      <h2>Профиль</h2>
      <div className="tg-profile-card">
        <img 
          src={user.photo_url} 
          alt="Аватар"
          className="tg-avatar"
          onError={(e) => e.target.style.display = 'none'}
        />
        <h3>{user.first_name} {user.last_name || ''}</h3>
        <p>@{user.username || 'нет username'}</p>
      </div>
    </div>
  );
}