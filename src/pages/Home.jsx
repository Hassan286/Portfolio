import { Link } from 'react-router-dom'
import { profile, stats, focusAreas, projects, socials } from '../data/content'
import ContactForm from '../components/ContactForm'

export default function Home() {
  const highlight = projects[0]

  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: 64, paddingBottom: 48 }}>
        <div className="container" style={styles.heroGrid}>
          <div>
            <h1 style={styles.heroName}>
              {profile.firstName}<br />{profile.lastName}<span style={{ color: 'var(--accent)' }}>.</span>
            </h1>
            <div style={styles.rule} />
            <div style={styles.socialsRow}>
              {socials.map((s) => (
                <a key={s.label} href={s.url} target={s.url.startsWith('http') ? '_blank' : undefined} rel="noreferrer" style={styles.socialText}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div style={styles.heroPhotoWrap}>
            <img src={profile.photo} alt={profile.name} style={styles.heroPhoto} />
          </div>

          <div style={styles.introCol}>
            <p className="eyebrow">Introduction</p>
            <h2 style={{ fontSize: 26, marginBottom: 14 }}>{profile.tagline}</h2>
            <p style={{ marginBottom: 18 }}>{profile.intro}</p>
            <Link to="/services" className="link-arrow">My story →</Link>
          </div>
        </div>
      </section>

      {/* Stats + focus */}
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h2 style={{ fontSize: 30, maxWidth: 560, marginBottom: 14 }}>
            Currently learning, building, and looking for my first full-time role.
          </h2>
          <p style={{ maxWidth: 500, marginBottom: 32 }}>
            Enough of thinking, let's get started — turn your idea into a real interface.
          </p>
          <div style={styles.statsRow}>
            {stats.map((s) => (
              <div key={s.label}>
                <div style={styles.statValue}>{s.value}</div>
                <div style={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>

          <div style={styles.focusGrid}>
            {focusAreas.map((f) => (
              <div key={f.title} style={styles.focusCard}>
                <h3 style={{ fontSize: 18, marginBottom: 6 }}>{f.title}</h3>
                <p>{f.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project highlight */}
      <section>
        <div className="container">
          <p className="eyebrow">Portfolio</p>
          <h2 style={{ fontSize: 30, marginBottom: 10 }}>Selected Project</h2>
          <p style={{ marginBottom: 28 }}>One of the projects I've built while learning React.</p>
          <div style={styles.projectCard}>
            <div style={styles.compTag}>
              &lt;<span style={{ color: 'var(--accent)' }}>{highlight.name.replace(/\s+/g, '')}</span> /&gt;
            </div>
            <p style={{ margin: '14px 0 16px' }}>{highlight.description}</p>
            <div style={styles.stackRow}>
              {highlight.stack.map((s) => <span key={s} className="chip">{s}</span>)}
            </div>
          </div>
          <Link to="/works" className="link-arrow" style={{ marginTop: 28, display: 'inline-flex' }}>
            Explore more →
          </Link>
        </div>
      </section>

      {/* Contact */}
      <section>
        <div className="container">
          <ContactForm />
        </div>
      </section>
    </>
  )
}

const styles = {
  heroGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.1fr 1fr',
    gap: 32,
    alignItems: 'center',
  },
  heroName: { fontSize: 44, fontWeight: 600 },
  rule: { width: 48, height: 4, background: 'var(--accent)', margin: '20px 0 28px', borderRadius: 2 },
  socialsRow: { display: 'flex', flexDirection: 'column', gap: 12 },
  socialText: { fontSize: 14, color: 'var(--muted)' },
  heroPhotoWrap: { display: 'flex', justifyContent: 'center' },
  heroPhoto: {
    width: '100%',
    maxWidth: 300,
    borderRadius: 14,
    objectFit: 'cover',
    aspectRatio: '3 / 4',
    boxShadow: '0 30px 60px -20px rgba(0,0,0,0.5)',
  },
  introCol: {},
  statsRow: { display: 'flex', gap: 56, marginBottom: 48, flexWrap: 'wrap' },
  statValue: { fontSize: 40, fontWeight: 700, color: 'var(--accent)', fontFamily: 'var(--font-display)' },
  statLabel: { fontSize: 14, color: 'var(--muted)', marginTop: 4, maxWidth: 160 },
  focusGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 },
  focusCard: { background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 10, padding: '24px 26px' },
  projectCard: { background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, padding: '26px 28px', maxWidth: 640 },
  compTag: { fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 600 },
  stackRow: { display: 'flex', gap: 8, flexWrap: 'wrap' },
}
