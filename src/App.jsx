import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Analysis from './pages/Analysis'
import MatchHistory from './pages/MatchHistory'
import MatchDetail from './pages/MatchDetail'
import Explore from './pages/Explore'
import Profile from './pages/Profile'
import CompetitorAnalysis from './pages/CompetitorAnalysis'

export default function App() {
  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', backgroundColor: '#0d1521' }}>
        <Sidebar />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <main style={{ flex: 1, overflowY: 'auto', padding: '28px' }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/analysis" element={<Analysis />} />
              <Route path="/matches" element={<MatchHistory />} />
              <Route path="/matches/:id" element={<MatchDetail />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/competitor" element={<CompetitorAnalysis />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}
