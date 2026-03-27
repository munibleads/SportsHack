import { useNavigate } from 'react-router-dom'
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer, LineChart, Line,
} from 'recharts'
import { TrendingUp, Target, Zap, ChevronRight } from 'lucide-react'
import {
  player, topAgent, recentMatches, improvementPlan, aiSkillRadar, performanceTrend,
} from '../data/mockData'

const C = {
  card: '#162030',
  border: '#1e3048',
  purple: '#c084fc',
  text2: '#7d8ea8',
  win: '#4ade80',
  loss: '#ff4655',
}

function AICoachCard() {
  const navigate = useNavigate()
  return (
    <div
      style={{
        position: 'relative',
        borderRadius: '18px',
        overflow: 'hidden',
        height: '380px',
        backgroundImage: 'url(https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/74075835ddc4e8457fb30f7fe560d2aff6d51702-5120x1772.png?accountingTag=VAL)',
        backgroundSize: '130%',
        backgroundPosition: '10% 15%',
        flexShrink: 0,
      }}
    >
      {/* Gradient overlays */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 55%, transparent 80%)', zIndex: 1 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)', zIndex: 1 }} />

      {/* Cover baked-in image UI element top-right */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '100px', height: '50px', background: '#1C252E', zIndex: 2 }} />

      {/* Left content */}
      <div style={{ position: 'absolute', inset: 0, padding: '28px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '500px', zIndex: 2 }}>

        {/* Label pill */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '7px',
            backgroundColor: 'rgba(192,132,252,0.12)',
            border: '1px solid rgba(192,132,252,0.35)',
            borderRadius: '20px',
            padding: '4px 12px',
          }}>
            <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', color: C.purple }}>
              AI COACH MESSAGE
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 900, fontSize: '40px', color: '#fff', lineHeight: 1.1, margin: '0 0 14px', letterSpacing: '-0.01em' }}>
          Your crosshair placement<br />is costing you rounds.
        </h1>

        {/* Body */}
        <p style={{ fontSize: '15px', color: '#b8cad8', margin: '0 0 20px', lineHeight: 1.7, maxWidth: '340px' }}>
          HS% dropped to{' '}
          <span style={{ color: C.purple, fontWeight: 600 }}>{topAgent.hsPercent}%</span>
          {' '}— down 8% over your last 5 games. We're fixing this today.
        </p>

        {/* Stat strip */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
          {[
            { label: 'HS%',      value: `${topAgent.hsPercent}%`,  trend: '▼8%',    bad: true  },
            { label: 'KDA',      value: topAgent.kda,               trend: '▲0.3',   bad: false },
            { label: 'Win Rate', value: `${topAgent.winRate}%`,     trend: '—',       bad: null  },
          ].map(s => (
            <div key={s.label} style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              backgroundColor: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              padding: '6px 12px',
            }}>
              <span style={{ fontSize: '11px', color: '#7d8ea8', letterSpacing: '0.06em' }}>{s.label}</span>
              <span style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '14px', color: '#fff' }}>{s.value}</span>
              <span style={{ fontSize: '11px', color: s.bad === true ? C.loss : s.bad === false ? C.win : C.text2 }}>{s.trend}</span>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <button
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'linear-gradient(135deg, #a855f7, #c084fc)',
              border: 'none',
              borderRadius: '10px', padding: '11px 24px',
              cursor: 'pointer',
              fontFamily: 'Rajdhani, sans-serif',
              fontWeight: 700,
              fontSize: '14px',
              letterSpacing: '0.08em',
              color: '#0d0118',
              boxShadow: '0 4px 20px rgba(168,85,247,0.4)',
              transition: 'transform 0.15s, box-shadow 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(168,85,247,0.55)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(168,85,247,0.4)' }}
            onClick={() => navigate('/analysis')}
          >
            ▶ START TODAY'S SESSION
          </button>
          <button
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '7px',
              background: 'rgba(192,132,252,0.1)',
              border: '1px solid rgba(192,132,252,0.45)',
              borderRadius: '10px', padding: '10px 20px',
              cursor: 'pointer',
              fontFamily: 'Rajdhani, sans-serif',
              fontWeight: 700,
              fontSize: '14px',
              letterSpacing: '0.08em',
              color: C.purple,
              transition: 'background 0.15s, border-color 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(192,132,252,0.18)'; e.currentTarget.style.borderColor = 'rgba(192,132,252,0.7)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(192,132,252,0.1)'; e.currentTarget.style.borderColor = 'rgba(192,132,252,0.45)' }}
          >
            💬 ASK AI COACH
          </button>
        </div>
      </div>
    </div>
  )
}

