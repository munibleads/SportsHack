import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer,
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid,
} from 'recharts'
import {
  player, aiSkillRadar, performanceTrend,
  agentBreakdown, roundTypeStats, clutchStats, entryStats,
  sessionDecay, progressTracker, rankComparison,
} from '../data/mockData'

const C = {
  card: '#162030', border: '#1e3048', purple: '#c084fc',
  accent: '#ff4655', text2: '#7d8ea8', win: '#4ade80', yellow: '#fbbf24',
}

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

// ─── 1. HERO BANNER ───────────────────────────────────────────────────────────
function HeroBanner() {
  return (
    <div style={{
      position: 'relative', borderRadius: '18px', overflow: 'hidden', height: '230px',
      backgroundImage: 'url(https://media.valorant-api.com/maps/2fe4ed3a-450a-948b-6d6b-e89a78e680a9/splash.png)',
      backgroundSize: 'cover', backgroundPosition: 'center 35%',
    }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.15) 100%)', zIndex: 1 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 55%)', zIndex: 1 }} />

      {/* Agent portrait */}
      <img
        src="https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportrait.png"
        alt="Jett"
        style={{
          position: 'absolute', right: '6%', bottom: 0,
          height: '115%', objectFit: 'contain',
          opacity: 0.55, zIndex: 1,
          WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 30%, transparent 100%)',
          maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 30%, transparent 100%)',
        }}
      />

      {/* Content */}
      <div style={{ position: 'absolute', inset: 0, padding: '28px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 2, maxWidth: '580px' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center',
          backgroundColor: 'rgba(192,132,252,0.12)', border: '1px solid rgba(192,132,252,0.35)',
          borderRadius: '20px', padding: '4px 14px', marginBottom: '12px', width: 'fit-content',
        }}>
          <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', color: C.purple }}>PERFORMANCE OVERVIEW</span>
        </div>

        <h1 style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 900, fontSize: '38px', color: '#fff', lineHeight: 1.1, margin: '0 0 18px', letterSpacing: '-0.01em' }}>
          Your Complete<br />Season Profile
        </h1>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {[
            { label: 'AI Score',   value: `${player.aiScore}`, sub: `/ ${player.aiScoreMax}` },
            { label: 'Matches',    value: '80',                sub: 'played'                 },
            { label: 'Win Rate',   value: '58.4%',             sub: '+3.2% this week'        },
            { label: 'Scout Rank', value: `Top ${player.scoutPercentile}%`, sub: player.region },
          ].map(s => (
            <div key={s.label} style={{
              backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '8px', padding: '8px 14px',
            }}>
              <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.45)', margin: '0 0 2px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.label}</p>
              <p style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '18px', color: '#fff', margin: 0 }}>
                {s.value} <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontWeight: 400 }}>{s.sub}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── 2. SKILL RADAR + PERFORMANCE TREND + AI PROGRESS TRACKER ──────────────────────────────────────
