export default function Layout({ children, tg }) {
  return (
    <div style={{
      minHeight: '100vh',
      paddingBottom: tg ? 0 : '60px', // Для кнопки в веб-версии
      backgroundColor: 'var(--tg-theme-bg-color, #050C26)'
    }}>
      {children}
      
      {/* Кнопка "Назад" для Telegram */}
      {tg && <button 
        onClick={() => tg.BackButton.show()}
        style={{ display: 'none' }}
        id="tg-back-button"
      />}
    </div>
  );
}