'use client'

import H from '../../components/Highlight'
import Terminal from '../../components/Terminal'
import styles from './contact.module.css'


const LINKS = [
  { emoji: '✉️', label: 'Email',    href: 'mailto:umach1503@gmail.com' },
  { emoji: '💼', label: 'LinkedIn', href: 'https://www.linkedin.com/in/uma-chinnam-ab030320b/' },
  { emoji: '🐙', label: 'GitHub',   href: 'https://github.com/uma-1510' },
  { emoji: '📄', label: 'Résumé',   href: '/resume.docx' },
]

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>

        <h1 className={styles.title}>Let&apos;s Talk</h1>

        <p className={styles.lead}>
          I love a good conversation — especially one that starts with a real
          problem worth solving. Whether you have a role, an idea, a question,
          or just want to connect with someone who genuinely cares about
          building things well — my inbox is open.
        </p>

        {/* Passion block */}
        <div className={styles.passionBlock}>
          <p>
            If your team is building{' '}
            <strong>distributed systems that need to stay up under pressure</strong>,{' '}
            <strong>intelligent applications where AI actually moves the needle</strong>,{' '}
            <strong>data pipelines that feed decisions at scale</strong>, or{' '}
            <strong>backend infrastructure that just works</strong> — I want to
            hear about it. I care deeply about system design, about the craft of
            engineering, and about making software that makes a real difference.
            This is not just what I do. It is what I think about.
          </p>
        </div>

        <p className={styles.body}>
          The best way to reach me is directly —{' '}
          <a href="mailto:umach1503@gmail.com">
            <H color="yellow">umach1503@gmail.com</H>
          </a>
          . I am very active and usually respond within a few hours.
          You can also reach out on{' '}
          <a
            href="https://www.linkedin.com/in/uma-chinnam-ab030320b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          {' '}— I check it regularly and genuinely enjoy connecting with people there.
        </p>

        {/* Terminal — types out contact details interactively */}
        <Terminal />

        {/* Link chips */}
        <p className={styles.linksLabel}>Find me at</p>
        <div className={styles.linksGrid}>
          {LINKS.map(({ emoji, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className={styles.chip}
            >
              <span className={styles.chipEmoji}>{emoji}</span>
              <span className={styles.chipLabel}>{label}</span>
            </a>
          ))}
        </div>

        <p className={styles.responseNote}>
          I read every message I get. If it resonates, I will write back — usually the same day.
        </p>

      </div>
    </div>
  )
}