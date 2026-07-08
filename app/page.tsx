'use client'

import { motion } from 'framer-motion'
import { GitHubIcon, LinkedInIcon, EmailIcon, ResumeIcon } from '../components/SocialIcons'
import styles from './page.module.css'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

const ROLES = ['Software Engineer', 'Full Stack Developer', 'AI Engineer']

const SOCIALS = [
  { href: 'https://github.com/uma-1510', label: 'GitHub', icon: <GitHubIcon /> },
  { href: 'https://www.linkedin.com/in/uma-chinnam-ab030320b/', label: 'LinkedIn', icon: <LinkedInIcon /> },
  { href: 'mailto:umach1503@gmail.com', label: 'Email', icon: <EmailIcon /> },
  { href: '/resume.docx', label: 'Résumé', download: true, icon: <ResumeIcon /> },
]

export default function HomePage() {
  return (
    <div className={styles.page}>
      <motion.div className={styles.hero} variants={container} initial="hidden" animate="show">

        <motion.div variants={item} className={styles.statusPill}>
          <span className={styles.statusDot} />
          actively interviewing
        </motion.div>

        <motion.h1 variants={item} className={styles.heading}>
          Hi, I&apos;m Uma
          <img
            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif"
            alt="👋"
            className={styles.headingGif}
          />
        </motion.h1>

        <motion.div variants={item} className={styles.metaRow}>
          <span className={styles.metaItem}>Born in Hyderabad, India 🇮🇳</span>
          <span className={styles.metaDot} />
          <span className={styles.metaItem}>Currently based in Boston, MA 🇺🇸</span>
        </motion.div>

        <motion.div variants={item} className={styles.divider} />

        <motion.div variants={item} className={styles.section}>
          <p className={styles.bioLead}>
            I build systems that hold up when it matters: distributed infrastructure,
            AI-powered applications, and backends that scale. Things that solve real
            problems for real people, not just impressive-looking demos.
          </p>
          <p className={styles.bioBody}>
            MS Computer Science at Clark University (Dean&apos;s Scholar). ~2 years of
            production experience across HCL Software and Quinbay Technologies. Now
            actively interviewing in tech.
          </p>

          <div className={styles.rolesBox}>
            {ROLES.map(role => (
              <span key={role} className={styles.roleTag}>{role}</span>
            ))}
          </div>
        </motion.div>

        <motion.div variants={item} className={styles.ctaCard}>
          <h2 className={styles.ctaTitle}>Open to New Opportunities</h2>
          <p className={styles.ctaBody}>
            I&apos;ve graduated and I&apos;m actively interviewing for full-time roles. If
            you&apos;re working on something ambitious, unconventional, or technically deep,
            I&apos;d love to connect.
          </p>
          <div className={styles.ctaActions}>
            <a href="/contact" className={styles.ctaButton}>Start a Conversation</a>
          </div>
        </motion.div>

        <motion.div variants={item} className={styles.socials}>
          {SOCIALS.map(({ href, label, icon, download }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              download={download}
              className={styles.socialLink}
              aria-label={label}
            >
              {icon}
              <span>{label}</span>
            </a>
          ))}
        </motion.div>

      </motion.div>
    </div>
  )
}
