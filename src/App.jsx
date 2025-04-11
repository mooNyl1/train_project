import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Registration from './pages/Registration';
import UserDetails from './pages/UserDetails';
import Workouts from './pages/Workouts';
import Ratings from './pages/Ratings';
import Guide from './pages/Guide';
import Profile from './pages/Profile';

function App({ tg }) {
  return (
    <Router>
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
    </Router>
  );
}

export default App;