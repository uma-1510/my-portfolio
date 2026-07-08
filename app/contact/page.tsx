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
          Feel free to get in touch and let&apos;s have a discussion about how
          we can work together.
        </p>

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