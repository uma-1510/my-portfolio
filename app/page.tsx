'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import styles from './page.module.css'
import H from '../components/Highlight'
// import Particlebackground from '../components/Particlebackground'


const ROLES = ['Software Engineer', 'Data Engineer', 'Full-Stack Developer', 'AI + Backend Builder']

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
}

function TypeWriter({ words }: { words: string[] }) {
  const [displayed, setDisplayed] = useState('')
  const [wordIdx, setWordIdx]     = useState(0)
  const [charIdx, setCharIdx]     = useState(0)
  const [deleting, setDeleting]   = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx(i => i + 1), 80)
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(i => i - 1), 45)
    } else {
      setDeleting(false)
      setWordIdx(i => (i + 1) % words.length)
    }

    setDisplayed(current.slice(0, charIdx))
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx, words])

  return (
    <span>
      {displayed}
      <span className={styles.cursor}>|</span>
    </span>
  )
}

export default function HomePage() {
  return (
    <div className={styles.page}>
      {/* <Particlebackground /> */}

      {/* ── Hero content ── */}
      <motion.div
        className={styles.hero}
        // style={{ position: 'relative', zIndex: 1 }}
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <div className={styles.hero_section}>
        <motion.div className={styles.avatarWrapper} variants={fadeUp}>
  <div className={styles.avatarBox}>
    <img src="/avatar.png" alt="Uma" className={styles.avatarImg} />
  </div>
  <span className={styles.onlineDot} />
</motion.div>

<motion.p className={styles.hello} variants={fadeUp}>
  Hello, I'm Uma 👋
</motion.p>

<motion.p className={styles.role} variants={fadeUp}>
  Software engineer & master's graduate
</motion.p>
</div>

        <motion.p className={styles.bio} variants={fadeUp}>
          I am a software engineer and a masters graduate building scalable systems and AI-driven applications.I spend most of my time building applications and AI tools that actually do something interesting.
          I am currently <H> looking for a role in tech </H> (something across backend, full-stack, data engineering, or the intersection of AI and real systems) and aiming to work for good. 
        </motion.p>

        <motion.p className={styles.stick_here} variants={fadeUp}>
          Anyways, since you've already in here, feel free to stick around, explore a bit, and maybe say hi.
        </motion.p>

<div className={styles.socials_wrap}>
<motion.div className={styles.socials} variants={fadeUp}>
  <a
    href="https://github.com/[YOUR_HANDLE]"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    className={styles.icon}
  >
    <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  </a>

  <a
    href="https://linkedin.com/in/[YOUR_HANDLE]"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className={styles.icon}
  >
    <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
    </svg>
  </a>

  <a
    href="mailto:[YOUR_EMAIL]"
    aria-label="Email"
    className={styles.icon}
  >
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="26"
      height="26"
    >
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  </a>
  <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className={styles.resume}
  download
>
  <svg
    className={styles.resumeIcon}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="26"
    height="26"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <line x1="10" y1="9" x2="8" y2="9"/>
  </svg>

  Resume
</a>
</motion.div>
</div>

      </motion.div>
    </div>
  )
}