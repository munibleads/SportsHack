import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { allMatches } from '../data/mockData'
import { matchAnalysis } from '../data/matchAnalysis'

const C = {
  bg: '#0d1521',
  card: '#162030',
  border: '#1e3048',
  purple: '#c084fc',
  accent: '#ff4655',
  text2: '#7d8ea8',
  win: '#4ade80',
  amber: '#f59e0b',
  blue: '#60a5fa',
}

const DIFFICULTY_COLOR = { Easy: '#4ade80', Habit: '#f59e0b', Advanced: '#ff4655' }
const CATEGORY_ICONS = {
  tacticalErrors: '⚔️',
  positioning: '📍',
  utility: '💨',
}

const TREND = {
  up: { icon: '↑', color: '#4ade80' },
  neutral: { icon: '—', color: '#f59e0b' },
  down: { icon: '↓', color: '#ff4655' },
}

const FEEDBACK_CATEGORIES = [
  { key: 'tacticalErrors', label: 'Tactical', color: '#ff4655', emptyLabel: 'No tactical errors this match' },
  { key: 'positioning', label: 'Positioning', color: '#f59e0b', emptyLabel: 'Positioning was solid' },
  { key: 'utility', label: 'Utility', color: '#c084fc', emptyLabel: 'Utility usage was clean' },
]

function getGrade(delta) {
  if (delta >= 20) return { letter: 'S', color: '#c084fc' }
  if (delta >= 12) return { letter: 'A', color: '#4ade80' }
  if (delta >= 0) return { letter: 'B', color: '#60a5fa' }
  if (delta >= -12) return { letter: 'C', color: '#f59e0b' }
  return { letter: 'D', color: '#ff4655' }
}

