import { profile, socials } from '../data/content'

export default function Footer() {
  return (
    <footer style={{ padding: '48px 0 32px' }}>
      <div className="container">
        <h3 style={{ fontSize: 22, marginBottom: 6 }}>
          {profile.name}<span style={{ color: 'var(--accent)' }}>.</span>
        </h3>
        <p style={{ marginBottom: 24 }}>Thanks for scrolling — that's all folks.</p>
        <div style={styles.socials}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target={s.url.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              style={styles.socialLink}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

const styles = {
  socials: { display: 'flex', gap: 20, flexWrap: 'wrap' },
  socialLink: {
    fontSize: 14,
    color: 'var(--muted)',
    border: '1px solid var(--border)',
    borderRadius: 20,
    padding: '8px 16px',
  },
}
