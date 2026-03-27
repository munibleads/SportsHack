import { useState } from 'react'
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts'
import { Zap, Map, Users } from 'lucide-react'

const C = {
  card: '#162030', border: '#1e3048', purple: '#c084fc',
  accent: '#ff4655', text2: '#7d8ea8', win: '#4ade80',
  yellow: '#fbbf24', blue: '#60a5fa', bg: '#0d1521',
}

// ─── DATA ─────────────────────────────────────────────────────────────────────

const TEAM = {
  name: 'Stallions Esports',
  org: 'Al-Qadsiah Football Club · Esports Division',
  region: 'MENA',
  logo: 'https://liquipedia.net/commons/images/1/1c/Stallions_%28Saudi_Arabian_team%29_allmode.png',
  winRate: 71,
  wins: 29,
  losses: 12,
  totalMatches: 41,
  winStreak: 8,
  earnings: '$55,487',
  peakRank: '#1 MENA',
  status: 'ACTIVE · 2026',
  threatLevel: 82,
  threatLabel: 'HIGH',
  aiRecommendation:
    'Stallions lean on IGL-driven structured setups from Avvix. Disrupt their default reads with unexpected aggression mid-round. Target Abyss and Breeze — their newer additions on those maps show coordination gaps. Force fast-paced chaos over slow methodical rounds.',
}

const ROSTER = [
  {
    ign: 'Avvix',
    realName: 'Abdulaziz Alghanmi',
    country: 'Saudi Arabia', flag: '🇸🇦',
    role: 'IGL / Controller', roleColor: C.purple,
    agent: { name: 'Omen', uuid: '8e253930-4c05-31dd-1b6c-968525494517' },
    acs: 211, kda: '1.24', hs: 21,
  },
  {
    ign: 'Susano',
    realName: 'Akhmed Markhiev',
    country: 'Russia', flag: '🇷🇺',
    role: 'Duelist', roleColor: C.accent,
    agent: { name: 'Jett', uuid: 'add6443a-41bd-e414-f6ad-e58d267f4e95' },
    acs: 274, kda: '1.38', hs: 29,
  },
  {
    ign: 'Akai',
    realName: 'Saif Alnuaimi',
    country: 'UAE', flag: '🇦🇪',
    role: 'Duelist', roleColor: C.accent,
    agent: { name: 'Raze', uuid: 'f94c3b30-42be-e959-889c-5aa313dba261' },
    acs: 268, kda: '1.33', hs: 27,
  },
  {
    ign: 'Br1ckzl',
    realName: 'Anas Bassem',
    country: 'Syria', flag: '🇸🇾',
    role: 'Initiator', roleColor: C.yellow,
    agent: { name: 'Sova', uuid: '320b2a48-4d9b-a075-30f1-1f93a9b638fa' },
    acs: 218, kda: '1.19', hs: 23,
  },
  {
    ign: 'Koji',
    realName: 'Omar Hraiz',
    country: 'UAE', flag: '🇦🇪',
    role: 'Sentinel', roleColor: C.win,
    agent: { name: 'Killjoy', uuid: '1e58de9c-4950-5125-93e9-a0aee9f98746' },
    acs: 194, kda: '1.11', hs: 20,
  },
  {
    ign: 'AL7B',
    realName: 'Othman Al-Amoudi',
    country: 'Saudi Arabia', flag: '🇸🇦',
    role: 'Controller', roleColor: C.blue,
    agent: { name: 'Viper', uuid: '707eab51-4836-f488-046a-cda6bf494859' },
    acs: 203, kda: '1.16', hs: 19,
  },
]

const PLAYSTYLE_RADAR = [
  { skill: 'Aggression',    value: 74, fullMark: 100 },
  { skill: 'Team Coord',    value: 85, fullMark: 100 },
  { skill: 'Utility',       value: 80, fullMark: 100 },
  { skill: 'Indiv. Aim',    value: 82, fullMark: 100 },
  { skill: 'Map Control',   value: 78, fullMark: 100 },
  { skill: 'Adaptability',  value: 70, fullMark: 100 },
  { skill: 'Defense',       value: 76, fullMark: 100 },
]


