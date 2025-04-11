import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Registration from './pages/Registration';
import UserDetails from './pages/UserDetails';
import Workouts from './pages/Workouts';
import Ratings from './pages/Ratings';
import Guide from './pages/Guide';
import Profile from './pages/Profile';

function App({ tg }) {
  useEffect(() => {
    if (tg) {
      // Настройка основной кнопки
      tg.MainButton.setParams({
        text_color: '#ffffff',
        color: '#32A6FE'
      });
    }
  }, [tg]);

  return (
    <Layout tg={tg}>
      <Routes>
        <Route path="/" element={<Registration tg={tg} />} />
        <Route path="/user-details" element={<UserDetails tg={tg} />} />
        <Route path="/workouts" element={<Workouts tg={tg} />} />
        <Route path="/ratings" element={<Ratings tg={tg} />} />
        <Route path="/guide" element={<Guide tg={tg} />} />
        <Route path="/profile" element={<Profile tg={tg} />} />
      </Routes>
    </Layout>
  );
}

export default App;