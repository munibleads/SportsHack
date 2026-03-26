import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { LayoutDashboard, BarChart2, List, Compass, User, Settings, Zap, ChevronLeft, ChevronRight, Crosshair } from 'lucide-react'
import { player } from '../data/mockData'

const navItems = [
  { path: '/',         label: 'DASHBOARD',     icon: LayoutDashboard },
  { path: '/analysis', label: 'ANALYSIS',      icon: BarChart2 },
  { path: '/matches',  label: 'MATCH HISTORY', icon: List },
  { path: '/explore',  label: 'EXPLORE',       icon: Compass },
  { path: '/profile',  label: 'PROFILE',       icon: User },
  { path: '/competitor', label: 'COMPETITOR',    icon: Crosshair },
]

export default function Sidebar() {
  const location = useLocation()
  const [collapsed, setCollapsed] = useState(true)

  return (
    <div
      style={{
        width: collapsed ? '64px' : '250px',
        flexShrink: 0,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#111d2c',
        borderRight: '1px solid #1e3048',
        transition: 'width 0.2s ease',
        overflow: 'hidden',
      }}
    >
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '24px 14px 18px', justifyContent: collapsed ? 'center' : 'flex-start' }}>
        <div
          style={{
            width: '36px', height: '36px', borderRadius: '9px', flexShrink: 0,
            background: 'linear-gradient(135deg, #7c3aed, #ff4655)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <Zap size={18} color="#fff" />
        </div>
        {!collapsed && (
          <span style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '24px', letterSpacing: '0.1em', color: '#fff', whiteSpace: 'nowrap' }}>
            EPEAK
          </span>
        )}
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: '4px 8px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
        {navItems.map(({ path, label, icon: Icon }) => {
          const isActive = location.pathname === path
          return (
            <NavLink
              key={path}
              to={path}
              title={collapsed ? label : undefined}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px',
                borderRadius: '9px',
                textDecoration: 'none',
                backgroundColor: isActive ? '#162030' : 'transparent',
                color: isActive ? '#ffffff' : '#5a7a9a',
                transition: 'all 0.15s ease',
                justifyContent: collapsed ? 'center' : 'flex-start',
              }}
              onMouseEnter={e => { if (!isActive) { e.currentTarget.style.backgroundColor = '#162030'; e.currentTarget.style.color = '#8aa5c0' } }}
              onMouseLeave={e => { if (!isActive) { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#5a7a9a' } }}
            >
              <Icon size={19} style={{ flexShrink: 0 }} />
              {!collapsed && (
                <span style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600, fontSize: '14px', letterSpacing: '0.08em', whiteSpace: 'nowrap' }}>
                  {label}
                </span>
              )}
            </NavLink>
          )
        })}
      </nav>

      {/* Collapse toggle */}
      <button
        onClick={() => setCollapsed(c => !c)}
        title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '10px 12px',
          margin: '0 8px 6px',
          borderRadius: '9px',
          border: 'none',
          backgroundColor: 'transparent',
          color: '#5a7a9a',
          cursor: 'pointer',
          width: 'calc(100% - 16px)',
          justifyContent: collapsed ? 'center' : 'flex-start',
          transition: 'background-color 0.15s, color 0.15s',
        }}
        onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#162030'; e.currentTarget.style.color = '#8aa5c0' }}
        onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#5a7a9a' }}
      >
        {collapsed ? <ChevronRight size={19} style={{ flexShrink: 0 }} /> : <ChevronLeft size={19} style={{ flexShrink: 0 }} />}
        {!collapsed && (
          <span style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600, fontSize: '14px', letterSpacing: '0.08em', whiteSpace: 'nowrap' }}>
            COLLAPSE
          </span>
        )}
      </button>

      {/* Rank Card — compact horizontal layout */}
      <div
        title={collapsed ? `${player.rank} — Peak Rating` : undefined}
        style={{
          margin: '8px',
          borderRadius: '10px',
          padding: collapsed ? '8px' : '10px 14px',
          background: 'linear-gradient(135deg, #4c1d95 0%, #1e1b4b 60%, #1a2535 100%)',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '10px',
          justifyContent: collapsed ? 'center' : 'flex-start',
        }}
      >
        <img src={player.rankIcon} alt={player.rank} style={{ width: '36px', height: '36px', objectFit: 'contain', flexShrink: 0 }} />
        {!collapsed && (
          <div>
            <p style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '15px', color: '#fff', margin: 0, whiteSpace: 'nowrap' }}>{player.rank}</p>
            <p style={{ fontSize: '11px', color: '#8892a4', margin: 0, whiteSpace: 'nowrap' }}>Peak Rating</p>
          </div>
        )}
      </div>

      {/* User */}
      <div
        style={{
          display: 'flex', alignItems: 'center', gap: '12px',
          padding: '14px 10px',
          borderTop: '1px solid #1e3048',
          justifyContent: collapsed ? 'center' : 'flex-start',
        }}
      >
        <img
          src={player.avatar}
          alt={player.name}
          title={collapsed ? player.name : undefined}
          style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover', backgroundColor: '#1a2535', flexShrink: 0 }}
        />
        {!collapsed && (
          <>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: '14px', fontWeight: 600, color: '#fff', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{player.name}</p>
              <p style={{ fontSize: '12px', color: '#5a7a9a', margin: 0 }}>Level {player.level}</p>
            </div>
            <Settings size={16} color="#5a7a9a" style={{ flexShrink: 0, cursor: 'pointer' }} />
          </>
        )}
      </div>

    </div>
  )
}