function SkillTrendProgress() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr 1fr', gap: '20px' }}>
      {/* AI Skill Breakdown */}
      <Card>
        <SectionTitle>AI Skill Breakdown</SectionTitle>
        <div style={{ height: '250px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={aiSkillRadar} outerRadius={88}>
              <PolarGrid stroke="#1e3048" />
              <PolarAngleAxis dataKey="skill" tick={{ fill: '#7d8ea8', fontSize: 12, fontFamily: 'Rajdhani, sans-serif' }} />
              <Radar dataKey="value" stroke={C.purple} fill={C.purple} fillOpacity={0.3} strokeWidth={2} dot={{ fill: C.purple, r: 4 }} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '8px' }}>
          {aiSkillRadar.map(d => (
            <div key={d.skill} style={{ display: 'flex', alignItems: 'center', gap: '6px', flex: '1 1 calc(50% - 3px)' }}>
              <div style={{ flex: 1, height: '3px', backgroundColor: '#1e3048', borderRadius: '2px' }}>
                <div style={{ height: '100%', width: `${d.value}%`, backgroundColor: C.purple, borderRadius: '2px' }} />
              </div>
              <span style={{ fontSize: '11px', color: C.text2, width: '72px' }}>{d.skill} {d.value}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Performance Trend */}
      <Card>
        <SectionTitle>Performance Trend</SectionTitle>
        <div style={{ height: '250px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceTrend} margin={{ top: 5, right: 10, bottom: 5, left: -20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e3048" />
              <XAxis dataKey="match" tick={{ fill: '#7d8ea8', fontSize: 10 }} label={{ value: 'Match #', position: 'insideBottom', fill: '#7d8ea8', fontSize: 10 }} />
              <YAxis domain={[700, 900]} tick={{ fill: '#7d8ea8', fontSize: 10 }} />
              <Tooltip
                contentStyle={{ backgroundColor: '#111d2c', border: '1px solid #1e3048', borderRadius: '8px', fontSize: '12px' }}
                labelStyle={{ color: '#fff' }}
                itemStyle={{ color: C.purple }}
              />
              <Line type="monotone" dataKey="score" stroke={C.purple} strokeWidth={2} dot={{ fill: C.purple, r: 3 }} activeDot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div style={{ display: 'flex', gap: '10px', marginTop: '14px' }}>
          {[
            { label: 'Improvement',  value: '+127 pts', color: C.win,    bg: 'rgba(74,222,128,0.08)',   border: 'rgba(74,222,128,0.15)'   },
            { label: 'Consistency',  value: '78%',      color: C.purple, bg: 'rgba(192,132,252,0.07)', border: 'rgba(192,132,252,0.15)'  },
            { label: 'Peak Score',   value: '847',      color: '#ff8c9a', bg: 'rgba(255,70,85,0.07)',   border: 'rgba(255,70,85,0.15)'    },
          ].map(s => (
            <div key={s.label} style={{ flex: 1, backgroundColor: s.bg, border: `1px solid ${s.border}`, borderRadius: '8px', padding: '10px 14px' }}>
              <p style={{ fontSize: '10px', color: C.text2, margin: '0 0 3px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.label}</p>
              <p style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 800, fontSize: '22px', color: s.color, margin: 0 }}>{s.value}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* AI Progress Tracker */}
      <Card>
        <SectionTitle>AI Progress Tracker</SectionTitle>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {progressTracker.map(p => {
            const progressPct = Math.min(100, ((p.current - p.before) / (p.target - p.before)) * 100)
            return (
              <div
                key={p.area}
                style={{ backgroundColor: 'rgba(0,0,0,0.2)', border: `1px solid ${C.border}`, borderRadius: '10px', padding: '12px 14px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}
              >
                <div style={{
                  flexShrink: 0, padding: '3px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 700, marginTop: '2px',
                  backgroundColor: p.priority === 'High' ? 'rgba(255,70,85,0.12)' : p.priority === 'Medium' ? 'rgba(251,191,36,0.10)' : 'rgba(125,142,168,0.08)',
                  color: p.priority === 'High' ? C.accent : p.priority === 'Medium' ? C.yellow : C.text2,
                }}>
                  {p.priority}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <p style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '13px', color: '#fff', margin: 0 }}>{p.area}</p>
                    <span style={{
                      fontSize: '11px', fontWeight: 700, padding: '2px 7px', borderRadius: '4px',
                      color: p.delta > 0 ? C.win : p.delta < 0 ? C.accent : C.text2,
                      backgroundColor: p.delta > 0 ? 'rgba(74,222,128,0.1)' : p.delta < 0 ? 'rgba(255,70,85,0.1)' : 'rgba(125,142,168,0.08)',
                      border: `1px solid ${p.delta > 0 ? 'rgba(74,222,128,0.2)' : p.delta < 0 ? 'rgba(255,70,85,0.2)' : 'rgba(125,142,168,0.15)'}`,
                    }}>
                      {p.delta > 0 ? `↑ +${p.delta}${p.unit}` : p.delta < 0 ? `↓ ${p.delta}${p.unit}` : '— No change'}
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <span style={{ fontSize: '10px', color: C.text2, flexShrink: 0, width: '30px', textAlign: 'right' }}>{p.before}{p.unit}</span>
                    <div style={{ flex: 1, height: '6px', backgroundColor: '#0d1521', borderRadius: '3px', position: 'relative' }}>
                      <div style={{ position: 'absolute', right: 0, top: '-2px', width: '2px', height: '10px', backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '1px' }} />
                      <div style={{
                        height: '100%', width: `${progressPct}%`,
                        background: p.delta > 0 ? `linear-gradient(90deg, ${C.purple}, #4ade80)` : p.delta === 0 ? '#1e3048' : C.accent,
                        borderRadius: '3px',
                      }} />
                    </div>
                    <div style={{ flexShrink: 0, textAlign: 'left' }}>
                      <span style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '12px', color: '#fff' }}>{p.current}{p.unit}</span>
                      <span style={{ fontSize: '10px', color: C.text2 }}> → {p.target}{p.unit}</span>
                    </div>
                  </div>
                  <p style={{ fontSize: '11px', color: '#a0b4c0', margin: 0, lineHeight: 1.4 }}>💡 {p.tip}</p>
                </div>
              </div>
            )
          })}
        </div>
      </Card>
    </div>
  )
}

// ─── 3. AGENT BREAKDOWN ───────────────────────────────────────────────────────
function AgentBreakdownSection() {
  return (
    <div>
      <SectionTitle>Agent Breakdown</SectionTitle>
      <div style={{ display: 'flex', gap: '14px' }}>
        {agentBreakdown.map((entry, i) => (
          <div
            key={i}
            style={{
              flex: 1, position: 'relative', borderRadius: '14px', overflow: 'hidden',
              border: `1px solid ${entry.isMain ? 'rgba(192,132,252,0.45)' : C.border}`,
              height: '190px',
              backgroundImage: `url(${entry.mapSplash})`,
              backgroundSize: 'cover', backgroundPosition: 'center',
              cursor: 'pointer', transition: 'border-color 0.15s, transform 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(192,132,252,0.6)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = entry.isMain ? 'rgba(192,132,252,0.45)' : C.border; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            {/* Map overlay */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.7) 45%, rgba(0,0,0,0.15) 100%)' }} />

            {/* Agent portrait */}
            <img
              src={entry.agent.fullPortrait}
              alt={entry.agent.displayName}
              style={{
                position: 'absolute', right: '-6%', bottom: 0,
                height: '120%', objectFit: 'contain',
                opacity: 0.8, zIndex: 1,
                WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 15%, transparent 90%)',
                maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 15%, transparent 90%)',
              }}
            />

            <div style={{ position: 'absolute', inset: 0, padding: '14px 16px', zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              {/* Top */}
              <div>
                <div style={{ display: 'flex', gap: '6px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.45)', backgroundColor: 'rgba(0,0,0,0.45)', padding: '2px 8px', borderRadius: '4px' }}>
                    {entry.role.toUpperCase()}
                  </span>
                  {entry.isMain && (
                    <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', color: C.purple, backgroundColor: 'rgba(192,132,252,0.15)', border: '1px solid rgba(192,132,252,0.3)', padding: '2px 8px', borderRadius: '4px' }}>
                      MAIN
                    </span>
                  )}
                </div>
                <p style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 900, fontSize: '24px', color: '#fff', margin: '0 0 1px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  {entry.agent.displayName}
                </p>
                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', margin: 0 }}>{entry.games} games played</p>
              </div>

              {/* Stats */}
              <div style={{ display: 'flex', gap: '8px' }}>
                {[
                  { label: 'WR',  value: `${entry.winRate}%`, color: entry.winRate >= 50 ? C.win : C.accent },
                  { label: 'KDA', value: entry.kda,           color: '#fff' },
                  { label: 'HS%', value: `${entry.hsPercent}%`, color: C.purple },
                ].map(stat => (
                  <div key={stat.label} style={{ backgroundColor: 'rgba(0,0,0,0.55)', borderRadius: '6px', padding: '5px 10px', backdropFilter: 'blur(4px)' }}>
                    <p style={{ fontSize: '9px', color: 'rgba(255,255,255,0.35)', margin: '0 0 1px', textTransform: 'uppercase', letterSpacing: '0.07em' }}>{stat.label}</p>
                    <p style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 800, fontSize: '16px', color: stat.color, margin: 0 }}>{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── 4. COMBAT STATS: ROUND ECONOMY + CLUTCH + ENTRY ─────────────────────────
function CombatStats() {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      {/* Round Economy */}
      <Card style={{ flex: 1.2 }}>
        <SectionTitle>Round Economy</SectionTitle>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {roundTypeStats.map(r => (
            <div key={r.type}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                <span style={{ fontSize: '13px', fontFamily: 'Rajdhani, sans-serif', fontWeight: 600, color: '#fff' }}>{r.type}</span>
                <span style={{ fontSize: '14px', fontWeight: 700, fontFamily: 'Rajdhani, sans-serif', color: r.color }}>{r.winRate}%</span>
              </div>
              <div style={{ height: '7px', backgroundColor: '#0d1521', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${r.winRate}%`, backgroundColor: r.color, borderRadius: '4px' }} />
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '18px', padding: '12px', backgroundColor: 'rgba(255,70,85,0.07)', border: '1px solid rgba(255,70,85,0.18)', borderRadius: '8px' }}>
          <p style={{ fontSize: '12px', color: '#b8cad8', margin: 0, lineHeight: 1.6, fontStyle: 'italic' }}>
            💡 Your eco round win rate (22%) is 14pts below Diamond average. Prioritize Ghost + headshots over saving rifles.
          </p>
        </div>
      </Card>

      {/* Clutch Factor */}
      <Card style={{ flex: 1 }}>
        <SectionTitle>Clutch Factor</SectionTitle>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {clutchStats.map(c => (
            <div key={c.scenario} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '10px', flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: c.rate >= 50 ? 'rgba(74,222,128,0.1)' : 'rgba(255,70,85,0.08)',
                border: `1px solid ${c.rate >= 50 ? 'rgba(74,222,128,0.25)' : 'rgba(255,70,85,0.2)'}`,
              }}>
                <span style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 900, fontSize: '14px', color: c.rate >= 50 ? C.win : C.accent }}>{c.scenario}</span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                  <span style={{ fontSize: '12px', color: C.text2 }}>{c.won} / {c.attempts} won</span>
                  <span style={{ fontSize: '14px', fontWeight: 700, fontFamily: 'Rajdhani, sans-serif', color: c.rate >= 50 ? C.win : C.accent }}>{c.rate}%</span>
                </div>
                <div style={{ height: '5px', backgroundColor: '#0d1521', borderRadius: '3px' }}>
                  <div style={{ height: '100%', width: `${c.rate}%`, backgroundColor: c.rate >= 50 ? C.win : C.accent, borderRadius: '3px' }} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '16px', padding: '10px 14px', backgroundColor: 'rgba(192,132,252,0.06)', border: '1px solid rgba(192,132,252,0.15)', borderRadius: '8px', textAlign: 'center' }}>
          <p style={{ fontSize: '11px', color: C.text2, margin: '0 0 3px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Clutch Score</p>
          <p style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 900, fontSize: '30px', color: C.purple, margin: 0 }}>
            41<span style={{ fontSize: '15px', color: C.text2, fontWeight: 400 }}>/100</span>
          </p>
        </div>
      </Card>

      {/* Entry & First Blood */}
      <Card style={{ flex: 1 }}>
        <SectionTitle>Entry & First Blood</SectionTitle>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            { label: 'First Blood Rate',  value: `${entryStats.firstBloodRate}%`, sub: `${entryStats.firstBloodRate} per 100 rounds`, color: C.purple, progress: entryStats.firstBloodRate },
            { label: 'Entry Duel Win %',  value: `${entryStats.entryDuelWinRate}%`, sub: `${entryStats.openDuelWon} of ${entryStats.openDuelTotal} duels`, color: C.win, progress: entryStats.entryDuelWinRate },
            { label: 'First Death Rate',  value: '18%', sub: 'per 100 rounds', color: C.accent, progress: 18 },
          ].map(stat => (
            <div key={stat.label}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
                <span style={{ fontSize: '12px', color: C.text2 }}>{stat.label}</span>
                <span style={{ fontSize: '14px', fontWeight: 700, fontFamily: 'Rajdhani, sans-serif', color: stat.color }}>{stat.value}</span>
              </div>
              <p style={{ fontSize: '10px', color: 'rgba(125,142,168,0.55)', margin: '0 0 5px' }}>{stat.sub}</p>
              <div style={{ height: '4px', backgroundColor: '#0d1521', borderRadius: '3px' }}>
                <div style={{ height: '100%', width: `${stat.progress}%`, backgroundColor: stat.color, borderRadius: '3px', opacity: 0.75 }} />
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '16px', padding: '10px 12px', backgroundColor: 'rgba(74,222,128,0.06)', border: '1px solid rgba(74,222,128,0.15)', borderRadius: '8px' }}>
          <p style={{ fontSize: '11px', color: C.win, margin: 0 }}>
            ↑ 58% entry win rate is above Diamond average (51%)
          </p>
        </div>
      </Card>
    </div>
  )
}

// ─── 5. SESSION DECAY / TILT PATTERN ─────────────────────────────────────────
function SessionDecaySection() {
  return (
    <div style={{
      position: 'relative', borderRadius: '14px', overflow: 'hidden',
      border: `1px solid ${C.border}`,
    }}>
      {/* Faint map bg */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(https://media.valorant-api.com/maps/e2ad5c54-4114-a870-9641-8ea21279579a/splash.png)',
        backgroundSize: 'cover', backgroundPosition: 'center',
        opacity: 0.07,
      }} />
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(22,32,48,0.97)' }} />

      <div style={{ position: 'relative', padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
          <div>
            <SectionTitle>Session Decay & Tilt Pattern</SectionTitle>
            <p style={{ fontSize: '13px', color: C.text2, margin: '-10px 0 0', lineHeight: 1.6 }}>
              Your AI Score drops <span style={{ color: C.accent, fontWeight: 600 }}>9.7%</span> after 4+ games in a session. HS% falls from 27% → 16%.
            </p>
          </div>
          <div style={{ padding: '10px 16px', backgroundColor: 'rgba(255,70,85,0.1)', border: '1px solid rgba(255,70,85,0.25)', borderRadius: '8px', textAlign: 'center', flexShrink: 0 }}>
            <p style={{ fontSize: '10px', color: C.text2, margin: '0 0 2px', textTransform: 'uppercase', letterSpacing: '0.07em' }}>Tilt Risk</p>
            <p style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 900, fontSize: '22px', color: C.accent, margin: 0 }}>HIGH</p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '24px' }}>
          <div style={{ flex: 2, height: '185px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sessionDecay} margin={{ top: 5, right: 14, bottom: 5, left: -10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e3048" />
                <XAxis dataKey="game" tick={{ fill: '#7d8ea8', fontSize: 10 }} />
                <YAxis yAxisId="score" domain={[760, 870]} tick={{ fill: '#7d8ea8', fontSize: 10 }} />
                <YAxis yAxisId="hs" orientation="right" domain={[10, 32]} tick={{ fill: '#7d8ea8', fontSize: 10 }} unit="%" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#111d2c', border: '1px solid #1e3048', borderRadius: '8px', fontSize: '12px' }}
                  labelStyle={{ color: '#fff' }}
                />
                <Line yAxisId="score" type="monotone" dataKey="aiScore" stroke={C.purple} strokeWidth={2} dot={{ fill: C.purple, r: 4 }} name="AI Score" />
                <Line yAxisId="hs" type="monotone" dataKey="hsPercent" stroke={C.accent} strokeWidth={2} dot={{ fill: C.accent, r: 4 }} name="HS %" strokeDasharray="5 3" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center' }}>
            <div style={{ padding: '14px', backgroundColor: 'rgba(192,132,252,0.08)', border: '1px solid rgba(192,132,252,0.2)', borderRadius: '10px' }}>
              <p style={{ fontSize: '10px', fontWeight: 700, color: C.purple, margin: '0 0 7px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>AI Coach Insight</p>
              <p style={{ fontSize: '12px', color: '#b8cad8', margin: 0, lineHeight: 1.65, fontStyle: 'italic' }}>
                "You spiral after 2 consecutive losses — HS% drops 8+ points. Cap your sessions at 3 games max and take a break after a loss streak."
              </p>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              {[
                { label: 'Peak Game', value: 'G1', color: C.win },
                { label: 'Tilt Point', value: 'G4', color: C.accent },
              ].map(s => (
                <div key={s.label} style={{ flex: 1, padding: '10px', backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: '8px', border: `1px solid ${C.border}`, textAlign: 'center' }}>
                  <p style={{ fontSize: '10px', color: C.text2, margin: '0 0 3px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.label}</p>
                  <p style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 900, fontSize: '22px', color: s.color, margin: 0 }}>{s.value}</p>
                </div>
              ))}
            </div>
            {/* Legend */}
            <div style={{ display: 'flex', gap: '14px', padding: '8px 0' }}>
              {[
                { color: C.purple, label: 'AI Score' },
                { color: C.accent, label: 'HS %', dashed: true },
              ].map(l => (
                <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '18px', height: '2px', backgroundColor: l.color, borderRadius: '1px', borderTop: l.dashed ? `2px dashed ${l.color}` : 'none', background: l.dashed ? 'none' : l.color }} />
                  <span style={{ fontSize: '11px', color: C.text2 }}>{l.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function Analysis() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <HeroBanner />
      <SkillTrendProgress />
      <AgentBreakdownSection />
      <CombatStats />
      <SessionDecaySection />
    </div>
  )
}
