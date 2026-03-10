import type { Metadata } from 'next'
import H from '../../components/Highlight'
import styles from './contact.module.css'

export const metadata: Metadata = { title: 'Contact' }

const LINKS = [
  { emoji: '✉️', label: 'Email',    href: 'mailto:[YOUR_EMAIL]' },
  { emoji: '💼', label: 'LinkedIn', href: 'https://linkedin.com/in/[YOUR_LINKEDIN]' },
  { emoji: '🐙', label: 'GitHub',   href: 'https://github.com/[YOUR_GITHUB]' },
  { emoji: '📄', label: 'Résumé',   href: '/resume.pdf' },
  { emoji: '✍️', label: 'Medium',   href: 'https://medium.com/@[YOUR_MEDIUM]' },
  { emoji: '🧩', label: 'LeetCode', href: 'https://leetcode.com/[YOUR_LEETCODE]' },
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
          <a href="mailto:[YOUR_EMAIL]">
            <H color="yellow">[YOUR_EMAIL]</H>
          </a>
          . I am very active and usually respond within a few hours.
          You can also reach out on{' '}
          <a
            href="https://linkedin.com/in/[YOUR_LINKEDIN]"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          {' '}— I check it regularly and genuinely enjoy connecting with people there.
        </p>

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