function TodaysFocusSection() {
  const diffColor = { Easy: '#4ade80', Medium: '#fbbf24', Hard: '#ff4655' }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ margin: '0 0 14px', flexShrink: 0 }}>
        <h2 style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '16px', letterSpacing: '0.1em', color: '#fff', margin: 0, textTransform: 'uppercase' }}>
          Your Assignments for Today
        </h2>
      </div>
      <div style={{ display: 'flex', gap: '14px', flex: 1 }}>
        {improvementPlan.map(task => (
          <div
            key={task.id}
            style={{
              flex: 1,
              borderRadius: '12px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              cursor: 'pointer',
              position: 'relative',
              border: `1px solid ${C.border}`,
              transition: 'border-color 0.15s',
              backgroundImage: `url(${task.bg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = C.purple }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = C.border }}
          >
            {/* Dark overlay so text stays readable */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,16,26,0.6) 0%, rgba(10,16,26,0.80) 70%, rgba(10,16,26,0.97) 100%)' }} />

            <div style={{ position: 'relative', zIndex: 1, padding: '14px', display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
              {/* Header row: mission number + XP badge */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '11px', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.7)' }}>
                  MISSION {String(task.id).padStart(2, '0')}
                </span>
                <span style={{
                  fontSize: '13px', fontWeight: 700, letterSpacing: '0.06em',
                  color: '#f0c040',
                  backgroundColor: 'rgba(240,192,64,0.15)',
                  padding: '3px 10px', borderRadius: '4px',
                }}>
                  +{task.xp} XP
                </span>
              </div>

              {/* Title + coach note grouped */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <p style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 800, fontSize: '19px', color: '#fff', margin: 0, lineHeight: 1.2, textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                  {task.title}
                </p>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.75)', margin: 0, lineHeight: 1.5, fontStyle: 'italic' }}>
                  {task.coachNote}
                </p>
              </div>

              {/* Footer: diff + time */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '10px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <span style={{ fontSize: '13px', color: diffColor[task.difficulty] || '#fff', fontWeight: 700, letterSpacing: '0.06em' }}>{task.difficulty.toUpperCase()}</span>
                <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)' }}>{task.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function AIScoreCard() {
  const recentTrend = performanceTrend.slice(-7)
  const scoreDelta = recentTrend[recentTrend.length - 1].score - recentTrend[0].score
  const bestSkill = aiSkillRadar.reduce((a, b) => a.value > b.value ? a : b)

  return (
    <div style={{ 
      backgroundColor: C.card, 
      border: `1px solid ${C.border}`, 
      borderRadius: '16px', 
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
    }}>
      {/* Score Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
            <h2 style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 900, fontSize: '36px', color: '#fff', margin: 0, lineHeight: 1, textShadow: '0 0 20px rgba(192,132,252,0.3)' }}>
              {player.aiScore}
            </h2>
            <span style={{ fontSize: '14px', color: C.text2, fontWeight: 600 }}>/ {player.aiScoreMax}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px' }}>
            <Zap size={12} color={C.purple} fill={C.purple} />
            <span style={{ fontSize: '12px', color: '#4ade80', fontWeight: 700 }}>+{scoreDelta}</span>
            <span style={{ fontSize: '11px', color: C.text2 }}>improvement</span>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <img src={player.rankIcon} alt={player.rank} style={{ width: '48px', height: '48px', objectFit: 'contain', filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.1))' }} />
          <p style={{ fontSize: '9px', color: C.purple, fontWeight: 800, margin: '2px 0 0', letterSpacing: '0.1em' }}>{player.rank}</p>
        </div>
      </div>

      {/* Rank Progress */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', fontWeight: 700, color: C.text2, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          <span>Rank Progress</span>
          <span style={{ color: '#fff' }}>82%</span>
        </div>
        <div style={{ height: '5px', backgroundColor: '#0d1521', borderRadius: '10px', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: '82%', background: `linear-gradient(90deg, ${C.purple}, #e0a7ff)`, borderRadius: '10px', boxShadow: '0 0 10px rgba(192,132,252,0.4)' }} />
        </div>
      </div>

      {/* Radar + Sparkline Grid */}
      <div style={{ display: 'flex', gap: '12px', height: '130px' }}>
        <div style={{ flex: 1.2 }}>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={aiSkillRadar} outerRadius={38}>
              <PolarGrid stroke="#1e3048" />
              <PolarAngleAxis dataKey="skill" tick={{ fill: '#7d8ea8', fontSize: 9, fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }} />
              <Radar dataKey="value" stroke={C.purple} fill={C.purple} fillOpacity={0.2} strokeWidth={2} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px' }}>
          <div style={{ height: '50px' }}>
             <p style={{ fontSize: '9px', color: C.text2, textTransform: 'uppercase', marginBottom: '6px', fontWeight: 700 }}>Trend</p>
             <ResponsiveContainer width="100%" height="100%">
                <LineChart data={recentTrend}>
                  <Line type="monotone" dataKey="score" stroke={C.purple} strokeWidth={2} dot={false} />
                </LineChart>
             </ResponsiveContainer>
          </div>
          <div style={{ backgroundColor: 'rgba(74,222,128,0.05)', border: '1px solid rgba(74,222,128,0.15)', borderRadius: '6px', padding: '6px' }}>
            <p style={{ fontSize: '8px', color: C.text2, textTransform: 'uppercase', marginBottom: '1px' }}>Peak Skill</p>
            <p style={{ fontSize: '12px', fontWeight: 800, color: C.win, margin: 0 }}>{bestSkill.skill}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function RecentMatchesCard() {
  return (
    <div style={{ 
      backgroundColor: C.card, 
      border: `1px solid ${C.border}`, 
      borderRadius: '16px', 
      padding: '24px', 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      boxSizing: 'border-box',
      boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Target size={18} color={C.purple} />
          <h3 style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 800, fontSize: '16px', letterSpacing: '0.05em', color: '#fff', margin: 0, textTransform: 'uppercase' }}>Session Feed</h3>
        </div>
        <button style={{ 
          background: 'none', border: 'none', color: C.purple, fontSize: '12px', fontWeight: 700, 
          cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '2px' 
        }}>
          HISTORY <ChevronRight size={14} />
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1, overflow: 'hidden' }}>
        {recentMatches.slice(0, 3).map((m, idx) => (
          <div
            key={m.id}
            style={{
              display: 'flex', gap: '12px',
              backgroundColor: 'rgba(255,255,255,0.02)',
              border: `1px solid ${C.border}`,
              borderRadius: '10px', padding: '10px',
              transition: 'all 0.2s',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)'
              e.currentTarget.style.borderColor = 'rgba(192,132,252,0.3)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)'
              e.currentTarget.style.borderColor = C.border
            }}
          >
            {/* Agent Icon */}
            <div style={{ position: 'relative', flexShrink: 0 }}>
              <img src={m.agent.displayIcon} alt={m.agent.displayName} style={{ width: '36px', height: '36px', borderRadius: '6px', objectFit: 'cover', border: `1px solid ${C.border}` }} />
              <div style={{ 
                position: 'absolute', bottom: -2, right: -2, width: '16px', height: '16px', 
                borderRadius: '50%', backgroundColor: '#0d1521', border: `1px solid ${C.border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <span style={{ fontSize: '7px', fontWeight: 900, color: m.won ? C.win : C.loss }}>{m.won ? 'W' : 'L'}</span>
              </div>
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
                <p style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 800, fontSize: '13px', color: '#fff', margin: 0, textTransform: 'uppercase' }}>{m.map.displayName}</p>
                <p style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 800, fontSize: '13px', color: m.won ? C.win : C.loss, margin: 0 }}>{m.score}</p>
              </div>
              <p style={{ fontSize: '10.5px', color: C.text2, margin: 0, fontStyle: 'italic', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                "{m.aiComment}"
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Motivation Tip */}
      <div style={{ marginTop: '16px', padding: '12px', backgroundColor: 'rgba(192,132,252,0.08)', borderRadius: '10px', border: '1px solid rgba(192,132,252,0.2)' }}>
        <p style={{ fontSize: '11px', color: C.purple, margin: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
          <TrendingUp size={12} />
          <strong>PRO TIP:</strong> You win 14% more rounds when playing with a Controller.
        </p>
      </div>
    </div>
  )
}


export default function Dashboard() {
  return (
    <div style={{ display: 'flex', gap: '22px', alignItems: 'stretch', minHeight: '100%' }}>
      {/* Main column */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '22px', minWidth: 0 }}>
        <AICoachCard />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <TodaysFocusSection />
        </div>
      </div>

      {/* Right panel */}
      <div style={{ width: '340px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <AIScoreCard />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <RecentMatchesCard />
        </div>
      </div>
    </div>
  )
}
