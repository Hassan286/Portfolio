import { projects } from '../data/content'
import ContactForm from '../components/ContactForm'

export default function Works() {
  return (
    <>
      <section style={{ paddingBottom: 48 }}>
        <div className="container">
          <p className="eyebrow">Portfolio</p>
          <h2 style={{ fontSize: 34, marginBottom: 8 }}>Projects</h2>
          <p style={{ marginBottom: 40 }}>Things I've built while learning frontend development.</p>

          <div style={styles.grid}>
            {projects.map((p) => (
              <article key={p.name} style={styles.card}>
                <div style={styles.tagRow}>
                  <span style={styles.compTag}>
                    &lt;<span style={{ color: 'var(--accent)' }}>{p.name.replace(/\s+/g, '')}</span> /&gt;
                  </span>
                  <span style={styles.pill}>{p.tag}</span>
                </div>
                <p style={{ margin: '16px 0 18px' }}>{p.description}</p>
                <div style={styles.stackRow}>
                  {p.stack.map((s) => <span key={s} className="chip">{s}</span>)}
                </div>
                <div style={styles.linkRow}>
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className="btn" style={styles.smallBtn}>
                      View Code
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="btn btn-primary" style={styles.smallBtn}>
                      Live Demo
                    </a>
                  )}
                </div>
              </article>
            ))}

            <div style={styles.comingSoon}>
              <span style={{ fontSize: 28 }}>+</span>
              <p style={{ marginTop: 8 }}>More projects coming soon</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <ContactForm />
        </div>
      </section>
    </>
  )
}

const styles = {
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 },
  card: { background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, padding: '24px 26px' },
  tagRow: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 },
  compTag: { fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600 },
  pill: { fontSize: 11, color: 'var(--muted)', border: '1px solid var(--border)', borderRadius: 20, padding: '3px 10px' },
  stackRow: { display: 'flex', gap: 8, flexWrap: 'wrap' },
  linkRow: { display: 'flex', gap: 10, marginTop: 20 },
  smallBtn: { fontSize: 13, padding: '9px 16px' },
  comingSoon: {
    border: '1px dashed var(--border)',
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--muted)',
    minHeight: 160,
  },
}