// Tactical Map Component
function TacticalMap({ map, feedback, selectedCategory, onMarkerClick }) {
  const [hoveredMarker, setHoveredMarker] = useState(null)
  
  // Collect all markers from all categories
  const allMarkers = FEEDBACK_CATEGORIES.flatMap(cat => 
    (feedback[cat.key] || [])
      .filter(item => item.mapCoordinates)
      .map(item => ({ ...item, category: cat.key, categoryColor: cat.color, categoryLabel: cat.label }))
  )

  const filteredMarkers = selectedCategory === 'all' 
    ? allMarkers 
    : allMarkers.filter(m => m.category === selectedCategory)

  return (
    <div style={{
      position: 'relative',
      borderRadius: '16px',
      overflow: 'hidden',
      border: `1px solid ${C.border}`,
      backgroundColor: C.card,
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    }}>
      {/* Header */}
      <div style={{
        padding: '14px 18px',
        borderBottom: `1px solid ${C.border}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'linear-gradient(135deg, rgba(255,70,85,0.08) 0%, transparent 60%)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div>
            <p style={{
              fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '14px',
              color: '#fff', margin: 0,
            }}>Tactical Map View</p>
            <p style={{ fontSize: '11px', color: C.text2, margin: '2px 0 0' }}>
              {filteredMarkers.length} mistake{filteredMarkers.length !== 1 ? 's' : ''} visualized
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '6px' }}>
          {FEEDBACK_CATEGORIES.map(cat => {
            const count = allMarkers.filter(m => m.category === cat.key).length
            if (count === 0) return null
            return (
              <span key={cat.key} style={{
                padding: '4px 10px', borderRadius: '4px', fontSize: '10px',
                fontFamily: 'Rajdhani, sans-serif', fontWeight: 700,
                backgroundColor: `${cat.color}15`,
                color: cat.color,
                border: `1px solid ${cat.color}30`,
              }}>
                {cat.label}: {count}
              </span>
            )
          })}
        </div>
      </div>

      {/* Map Container - fills available space */}
      <div style={{ position: 'relative', width: '100%', flex: 1, backgroundColor: '#0a0f1a', minHeight: '200px' }}>
        {/* Map Background */}
        <img
          src={map.displayIcon}
          alt={map.displayName}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            opacity: 0.9,
            filter: 'contrast(1.1) brightness(0.9)',
          }}
        />
        
        {/* Grid Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '20% 20%',
          pointerEvents: 'none',
        }} />

        {/* Markers */}
        {filteredMarkers.map((marker, idx) => (
          <div
            key={`${marker.category}-${idx}`}
            style={{
              position: 'absolute',
              left: `${marker.mapCoordinates.x}%`,
              top: `${marker.mapCoordinates.y}%`,
              transform: 'translate(-50%, -50%)',
              cursor: 'pointer',
              zIndex: hoveredMarker === marker ? 10 : 1,
            }}
            onMouseEnter={() => setHoveredMarker(marker)}
            onMouseLeave={() => setHoveredMarker(null)}
            onClick={() => onMarkerClick && onMarkerClick(marker)}
          >
            {/* Pulse Effect */}
            <div style={{
              position: 'absolute',
              inset: '-8px',
              borderRadius: '50%',
              backgroundColor: marker.categoryColor,
              opacity: 0.2,
              animation: 'pulse 2s ease-in-out infinite',
            }} />
            {/* Marker Dot */}
            <div style={{
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              backgroundColor: marker.categoryColor,
              border: '2px solid #fff',
              boxShadow: `0 0 12px ${marker.categoryColor}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '8px',
              fontWeight: 700,
              color: '#fff',
            }}>
              {idx + 1}
            </div>
            
            {/* Hover Tooltip */}
            {hoveredMarker === marker && (
              <div style={{
                position: 'absolute',
                bottom: '100%',
                left: '50%',
                transform: 'translateX(-50%) translateY(-8px)',
                backgroundColor: C.card,
                border: `1px solid ${C.border}`,
                borderRadius: '10px',
                padding: '12px',
                minWidth: '220px',
                maxWidth: '280px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                zIndex: 100,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{
                    padding: '3px 8px', borderRadius: '4px', fontSize: '10px',
                    fontFamily: 'Rajdhani, sans-serif', fontWeight: 700,
                    backgroundColor: `${marker.categoryColor}20`,
                    color: marker.categoryColor,
                  }}>
                    {marker.categoryLabel}
                  </span>
                  <span style={{ fontSize: '11px', color: C.text2 }}>Round {marker.round}</span>
                </div>
                <p style={{ fontSize: '12px', color: '#fff', margin: 0, lineHeight: 1.5 }}>
                  {marker.desc}
                </p>
                <div style={{ 
                  marginTop: '8px', paddingTop: '8px', borderTop: `1px solid ${C.border}`,
                  display: 'flex', alignItems: 'center', gap: '6px'
                }}>
                  <span style={{ fontSize: '10px', color: C.text2 }}>⏱️ {marker.time}</span>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Empty State */}
        {filteredMarkers.length === 0 && (
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: C.text2,
          }}>
            <span style={{ fontSize: '48px', marginBottom: '12px', opacity: 0.5 }}>✅</span>
            <p style={{ fontSize: '14px', margin: 0 }}>No mistakes in this category</p>
            <p style={{ fontSize: '12px', margin: '4px 0 0', opacity: 0.7 }}>Great job!</p>
          </div>
        )}
      </div>

      {/* Legend */}
      <div style={{
        padding: '12px 18px',
        borderTop: `1px solid ${C.border}`,
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap',
      }}>
        {FEEDBACK_CATEGORIES.map(cat => (
          <div key={cat.key} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{
              width: '8px', height: '8px', borderRadius: '50%',
              backgroundColor: cat.color,
              boxShadow: `0 0 6px ${cat.color}`,
            }} />
            <span style={{ fontSize: '11px', color: C.text2 }}>{cat.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// Skill Radar Component
function SkillRadar({ skills, size = 140 }) {
  const center = size / 2
  const radius = size * 0.35
  const angleStep = (Math.PI * 2) / skills.length

  const getPoint = (value, index) => {
    const angle = index * angleStep - Math.PI / 2
    const r = (value / 100) * radius
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    }
  }

  const pathData = skills.map((s, i) => {
    const point = getPoint(s.value, i)
    return `${i === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
  }).join(' ') + ' Z'

  return (
    <div style={{ 
      width: size, height: size, position: 'relative',
      filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))',
    }}>
      <svg width={size} height={size} style={{ overflow: 'visible' }}>
        {/* Background grid */}
        {[0.2, 0.4, 0.6, 0.8, 1].map(scale => (
          <polygon
            key={scale}
            points={skills.map((_, i) => {
              const angle = i * angleStep - Math.PI / 2
              const r = radius * scale
              return `${center + r * Math.cos(angle)},${center + r * Math.sin(angle)}`
            }).join(' ')}
            fill="none"
            stroke={`${C.border}`}
            strokeWidth="1"
            opacity={0.3}
          />
        ))}
        
        {/* Data polygon */}
        <path
          d={pathData}
          fill="rgba(192,132,252,0.15)"
          stroke={C.purple}
          strokeWidth="2"
        />
        
        {/* Points */}
        {skills.map((s, i) => {
          const point = getPoint(s.value, i)
          return (
            <circle
              key={i}
              cx={point.x}
              cy={point.y}
              r="4"
              fill={C.purple}
              stroke="#fff"
              strokeWidth="2"
            />
          )
        })}
        
        {/* Labels */}
        {skills.map((s, i) => {
          const angle = i * angleStep - Math.PI / 2
          const labelRadius = radius + (size > 120 ? 18 : 14)
          const x = center + labelRadius * Math.cos(angle)
          const y = center + labelRadius * Math.sin(angle)
          return (
            <text
              key={`label-${i}`}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={C.text2}
              fontSize={size > 120 ? "9" : "8"}
              fontFamily="Rajdhani, sans-serif"
              fontWeight="600"
            >
              {s.skill}
            </text>
          )
        })}
      </svg>
    </div>
  )
}


export default function MatchDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('all')
  const [selectedMarker, setSelectedMarker] = useState(null)

  const match = allMatches.find(m => m.id === Number(id))
  const analysis = matchAnalysis[Number(id)]

  if (!match || !analysis) {
    return (
      <div style={{ color: C.text2, padding: '40px', textAlign: 'center' }}>
        <p>Match not found.</p>
        <button onClick={() => navigate('/matches')} style={{ color: C.purple, background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px' }}>
          ← Back to matches
        </button>
      </div>
    )
  }

  const grade = getGrade(analysis.coachScoreDelta)
  const pos = analysis.coachScoreDelta >= 0
  
  // Prepare skills for radar
  const radarSkills = analysis.skillSnapshot.map(s => ({
    skill: s.skill,
    value: s.trend === 'up' ? 85 : s.trend === 'neutral' ? 70 : 55,
  }))

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Inject keyframes */}
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in {
          animation: slideIn 0.3s ease forwards;
        }
      `}</style>

      {/* Main Grid - 2 Column 30/70 Layout */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '3fr 7fr', 
        gap: '16px', 
        alignItems: 'start',
        height: 'calc(100vh - 60px)',
        minHeight: '600px',
      }}>
        
        {/* LEFT COLUMN - Video on top, Map on bottom */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', height: '100%', overflow: 'hidden' }}>

          {/* Match Replay Video - TOP */}
          <div style={{ borderRadius: '12px', overflow: 'hidden', border: `1px solid ${C.border}`, flex: '0 0 35%', display: 'flex', flexDirection: 'column', minHeight: '140px' }}>
            <video src={analysis.replayUrl} loop autoPlay muted controls style={{ width: '100%', height: '100%', display: 'block', backgroundColor: '#000', objectFit: 'contain' }} />
          </div>

          {/* Tactical Map - BOTTOM */}
          <div style={{ flex: '1 1 65%', minHeight: 0 }}>
            <TacticalMap map={match.map} feedback={analysis.criticalFeedback} selectedCategory={activeTab} onMarkerClick={setSelectedMarker} />
          </div>

        </div>

        {/* RIGHT COLUMN - Match Details & AI Insights */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', height: '100%' }}>

          {/* Top Row: Split between Overview and Quick Insights */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', flexShrink: 0 }}>
            {/* Match Overview Card */}
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: `1px solid ${C.border}`, position: 'relative', height: '100px' }}>
              <img src={match.map.splash} alt={match.map.displayName} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.5)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, rgba(13,21,33,0.8))' }} />
              <div style={{ position: 'relative', zIndex: 1, padding: '12px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span style={{ 
                    padding: '2px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 800, fontFamily: 'Rajdhani, sans-serif',
                    backgroundColor: match.won ? `${C.win}20` : `${C.accent}20`, color: match.won ? C.win : C.accent, border: `1px solid ${match.won ? C.win : C.accent}40`
                  }}>{match.won ? 'VICTORY' : 'DEFEAT'}</span>
                  <img src={match.agent.displayIcon} alt={match.agent.displayName} style={{ width: '24px', height: '24px', borderRadius: '4px', border: `1px solid ${C.border}` }} />
                </div>
                <div>
                  <h2 style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '18px', color: '#fff', margin: 0, textTransform: 'uppercase', lineHeight: 1 }}>{match.map.displayName}</h2>
                  <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)', margin: '2px 0 0' }}>{match.date}</p>
                </div>
              </div>
            </div>

            {/* Quick Performance Card */}
            <div style={{ borderRadius: '12px', padding: '12px', border: `1px solid ${C.border}`, backgroundColor: C.card, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '10px', color: C.text2, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Performance</span>
                <span style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '14px', color: grade.color }}>Grade {grade.letter}</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '6px', borderRadius: '6px', textAlign: 'center' }}>
                  <p style={{ margin: 0, fontSize: '14px', fontWeight: 700, color: '#fff' }}>{match.score}</p>
                  <p style={{ margin: 0, fontSize: '8px', color: C.text2, textTransform: 'uppercase' }}>Score</p>
                </div>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '6px', borderRadius: '6px', textAlign: 'center' }}>
                  <p style={{ margin: 0, fontSize: '14px', fontWeight: 700, color: '#fff' }}>{match.kda}</p>
                  <p style={{ margin: 0, fontSize: '8px', color: C.text2, textTransform: 'uppercase' }}>KDA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Critical Feedback - fills remaining */}
          <div style={{
            backgroundColor: C.card,
            border: `1px solid ${C.border}`,
            borderRadius: '12px',
            overflow: 'hidden',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minHeight: 0,
          }}>
            {/* Tabs Header */}
            <div style={{ padding: '12px 14px', borderBottom: `1px solid ${C.border}`, backgroundColor: 'rgba(13,21,33,0.5)', flexShrink: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <p style={{ fontSize: '11px', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '1.2px', margin: 0 }}>Critical Feedback</p>
                  <span style={{ fontSize: '9px', color: C.purple, backgroundColor: `${C.purple}15`, padding: '2px 6px', borderRadius: '4px', border: `1px solid ${C.purple}30` }}>AI Coach</span>
                </div>
                <span style={{ fontSize: '10px', color: C.text2 }}>
                  {FEEDBACK_CATEGORIES.reduce((acc, cat) => acc + (analysis.criticalFeedback[cat.key]?.length || 0), 0)} items
                </span>
              </div>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                <button onClick={() => setActiveTab('all')} style={{
                  padding: '5px 10px', borderRadius: '5px', border: 'none', cursor: 'pointer', fontSize: '11px', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700,
                  backgroundColor: activeTab === 'all' ? `${C.purple}25` : 'transparent', color: activeTab === 'all' ? C.purple : C.text2,
                  border: `1px solid ${activeTab === 'all' ? C.purple : C.border}`,
                }}>All</button>
                {FEEDBACK_CATEGORIES.map(cat => {
                  const count = analysis.criticalFeedback[cat.key]?.length || 0
                  return (
                    <button key={cat.key} onClick={() => setActiveTab(cat.key)} style={{
                      padding: '5px 10px', borderRadius: '5px', border: 'none', cursor: 'pointer', fontSize: '11px', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700,
                      backgroundColor: activeTab === cat.key ? `${cat.color}20` : 'transparent', color: activeTab === cat.key ? cat.color : C.text2,
                      border: `1px solid ${activeTab === cat.key ? cat.color : C.border}`, opacity: count === 0 ? 0.5 : 1,
                    }}>
                      {CATEGORY_ICONS[cat.key]} {cat.label} ({count})
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Feedback Items - Scrollable */}
            <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '10px', overflow: 'auto', flex: 1 }}>
              {(activeTab === 'all' ? FEEDBACK_CATEGORIES : FEEDBACK_CATEGORIES.filter(c => c.key === activeTab))
                .flatMap(cat => (analysis.criticalFeedback[cat.key] || []).map((item, idx) => ({ ...item, category: cat, idx })))
                .sort((a, b) => a.time.localeCompare(b.time))
                .map((item, i) => (
                  <div key={`${item.category.key}-${item.idx}`} className="animate-slide-in" style={{
                    display: 'flex', gap: '10px', padding: '10px 12px',
                    backgroundColor: `${item.category.color}08`,
                    border: `1px solid ${item.category.color}20`,
                    borderRadius: '8px',
                    flexShrink: 0,
                  }}>
                    <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                      <span style={{
                        padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: 700, fontFamily: 'monospace',
                        backgroundColor: `${item.category.color}15`, color: item.category.color, border: `1px solid ${item.category.color}30`,
                      }}>{item.time}</span>
                      {item.mapCoordinates && (<span style={{ fontSize: '14px', cursor: 'pointer' }} title="View on map">📍</span>)}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                        <span style={{ fontSize: '11px', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, color: item.category.color, textTransform: 'uppercase', letterSpacing: '0.6px' }}>{item.category.label}</span>
                        {item.round && (<span style={{ fontSize: '11px', color: C.text2 }}>R{item.round}</span>)}
                      </div>
                      <p style={{ fontSize: '14px', color: '#b8c8d8', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              
              {/* Empty State */}
              {(activeTab === 'all' ? FEEDBACK_CATEGORIES.every(cat => (analysis.criticalFeedback[cat.key]?.length || 0) === 0) : (analysis.criticalFeedback[activeTab]?.length || 0) === 0) && (
                <div style={{ textAlign: 'center', padding: '30px', color: C.text2 }}>
                  <span style={{ fontSize: '36px', display: 'block', marginBottom: '8px' }}>🎯</span>
                  <p style={{ fontSize: '13px', margin: 0 }}>
                    {activeTab === 'all' ? 'No critical feedback — excellent!' : FEEDBACK_CATEGORIES.find(c => c.key === activeTab)?.emptyLabel}
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
