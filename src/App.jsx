import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Layout from './components/Layout'
import Registration from './pages/Registration'
import UserDetails from './pages/UserDetails'
import Workouts from './pages/Workouts'
import Ratings from './pages/Ratings'
import Guide from './pages/Guide'
import Profile from './pages/Profile'

export default function App({ tg }) {
  return (
    <Router>
      <Layout tg={tg}>
        <nav className="nav">
          <Link to="/">Регистрация</Link>
          <Link to="/user-details">Данные</Link>
          <Link to="/workouts">Тренировки</Link>
          <Link to="/ratings">Рейтинг</Link>
          <Link to="/guide">Справочник</Link>
          <Link to="/profile">Профиль</Link>
        </nav>
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
  )
}