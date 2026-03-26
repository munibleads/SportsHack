import { agents, rankTiers } from '../data/assets'
import { player, achievements, topAgent } from '../data/mockData'

const C = { card: '#162030', border: '#1e3048', purple: '#c084fc', accent: '#ff4655', text2: '#7d8ea8', win: '#4ade80' }

const rankHistory = [
  { season: 'S8', rank: 'Gold 2',       icon: 'https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/13/largeicon.png' },
  { season: 'S9', rank: 'Platinum 3',   icon: 'https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/17/largeicon.png' },
  { season: 'S10', rank: 'Diamond 1',   icon: 'https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/18/largeicon.png' },
  { season: 'S11', rank: 'Diamond 2',   icon: 'https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/19/largeicon.png' },
]

const topAgents = [
  { ...agents[0], winRate: 58, kda: 1.87, games: 92 },
  { ...agents[1], winRate: 54, kda: 1.72, games: 61 },
  { ...agents[2], winRate: 51, kda: 1.55, games: 38 },
]

function SectionTitle({ children }) {
  return (
    <h2 style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '16px', letterSpacing: '0.1em', color: '#fff', margin: '0 0 16px', textTransform: 'uppercase' }}>
      {children}
    </h2>
  )
}

function Card({ children, style }) {
  return (
    <div style={{ backgroundColor: C.card, border: `1px solid ${C.border}`, borderRadius: '14px', padding: '24px', ...style }}>
      {children}
    </div>
  )
}

export default function Profile() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Profile Header */}
      <div
        style={{
          borderRadius: '16px',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #12012f 0%, #2a0f5a 35%, #1a2035 100%)',
          padding: '30px',
          display: 'flex',
          gap: '24px',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        {/* Avatar */}
        <img
          src={player.avatar}
          alt={player.name}
          style={{ width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover', backgroundColor: '#1a2535', border: '3px solid rgba(192,132,252,0.4)', flexShrink: 0 }}
        />

        {/* Info */}
        <div style={{ flex: 1 }}>
          <p style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 900, fontSize: '42px', color: '#fff', margin: 0, lineHeight: 1 }}>{player.name}</p>
          <p style={{ fontSize: '13px', color: C.text2, margin: '4px 0 16px' }}>Level {player.level} · {player.region} Region</p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {[
              { label: 'Win Rate', value: '58.4%' },
              { label: 'K/D',      value: '1.87'  },
              { label: 'HS %',     value: '24.3%' },
              { label: 'Matches',  value: '191'   },
            ].map(s => (
              <div key={s.label}>
                <p style={{ fontSize: '10px', color: C.text2, margin: '0 0 2px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.label}</p>
                <p style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '20px', color: '#fff', margin: 0 }}>{s.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Rank + AI Score */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
          <img src={player.rankIcon} alt={player.rank} style={{ width: '64px', height: '64px', objectFit: 'contain' }} />
          <p style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '16px', color: '#fff', margin: 0 }}>{player.rank}</p>
          <p style={{ fontSize: '11px', color: C.text2, margin: 0 }}>AI Score: {player.aiScore}</p>
          <p style={{ fontSize: '11px', color: C.purple, margin: 0 }}>Top {player.scoutPercentile}% MENA</p>
        </div>
      </div>

      {/* Row 2: Top Agents + Rank History */}
      <div style={{ display: 'flex', gap: '20px' }}>
        {/* Top Agents */}
        <Card style={{ flex: 2 }}>
          <SectionTitle>Top Agents</SectionTitle>
          <div style={{ display: 'flex', gap: '12px' }}>
            {topAgents.map((a, i) => (
              <div
                key={a.uuid}
                style={{
                  flex: 1,
                  borderRadius: '12px',
                  overflow: 'hidden',
                  position: 'relative',
                  height: '200px',
                  backgroundColor: '#111d2c',
                  border: i === 0 ? `1px solid rgba(192,132,252,0.3)` : `1px solid ${C.border}`,
                  cursor: 'pointer',
                }}
              >
                <img src={a.fullPortrait} alt={a.displayName} style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center bottom' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,21,33,0.95) 0%, rgba(13,21,33,0.2) 55%, transparent 100%)' }} />
                {i === 0 && (
                  <div style={{ position: 'absolute', top: '8px', left: '8px', backgroundColor: C.purple, padding: '2px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 700, color: '#fff' }}>
                    MAIN
                  </div>
                )}
                <div style={{ position: 'absolute', bottom: '10px', left: '10px', right: '10px' }}>
                  <p style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '16px', color: '#fff', margin: 0, textTransform: 'uppercase' }}>{a.displayName}</p>
                  <div style={{ display: 'flex', gap: '10px', marginTop: '2px' }}>
                    <span style={{ fontSize: '11px', color: C.win }}>{a.winRate}% WR</span>
                    <span style={{ fontSize: '11px', color: C.text2 }}>KDA {a.kda}</span>
                    <span style={{ fontSize: '11px', color: C.text2 }}>{a.games}G</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Rank History */}
        <Card style={{ flex: 1 }}>
          <SectionTitle>Rank History</SectionTitle>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {rankHistory.map(r => (
              <div key={r.season} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px', backgroundColor: '#111d2c', borderRadius: '8px' }}>
                <img src={r.icon} alt={r.rank} style={{ width: '36px', height: '36px', objectFit: 'contain', flexShrink: 0 }} />
                <div>
                  <p style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '14px', color: '#fff', margin: 0 }}>{r.rank}</p>
                  <p style={{ fontSize: '11px', color: C.text2, margin: 0 }}>Season {r.season}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Achievements */}
      <div>
        <SectionTitle>Achievements</SectionTitle>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {achievements.map(a => (
            <div
              key={a.title}
              style={{
                flex: '1 1 calc(33% - 8px)',
                backgroundColor: a.unlocked ? C.card : '#111d2c',
                border: `1px solid ${a.unlocked ? C.border : '#1a2535'}`,
                borderRadius: '12px',
                padding: '16px',
                display: 'flex',
                gap: '12px',
                alignItems: 'center',
                opacity: a.unlocked ? 1 : 0.45,
              }}
            >
              <span style={{ fontSize: '28px', flexShrink: 0 }}>{a.emoji}</span>
              <div>
                <p style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '14px', color: '#fff', margin: 0 }}>{a.title}</p>
                <p style={{ fontSize: '11px', color: C.text2, margin: '2px 0 0' }}>{a.desc}</p>
                {!a.unlocked && <p style={{ fontSize: '10px', color: '#5a7a9a', margin: '3px 0 0' }}>🔒 Locked</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
