'use client'

import { motion } from 'framer-motion'
import H from '../components/Highlight'
import styles from './page.module.css'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } }
}

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } }
}

const fadeIn = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } }
}

export default function HomePage() {
  return (
    <div className={styles.page}>

      {/* ---- Header bar ---- */}
      <motion.header
        className={styles.header}
        initial="hidden"
        animate="show"
        variants={fadeIn}
      >
        <div className={styles.headerLogo}>
          <span className={styles.emoji}>👩‍💻</span>
          <span className={styles.dot}>·</span>
          <span className={styles.me}>me</span>
        </div>
        <div className={styles.headerName}>
          The digital space of <strong>Uma Chinnam</strong>
        </div>
      </motion.header>

      {/* ---- Content ---- */}
      <div className={styles.contentWrap}>
        <motion.div
          className={styles.content}
          variants={container}
          initial="hidden"
          animate="show"
        >

          <motion.p className={styles.introPrimary} variants={fadeUp}>
            Hi, I&apos;m <strong>Uma</strong> — a{' '}
            <H color="mint">builder</H>
            , a problem-solver, and someone who genuinely loves what she does.
          </motion.p>

          <motion.p className={styles.introSecondary} variants={fadeUp}>
            I write code. I break things. I fix them. I learn. I&apos;m in my
            final semester at Clark University, wrapping up my capstone and{' '}
            <H color="pink">actively looking for a role in tech</H>
            . I want to work on things that matter — products that reach people,
            systems that actually hold up, problems worth caring about.
          </motion.p>

          <motion.p className={styles.body} variants={fadeUp}>
            If you&apos;re here to find out who I am, stick around.
          </motion.p>

          <motion.p className={styles.links} variants={fadeUp}>
            <a href="https://github.com/[YOUR_HANDLE]" target="_blank" rel="noopener noreferrer">GitHub</a>
            {' · '}
            <a href="https://linkedin.com/in/[YOUR_HANDLE]" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            {' · '}
            <a href="mailto:[YOUR_EMAIL]">Email</a>
          </motion.p>

        </motion.div>
      </div>

    </div>
  )
}