const COUNTER_STRATEGIES = [
  {
    num: '01',
    title: 'Disrupt Default Reads',
    Icon: Zap,
    color: C.purple,
    borderHover: 'rgba(192,132,252,0.7)',
    mapSplash: 'https://media.valorant-api.com/maps/d960549e-485c-e861-8d71-aa9d1aed12a2/splash.png',
    mapName: 'SPLIT',
    tip: "Stallions rely heavily on Avvix's IGL reads and structured defaults. Break their rhythm with unconventional aggression mid-round — off-angle peeks and unexpected map control denies their setup time and forces reactive, unscripted plays.",
  },
  {
    num: '02',
    title: 'Target Breeze & Pearl',
    Icon: Map,
    color: C.yellow,
    borderHover: 'rgba(251,191,36,0.7)',
    mapSplash: 'https://media.valorant-api.com/maps/2fb9a4fd-47b8-4e7d-a969-74b4046ebd53/splash.png',
    mapName: 'BREEZE',
    tip: "Stallions sit below 60% win rate on Breeze and Pearl. Prioritize these in map veto — they have less practiced team compositions and coordination gaps on open-space maps where individual aim duels dominate over structured team play.",
  },
  {
    num: '03',
    title: 'Exploit Roster Recency',
    Icon: Users,
    color: C.accent,
    borderHover: 'rgba(255,70,85,0.7)',
    mapSplash: 'https://media.valorant-api.com/maps/2bee0dc9-4ffe-519b-1cbd-7fbe763a6047/splash.png',
    mapName: 'HAVEN',
    tip: "Susano, Br1ckzl, and AL7B only joined in January 2026. Their in-game chemistry is still forming. Apply high-pressure compositions that demand tight mid-round communication — new roster members under chaos are more likely to mis-rotate or overlap.",
  },
]

