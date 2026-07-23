import { useState } from 'react'
import { profile } from '../data/content'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSend(e) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${name || 'a visitor'}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <div>
      <p className="eyebrow">Contact</p>
      <h2 style={{ fontSize: 30, marginBottom: 12 }}>Estimate your project? Let me know here.</h2>
      <form onSubmit={handleSend} style={styles.form}>
        <input
          style={styles.input}
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          style={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          style={{ ...styles.input, minHeight: 100, resize: 'vertical' }}
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
          Send
        </button>
      </form>
    </div>
  )
}

const styles = {
  form: { display: 'flex', flexDirection: 'column', gap: 22, marginTop: 28, maxWidth: 420 },
  input: {
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid var(--border)',
    color: 'var(--text)',
    fontFamily: 'var(--font-body)',
    fontSize: 15,
    padding: '8px 0',
    outline: 'none',
  },
}
