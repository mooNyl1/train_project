import { useEffect } from 'react';

export default function Ratings({ tg }) {
  useEffect(() => {
    if (!tg) return;

    tg.setHeaderColor('secondary_bg');
    tg.BackButton.show();
    tg.BackButton.onClick(() => window.history.back());

    return () => tg.BackButton.offClick();
  }, [tg]);

  return (
    <div className="page">
      <h2>Рейтинг игроков</h2>
      <table className="tg-table">
        <thead>
          <tr>
            <th>Место</th>
            <th>Игрок</th>
            <th>Очки</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>User1</td><td>1500</td></tr>
          <tr><td>2</td><td>User2</td><td>1400</td></tr>
        </tbody>
      </table>
    </div>
  );
}