// ─── HELPERS ──────────────────────────────────────────────────────────────────

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
      position: 'relative', borderRadius: '18px', overflow: 'hidden', height: '300px',
      backgroundImage: 'url(https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/splash.png)',
      backgroundSize: 'cover', backgroundPosition: 'center 35%',
    }}>
      {/* Dark base overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)', zIndex: 1 }} />
      {/* Left-to-right gradient — keeps left readable, fades right */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(13,21,33,0.98) 0%, rgba(13,21,33,0.85) 40%, rgba(13,21,33,0.4) 68%, transparent 100%)', zIndex: 2 }} />
      {/* Bottom vignette */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,21,33,0.7) 0%, transparent 50%)', zIndex: 2 }} />

      {/* Right side — logo panel */}
      <div style={{
        position: 'absolute', right: 0, top: 0, bottom: 0, width: '340px', zIndex: 3,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {/* Glow ring behind logo */}
        <div style={{
          position: 'absolute',
          width: '200px', height: '200px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,70,85,0.18) 0%, rgba(255,70,85,0.06) 50%, transparent 70%)',
          filter: 'blur(12px)',
        }} />
        {/* Logo */}
        <img
          src={TEAM.logo}
          alt="Stallions Esports"
          style={{
            position: 'relative', width: '260px', height: 'auto',
            objectFit: 'contain', zIndex: 4,
            filter: 'drop-shadow(0 0 24px rgba(255,70,85,0.35)) drop-shadow(0 4px 12px rgba(0,0,0,0.8))',
          }}
        />
      </div>

      {/* Left — text content */}
      <div style={{
        position: 'absolute', inset: 0, padding: '32px 40px',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        zIndex: 4, maxWidth: '580px',
      }}>
        {/* Label pill */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          backgroundColor: 'rgba(255,70,85,0.12)', border: '1px solid rgba(255,70,85,0.35)',
          borderRadius: '20px', padding: '5px 16px', marginBottom: '14px', width: 'fit-content',
        }}>
          <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', color: C.accent }}>COMPETITOR ANALYSIS · MENA · 2026</span>
        </div>

        {/* Team name + disbanded badge */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '6px' }}>
          <h1 style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 900, fontSize: '46px', color: '#fff', lineHeight: 1, margin: 0, letterSpacing: '-0.01em' }}>
            Stallions Esports
          </h1>
          <div style={{
            backgroundColor: 'rgba(74,222,128,0.15)', border: '1px solid rgba(74,222,128,0.4)',
            borderRadius: '6px', padding: '5px 10px', marginTop: '8px', flexShrink: 0,
          }}>
            <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', color: C.win }}>ACTIVE · #1 MENA</span>
          </div>
        </div>

        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', margin: '0 0 22px', letterSpacing: '0.04em', fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}>
          Al-Qadsiah Football Club · Esports Division · Valorant
        </p>

        {/* Stat strip */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {[
            { label: 'Win Rate',    value: '71%',     sub: '29 / 41'          },
            { label: 'Win Streak',  value: '8',       sub: 'consecutive'      },
            { label: 'Rank',        value: '#1',      sub: 'MENA Region'      },
            { label: 'Earnings',    value: '$55,487', sub: 'career total'     },
          ].map(s => (
            <div key={s.label} style={{
              backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '10px', padding: '9px 16px', backdropFilter: 'blur(8px)',
            }}>
              <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', margin: '0 0 3px', textTransform: 'uppercase', letterSpacing: '0.07em' }}>{s.label}</p>
              <p style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '19px', color: '#fff', margin: 0 }}>
                {s.value} <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.38)', fontWeight: 400 }}>{s.sub}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── 2. STRENGTHS / WEAKNESSES / PLAYSTYLE ────────────────────────────────────
function AnalysisRow() {
  const strengths = [
    '#1 MENA ranked team — dominant in regional and Saudi eLeague circuits',
    'IGL-driven structure from Avvix enables disciplined, read-based setups',
    'Dual duelist threat with Susano and Akai providing elite individual firepower',
    'Won VCL 2026 MENA Kickoff and Saudi eLeague Major 3 — proven clutch performance',
  ]
  const weaknesses = [
    'Susano, Br1ckzl & AL7B joined January 2026 — team chemistry still maturing',
    'Mixed EMEA results — inconsistent against top non-MENA competition',
    'Below 60% win rate on Breeze and Pearl — exploitable in map veto',
    'Structured defaults vulnerable to mid-round aggression and chaos play',
  ]

  return (
    <Card style={{ padding: '24px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '24px', alignItems: 'start' }}>

        {/* Strengths */}
        <div style={{ borderTop: `3px solid ${C.win}`, paddingTop: '16px' }}>
          <SectionTitle>Strengths</SectionTitle>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {strengths.map((s, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: '10px',
                padding: '10px 0',
                borderBottom: i < strengths.length - 1 ? `1px solid rgba(30,48,72,0.6)` : 'none',
              }}>
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: C.win, flexShrink: 0, marginTop: '5px' }} />
                <span style={{ fontSize: '13px', color: '#c8dae8', lineHeight: 1.5 }}>{s}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Weaknesses */}
        <div style={{ borderTop: `3px solid ${C.accent}`, paddingTop: '16px' }}>
          <SectionTitle>Weaknesses</SectionTitle>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {weaknesses.map((w, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: '10px',
                padding: '10px 0',
                borderBottom: i < weaknesses.length - 1 ? `1px solid rgba(30,48,72,0.6)` : 'none',
              }}>
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: C.accent, flexShrink: 0, marginTop: '5px' }} />
                <span style={{ fontSize: '13px', color: '#c8dae8', lineHeight: 1.5 }}>{w}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Playstyle Radar */}
        <div style={{ borderTop: `3px solid ${C.accent}`, paddingTop: '16px' }}>
          <SectionTitle>Playstyle Radar</SectionTitle>
          <div style={{ height: '260px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={PLAYSTYLE_RADAR} outerRadius={85}>
                <PolarGrid stroke="#1e3048" />
                <PolarAngleAxis dataKey="skill" tick={{ fill: '#7d8ea8', fontSize: 11, fontFamily: 'Rajdhani, sans-serif' }} />
                <Radar dataKey="value" stroke={C.accent} fill={C.accent} fillOpacity={0.25} strokeWidth={2} dot={{ fill: C.accent, r: 3 }} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Playstyle Breakdown */}
        <div style={{ borderTop: `3px solid ${C.text2}`, paddingTop: '16px' }}>
          <SectionTitle>Playstyle Breakdown</SectionTitle>
          <p style={{ fontSize: '12px', color: C.text2, lineHeight: 1.6, marginBottom: '16px' }}>
            Stallions play a structured, IGL-read-driven style with strong team coordination. Aggression is calculated rather than raw — adaptability is their most improvable trait as the new roster finds cohesion.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
            {PLAYSTYLE_RADAR.map(d => (
              <div key={d.skill} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '11px', color: C.text2, width: '88px', flexShrink: 0, fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>{d.skill}</span>
                <div style={{ flex: 1, height: '3px', backgroundColor: '#1e3048', borderRadius: '2px' }}>
                  <div style={{ height: '100%', width: `${d.value}%`, backgroundColor: C.accent, borderRadius: '2px' }} />
                </div>
                <span style={{ fontSize: '11px', color: '#fff', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, width: '24px', textAlign: 'right' }}>{d.value}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Card>
  )
}

// ─── 5. ROSTER CARDS ──────────────────────────────────────────────────────────
function RosterCards() {
  const [hovered, setHovered] = useState(null)

  return (
    <div>
      <div style={{ marginBottom: '16px' }}>
        <SectionTitle>Player Roster</SectionTitle>
      </div>
      <div className="no-scrollbar" style={{ overflowX: 'auto', paddingBottom: '8px' }}>
        <div style={{ display: 'flex', gap: '16px', minWidth: 'max-content' }}>
          {ROSTER.map((p) => {
            const isHovered = hovered === p.ign
            return (
              <div
                key={p.ign}
                onMouseEnter={() => setHovered(p.ign)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  position: 'relative', width: '200px', height: '280px', flexShrink: 0,
                  borderRadius: '14px', overflow: 'hidden',
                  backgroundColor: C.card,
                  border: `1px solid ${isHovered ? p.roleColor : C.border}`,
                  transition: 'border-color 0.2s ease',
                  cursor: 'default',
                }}
              >
                {/* Agent portrait bg */}
                <img
                  src={`https://media.valorant-api.com/agents/${p.agent.uuid}/fullportrait.png`}
                  alt={p.agent.name}
                  style={{
                    position: 'absolute', right: '-10px', bottom: 0,
                    height: '90%', objectFit: 'contain', opacity: 0.30,
                    WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 60%, transparent 100%)',
                    maskImage: 'linear-gradient(to left, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 60%, transparent 100%)',
                  }}
                />

                {/* Role badge */}
                <div style={{
                  position: 'absolute', top: '12px', right: '12px', zIndex: 3,
                  backgroundColor: `rgba(${hexToRgb(p.roleColor)}, 0.15)`,
                  border: `1px solid rgba(${hexToRgb(p.roleColor)}, 0.4)`,
                  borderRadius: '5px', padding: '3px 8px',
                }}>
                  <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.1em', color: p.roleColor, fontFamily: 'Rajdhani, sans-serif' }}>{p.role.toUpperCase()}</span>
                </div>

                {/* Agent icon top-left */}
                <img
                  src={`https://media.valorant-api.com/agents/${p.agent.uuid}/displayicon.png`}
                  alt={p.agent.name}
                  style={{ position: 'absolute', top: '12px', left: '12px', width: '28px', height: '28px', objectFit: 'contain', zIndex: 3, opacity: 0.75 }}
                />

                {/* Bottom content */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 3,
                  padding: '12px 14px 14px',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.75) 60%, transparent 100%)',
                }}>
                  {/* Avatar + name */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <img
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${p.ign}&backgroundColor=162030`}
                      alt={p.ign}
                      style={{ width: '40px', height: '40px', borderRadius: '50%', border: `2px solid ${p.roleColor}`, backgroundColor: C.card, flexShrink: 0 }}
                    />
                    <div>
                      <p style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '17px', color: '#fff', margin: 0, lineHeight: 1 }}>{p.ign}</p>
                      <p style={{ fontSize: '11px', color: C.text2, margin: '3px 0 0' }}>{p.flag} {p.realName}</p>
                    </div>
                  </div>

                  {/* Stats strip */}
                  <div style={{ display: 'flex', gap: '5px' }}>
                    {[
                      { label: 'ACS', value: p.acs },
                      { label: 'KDA', value: p.kda },
                      { label: 'HS%', value: `${p.hs}%` },
                    ].map(s => (
                      <div key={s.label} style={{
                        flex: 1, backgroundColor: 'rgba(0,0,0,0.55)', borderRadius: '5px',
                        padding: '5px 4px', textAlign: 'center',
                      }}>
                        <p style={{ fontSize: '8px', color: 'rgba(255,255,255,0.35)', margin: '0 0 2px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</p>
                        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 800, fontSize: '14px', color: '#fff', margin: 0 }}>{s.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// ─── 6. MAP POOL CHART ────────────────────────────────────────────────────────

// ─── 7. COUNTER STRATEGIES ────────────────────────────────────────────────────
function CounterStrategies() {
  const [hovered, setHovered] = useState(null)

  return (
    <div>
      <div style={{ marginBottom: '16px' }}>
        <SectionTitle>Counter Strategies</SectionTitle>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {COUNTER_STRATEGIES.map((s) => {
          const isHovered = hovered === s.num
          const { Icon } = s
          return (
            <div
              key={s.num}
              onMouseEnter={() => setHovered(s.num)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: 'relative', borderRadius: '14px', overflow: 'hidden', height: '240px',
                backgroundImage: `url(${s.mapSplash})`,
                backgroundSize: 'cover', backgroundPosition: 'center',
                border: `1px solid ${isHovered ? s.borderHover : C.border}`,
                transition: 'border-color 0.25s ease, transform 0.2s ease',
                transform: isHovered ? 'translateY(-2px)' : 'none',
                cursor: 'default',
              }}
            >
              {/* Dark base overlay */}
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.52)', zIndex: 1 }} />
              {/* Bottom-up gradient — keeps content readable */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,18,28,0.97) 0%, rgba(10,18,28,0.6) 50%, transparent 100%)', zIndex: 2 }} />
              {/* Subtle color tint from top */}
              <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to bottom, rgba(${hexToRgb(s.color)}, 0.08) 0%, transparent 50%)`, zIndex: 2 }} />

              {/* Map name watermark — top right */}
              <span style={{
                position: 'absolute', top: '14px', right: '16px', zIndex: 4,
                fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '11px',
                letterSpacing: '0.18em', color: 'rgba(255,255,255,0.25)',
              }}>{s.mapName}</span>

              {/* Number — top left */}
              <span style={{
                position: 'absolute', top: '14px', left: '16px', zIndex: 4,
                fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '11px',
                letterSpacing: '0.12em', color: 'rgba(255,255,255,0.3)',
              }}>{s.num}</span>

              {/* Content — pinned to bottom */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 4, padding: '20px 20px 22px' }}>
                {/* Icon + title row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '9px', flexShrink: 0,
                    backgroundColor: `rgba(${hexToRgb(s.color)}, 0.18)`,
                    border: `1px solid rgba(${hexToRgb(s.color)}, 0.4)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={17} color={s.color} strokeWidth={2} />
                  </div>
                  <h3 style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '17px', color: '#fff', margin: 0, letterSpacing: '0.04em', lineHeight: 1.1 }}>{s.title}</h3>
                </div>

                {/* Tip text */}
                <p style={{ fontSize: '12px', color: 'rgba(200,218,232,0.85)', margin: 0, lineHeight: 1.65 }}>{s.tip}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── UTILITY ──────────────────────────────────────────────────────────────────
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `${r},${g},${b}`
}

// ─── PAGE ROOT ────────────────────────────────────────────────────────────────
export default function CompetitorAnalysis() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <HeroBanner />
      <AnalysisRow />
      <RosterCards />
      <CounterStrategies />
    </div>
  )
}
