import { Search, Bell, ShoppingBag } from 'lucide-react'

export default function TopBar() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '12px 24px',
        backgroundColor: '#0d1521',
        borderBottom: '1px solid #1e3048',
        flexShrink: 0,
      }}
    >
      {/* Search */}
      <div style={{ flex: 1, maxWidth: '480px', position: 'relative' }}>
        <Search size={15} color="#5a7a9a" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
        <input
          type="text"
          placeholder="Search players, matches, agents..."
          style={{
            width: '100%',
            paddingLeft: '36px',
            paddingRight: '16px',
            paddingTop: '8px',
            paddingBottom: '8px',
            borderRadius: '999px',
            backgroundColor: '#162030',
            border: '1px solid #1e3048',
            color: '#8892a4',
            fontSize: '13px',
            outline: 'none',
          }}
        />
      </div>

      {/* Icons */}
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <button
          style={{
            position: 'relative', padding: '8px', borderRadius: '8px',
            backgroundColor: 'transparent', border: 'none', cursor: 'pointer',
          }}
        >
          <Bell size={20} color="#8892a4" />
          <span
            style={{
              position: 'absolute', top: '6px', right: '6px',
              width: '7px', height: '7px', borderRadius: '50%',
              backgroundColor: '#ff4655',
            }}
          />
        </button>
        <button
          style={{
            padding: '8px', borderRadius: '8px',
            backgroundColor: 'transparent', border: 'none', cursor: 'pointer',
          }}
        >
          <ShoppingBag size={20} color="#8892a4" />
        </button>
      </div>
    </div>
  )
}
