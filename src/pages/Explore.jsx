import { Search, TrendingUp } from 'lucide-react'
import { leaderboard, risingTalent } from '../data/mockData'

const C = { card: '#162030', border: '#1e3048', purple: '#c084fc', accent: '#ff4655', text2: '#7d8ea8', win: '#4ade80' }

function SectionTitle({ children }) {
  return (
    <h2 style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '16px', letterSpacing: '0.1em', color: '#fff', margin: '0 0 16px', textTransform: 'uppercase' }}>
      {children}
    </h2>
  )
}

export default function Explore() {
  return (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
      {/* Main — Leaderboard */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <SectionTitle>MENA Leaderboard</SectionTitle>

        {/* Table header */}
        <div style={{ display: 'flex', gap: '12px', padding: '8px 16px', marginBottom: '6px' }}>
          {['#', 'Player', 'Rank', 'AI Score', 'Win Rate', 'Region'].map((h, i) => (
            <span
              key={h}
              style={{
                fontSize: '10px', color: C.text2, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600,
                flex: i === 1 ? 2 : 1, textAlign: i > 1 ? 'center' : 'left',
              }}
            >
              {h}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {leaderboard.map(p => {
            const isMe = p.name === 'ProGamer_SA'
            return (
              <div
                key={p.rank}
                style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  backgroundColor: isMe ? 'rgba(192,132,252,0.08)' : C.card,
                  border: `1px solid ${isMe ? C.purple : C.border}`,
                  borderRadius: '10px',
                  padding: '10px 16px',
                  cursor: 'pointer',
                  transition: 'background-color 0.15s',
                }}
                onMouseEnter={e => { if (!isMe) e.currentTarget.style.backgroundColor = '#1c2a3f' }}
                onMouseLeave={e => { if (!isMe) e.currentTarget.style.backgroundColor = C.card }}
              >
                {/* Rank # */}
                <span style={{
                  flex: 1, fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '16px',
                  color: p.rank <= 3 ? C.purple : C.text2,
                }}>
                  {p.rank <= 3 ? ['🥇','🥈','🥉'][p.rank - 1] : p.rank}
                </span>

                {/* Player */}
                <div style={{ flex: 2, display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <img src={p.avatar} alt={p.name} style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover', backgroundColor: '#1a2535' }} />
                  <div>
                    <p style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '14px', color: isMe ? C.purple : '#fff', margin: 0 }}>
                      {p.name} {isMe && <span style={{ fontSize: '10px', color: C.purple }}>(You)</span>}
                    </p>
                  </div>
                </div>

                {/* Rank tier */}
                <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                  <img src={p.rankTier.icon} alt={p.rankTier.tierName} style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                </div>

                {/* AI Score */}
                <span style={{ flex: 1, fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '15px', color: '#fff', textAlign: 'center' }}>{p.aiScore}</span>

                {/* Win Rate */}
                <span style={{ flex: 1, fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '15px', color: p.winRate >= 60 ? C.win : '#fff', textAlign: 'center' }}>{p.winRate}%</span>

                {/* Region */}
                <span style={{ flex: 1, fontSize: '12px', color: C.text2, textAlign: 'center' }}>{p.region}</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Right — Rising Talent */}
      <div style={{ width: '290px', flexShrink: 0 }}>
        <SectionTitle>Rising Talent</SectionTitle>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {risingTalent.map(p => (
            <div
              key={p.name}
              style={{
                backgroundColor: C.card,
                border: `1px solid ${C.border}`,
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
            >
              {/* Top gradient strip */}
              <div style={{ height: '4px', background: 'linear-gradient(to right, #7c3aed, #c084fc)' }} />
              <div style={{ padding: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <img src={p.avatar} alt={p.name} style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', backgroundColor: '#1a2535' }} />
                  <div>
                    <p style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '14px', color: '#fff', margin: 0 }}>{p.name}</p>
                    <p style={{ fontSize: '11px', color: C.text2, margin: 0 }}>{p.region}</p>
                  </div>
                  <img src={p.rankTier.icon} alt={p.rankTier.tierName} style={{ width: '30px', height: '30px', objectFit: 'contain', marginLeft: 'auto' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <p style={{ fontSize: '10px', color: C.text2, margin: '0 0 2px', textTransform: 'uppercase' }}>AI Score</p>
                    <p style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '18px', color: '#fff', margin: 0 }}>{p.aiScore}</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <TrendingUp size={14} color={C.win} />
                    <span style={{ fontSize: '12px', color: C.win, fontWeight: 600 }}>{p.improvement}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Scout CTA */}
          <div
            style={{
              backgroundColor: 'rgba(192,132,252,0.08)',
              border: `1px solid rgba(192,132,252,0.2)`,
              borderRadius: '12px',
              padding: '14px',
              textAlign: 'center',
            }}
          >
            <p style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '14px', color: C.purple, margin: '0 0 4px' }}>Are you a Scout?</p>
            <p style={{ fontSize: '11px', color: C.text2, margin: '0 0 10px' }}>Get full access to MENA talent profiles and contact top players.</p>
            <button
              style={{
                width: '100%', padding: '8px', borderRadius: '8px',
                background: 'linear-gradient(135deg, #7c3aed, #c084fc)',
                border: 'none', color: '#fff', fontFamily: 'Rajdhani, sans-serif',
                fontWeight: 700, fontSize: '13px', cursor: 'pointer',
                letterSpacing: '0.05em',
              }}
            >
              REQUEST SCOUT ACCESS
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
