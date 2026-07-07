'use client'

import { motion } from 'framer-motion'
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
  {
    href: 'https://github.com/uma-1510', label: 'GitHub',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 24 12c0-4.42-3.58-8-8-8z"/></svg>,
  },
  {
    href: 'https://www.linkedin.com/in/uma-chinnam-ab030320b/', label: 'LinkedIn',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/></svg>,
  },
  {
    href: 'mailto:umach1503@gmail.com', label: 'Email',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="17" height="17"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
  },
  {
    href: '/resume.docx', label: 'Résumé', download: true,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="17" height="17"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  },
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
          <h2 className={styles.sectionTitle}>What I Believe</h2>
          <p className={styles.bioLead}>
            I build systems that hold up when it matters — distributed infrastructure,
            AI-powered applications, and backends that scale. Things that solve real
            problems for real people, not just impressive-looking demos.
          </p>
          <p className={styles.bioBody}>
            MS Computer Science at Clark University (Dean&apos;s Scholar). ~1.5 years of
            production experience across HCL Software and Quinbay Technologies. Currently
            in my final semester, looking for my first full-time role in tech.
          </p>
          <p className={styles.bioBody}>
            Since you&apos;re already here, feel free to stick around &amp; say hi.
          </p>

          <div className={styles.rolesBox}>
            {ROLES.map(role => (
              <span key={role} className={styles.roleTag}>{role}</span>
            ))}
          </div>
        </motion.div>

        <motion.div variants={item} className={styles.ctaCard}>
          <h2 className={styles.ctaTitle}>Building Bold Things</h2>
          <p className={styles.ctaBody}>
            If you&apos;re working on something ambitious, unconventional, or technically
            deep — I&apos;d love to connect.
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
