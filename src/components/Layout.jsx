export default function Layout({ children }) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        backgroundColor: '#050C26',
        padding: '20px'
      }}>
        {children}
      </div>
    );
  }