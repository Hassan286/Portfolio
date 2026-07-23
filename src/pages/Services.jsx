import { profile, skillGroups } from '../data/content'
import ContactForm from '../components/ContactForm'

export default function Services() {
  return (
    <>
      <section style={{ paddingBottom: 48 }}>
        <div className="container">
          <ContactForm />
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <p className="eyebrow">Skills & Experience</p>
          <h2 style={{ fontSize: 34, marginBottom: 20 }}>
            Skills & Experience<span style={{ color: 'var(--accent)' }}>.</span>
          </h2>
          <div style={{ width: 48, height: 4, background: 'var(--accent)', marginBottom: 28, borderRadius: 2 }} />
          <p style={{ maxWidth: 640, marginBottom: 14 }}>{profile.story}</p>
          <p style={{ maxWidth: 640 }}>
            My main area of focus is frontend development — React.js, JavaScript, and responsive
            styling with Tailwind CSS and Bootstrap. I'm continuing to build personal and freelance
            projects while I look for my first full-time role.
          </p>
          <p style={{ marginTop: 18 }}>
            Visit my <a href={profile.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>LinkedIn</a> profile for more details, or just get in touch.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <p className="eyebrow">Tools</p>
          <h2 style={{ fontSize: 30, marginBottom: 8 }}>Skills Set</h2>
          <p style={{ marginBottom: 40 }}>Skills I'm comfortable with and enjoy working with.</p>

          <div style={styles.groups}>
            {skillGroups.map((g) => (
              <div key={g.group} style={{ marginBottom: 32 }}>
                <h3 style={styles.groupTitle}>{g.group}</h3>
                <div style={styles.chipsRow}>
                  {g.items.map((item) => <span key={item} className="chip">{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

const styles = {
  groups: { maxWidth: 780 },
  groupTitle: { fontSize: 17, marginBottom: 14, textAlign: 'center' },
  chipsRow: { display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' },
}
