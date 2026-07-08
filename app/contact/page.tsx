'use client'

import H from '../../components/Highlight'
import { GitHubIcon, LinkedInIcon, EmailIcon, ResumeIcon } from '../../components/SocialIcons'
import styles from './contact.module.css'

const LINKS = [
  { icon: <EmailIcon size={16} />,    label: 'Email',    href: 'mailto:umach1503@gmail.com' },
  { icon: <LinkedInIcon size={16} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/uma-chinnam-ab030320b/' },
  { icon: <GitHubIcon size={16} />,   label: 'GitHub',   href: 'https://github.com/uma-1510' },
  { icon: <ResumeIcon size={16} />,   label: 'Résumé',   href: '/resume.docx' },
]

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>

        <h1 className={styles.title}>Let&apos;s Talk</h1>

        <p className={styles.lead}>
          I love a good conversation, especially one that starts with a real
          problem worth solving. Whether you have a role, an idea, a question,
          or just want to connect with someone who genuinely cares about
          building things well, my inbox is open.
        </p>

        {/* Passion block */}
        <div className={styles.passionBlock}>
          <p>
            If your team is building{' '}
            <strong>distributed systems that need to stay up under pressure</strong>,{' '}
            <strong>intelligent applications where AI actually moves the needle</strong>,{' '}
            <strong>data pipelines that feed decisions at scale</strong>, or{' '}
            <strong>backend infrastructure that just works</strong>, I want to
            hear about it. I care deeply about system design, about the craft of
            engineering, and about making software that makes a real difference.
            This is not just what I do. It is what I think about.
          </p>
        </div>

        <p className={styles.body}>
          The best way to reach me is directly,{' '}
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
          . I check it regularly and genuinely enjoy connecting with people there.
        </p>

        {/* Link chips */}
        <p className={styles.linksLabel}>Find me at</p>
        <div className={styles.linksGrid}>
          {LINKS.map(({ icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className={styles.chip}
            >
              <span className={styles.chipIcon}>{icon}</span>
              <span className={styles.chipLabel}>{label}</span>
            </a>
          ))}
        </div>

      </div>
    </div>
  )
}