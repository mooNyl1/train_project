import { useEffect } from 'react';

export default function Guide({ tg }) {
  useEffect(() => {
    if (!tg) return;

    tg.enableClosingConfirmation();
    tg.setBackgroundColor('#050C26');

    return () => tg.disableClosingConfirmation();
  }, [tg]);

  return (
    <div className="page">
      <h2>Справочник</h2>
      <div className="tg-accordion">
        <details>
          <summary>Как начать тренировку?</summary>
          <p>Перейдите в раздел "Тренировки" и нажмите "Новая тренировка"</p>
        </details>
      </div>
    </div>
  );
}