// Убедитесь, что используется default export
export default function Layout({ children, tg }) {
    return (
      <div style={{ 
        padding: '20px',
        background: tg?.themeParams?.bg_color || '#050C26',
        color: tg?.themeParams?.text_color || 'white',
        minHeight: '100vh'
      }}>
        {children}
      </div>
    )
  }