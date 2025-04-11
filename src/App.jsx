import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Registration from './pages/Registration';
import UserDetails from './pages/UserDetails';
import Workouts from './pages/Workouts';
import Ratings from './pages/Ratings';
import Guide from './pages/Guide';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/user-details" element={<UserDetails />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/ratings" element={<Ratings />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;