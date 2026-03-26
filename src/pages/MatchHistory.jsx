import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { allMatches } from '../data/mockData'

const C = { card: '#162030', border: '#1e3048', purple: '#c084fc', accent: '#ff4655', text2: '#7d8ea8', win: '#4ade80' }
const ALL = 'All'

function FilterBtn({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '6px 14px', borderRadius: '6px',
        border: `1px solid ${active ? C.purple : C.border}`,
        backgroundColor: active ? 'rgba(192,132,252,0.12)' : 'transparent',
        color: active ? C.purple : C.text2,
        fontSize: '12px', cursor: 'pointer',
        fontFamily: 'Rajdhani, sans-serif', fontWeight: 600, transition: 'all 0.15s',
      }}
    >
      {label}
    </button>
  )
}

export default function MatchHistory() {
  const navigate = useNavigate()
  const [mapFilter,    setMapFilter]    = useState(ALL)
  const [agentFilter,  setAgentFilter]  = useState(ALL)
  const [resultFilter, setResultFilter] = useState(ALL)

  const uniqueMaps   = [ALL, ...new Set(allMatches.map(m => m.map.displayName))]
  const uniqueAgents = [ALL, ...new Set(allMatches.map(m => m.agent.displayName))]

  const filtered = allMatches.filter(m => {
    if (mapFilter    !== ALL && m.map.displayName   !== mapFilter)   return false
    if (agentFilter  !== ALL && m.agent.displayName !== agentFilter) return false
    if (resultFilter !== ALL && (resultFilter === 'Win') !== m.won)  return false
    return true
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

      {/* Filters */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
        <span style={{ fontSize: '12px', color: C.text2, marginRight: '4px' }}>Map:</span>
        {uniqueMaps.map(m => <FilterBtn key={m} label={m} active={mapFilter === m} onClick={() => setMapFilter(m)} />)}
        <span style={{ fontSize: '12px', color: C.text2, marginLeft: '8px', marginRight: '4px' }}>Agent:</span>
        {uniqueAgents.map(a => <FilterBtn key={a} label={a} active={agentFilter === a} onClick={() => setAgentFilter(a)} />)}
        <span style={{ fontSize: '12px', color: C.text2, marginLeft: '8px', marginRight: '4px' }}>Result:</span>
        {[ALL, 'Win', 'Loss'].map(r => <FilterBtn key={r} label={r} active={resultFilter === r} onClick={() => setResultFilter(r)} />)}
      </div>

      <p style={{ fontSize: '12px', color: C.text2, margin: 0 }}>
        {filtered.length} match{filtered.length !== 1 ? 'es' : ''} — click any row to view AI debrief
      </p>

      {/* Match rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {filtered.map(m => (
          <div
            key={m.id}
            onClick={() => navigate(`/matches/${m.id}`)}
            style={{
              backgroundColor: C.card, border: `1px solid ${C.border}`, borderRadius: '12px',
              padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '14px',
              cursor: 'pointer', transition: 'all 0.15s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#1c2a3f'
              e.currentTarget.style.borderColor = 'rgba(192,132,252,0.3)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = C.card
              e.currentTarget.style.borderColor = C.border
            }}
          >
            {/* Map thumbnail */}
            <div style={{ position: 'relative', width: '120px', height: '58px', borderRadius: '10px', overflow: 'hidden', flexShrink: 0 }}>
              <img src={m.map.splash} alt={m.map.displayName} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(22,32,48,0.7), transparent, rgba(22,32,48,0.7))' }} />
            </div>

            {/* Map + date */}
            <div style={{ width: '100px', flexShrink: 0 }}>
              <p style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '16px', color: '#fff', margin: 0, textTransform: 'uppercase' }}>{m.map.displayName}</p>
              <p style={{ fontSize: '11px', color: C.text2, margin: '2px 0 0' }}>{m.date}</p>
            </div>

            {/* Agent */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100px', flexShrink: 0 }}>
              <img src={m.agent.displayIcon} alt={m.agent.displayName} style={{ width: '32px', height: '32px', borderRadius: '6px', objectFit: 'cover' }} />
              <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '13px', color: '#fff', margin: 0 }}>{m.agent.displayName}</p>
            </div>

            {/* Score */}
            <p style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '22px', color: m.won ? C.win : C.accent, margin: 0, width: '80px', flexShrink: 0, textAlign: 'center' }}>
              {m.score}
            </p>

            {/* KDA */}
            <div style={{ width: '70px', flexShrink: 0 }}>
              <p style={{ fontSize: '10px', color: C.text2, margin: '0 0 2px', textTransform: 'uppercase' }}>KDA</p>
              <p style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '14px', color: '#fff', margin: 0 }}>{m.kda}</p>
            </div>

            {/* Rank */}
            <img src={m.rank.icon} alt={m.rank.tierName} style={{ width: '36px', height: '36px', objectFit: 'contain', flexShrink: 0 }} />

            {/* AI one-liner */}
            <div style={{ flex: 1, backgroundColor: 'rgba(192,132,252,0.07)', border: '1px solid rgba(192,132,252,0.15)', borderRadius: '8px', padding: '6px 10px' }}>
              <p style={{ fontSize: '11px', color: C.purple, margin: 0 }}>⚡ {m.aiComment}</p>
            </div>

            {/* Win/Loss */}
            <span style={{
              flexShrink: 0, padding: '3px 10px', borderRadius: '4px',
              fontSize: '11px', fontWeight: 700, fontFamily: 'Rajdhani, sans-serif',
              backgroundColor: m.won ? 'rgba(74,222,128,0.12)' : 'rgba(255,70,85,0.12)',
              color: m.won ? C.win : C.accent,
            }}>
              {m.won ? 'WIN' : 'LOSS'}
            </span>

            {/* Arrow hint */}
            <span style={{ color: C.text2, fontSize: '16px', flexShrink: 0, marginLeft: '4px' }}>›</span>
          </div>
        ))}
      </div>
    </div>
  )
}
