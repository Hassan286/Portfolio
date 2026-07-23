import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/works', label: 'Works' },
]

export default function Navbar() {
  return (
    <header style={styles.header}>
      <div className="container" style={styles.inner}>
        <NavLink to="/" style={styles.logo}>
          Hassan<span style={{ color: 'var(--accent)' }}>Ch.</span>
        </NavLink>
        <nav style={styles.nav} className="nav-links">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              style={({ isActive }) => ({
                ...styles.link,
                color: isActive ? 'var(--text)' : 'var(--muted)',
                fontWeight: isActive ? 600 : 500,
              })}
            >
              {({ isActive }) => (
                <span style={styles.linkInner}>
                  {l.label}
                  <span style={{ ...styles.indicator, opacity: isActive ? 1 : 0 }} />
                </span>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

const styles = {
  header: { background: 'var(--header-bg)' },
  inner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 76,
  },
  logo: {
    fontFamily: 'var(--font-display)',
    fontSize: 20,
    fontWeight: 600,
    color: 'var(--text)',
  },
  nav: { display: 'flex', gap: 36 },
  link: { fontSize: 16 },
  linkInner: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 },
  indicator: { width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)' },
}
