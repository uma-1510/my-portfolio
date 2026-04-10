'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './about.module.css'
import PageHeader from '../../components/Pageheader'
import H from '../../components/Highlight'

/* ── animation presets ───────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}
const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
}

/* ── helper: animate a section in when scrolled into view ── */
function Section({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref  = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={stagger}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
    >
      {children}
    </motion.div>
  )
}

/* ── photo strip ─────────────────────────────── */
const PHOTOS = [
  { src: '/photos/photo1.jpg', caption: 'hiking somewhere cold' },
  { src: '/photos/photo2.jpg', caption: 'at a hackathon, probably caffeinated' },
  { src: '/photos/photo3.jpg', caption: 'clark university, year one' },
]

function PhotoStrip() {
  return (
    <div className={styles.photoStrip}>
      {PHOTOS.map((p, i) => (
        <motion.div
          key={i}
          className={styles.photoFrame}
          style={{ rotate: i % 2 === 0 ? -2.5 : 2 }}
          whileHover={{ rotate: 0, scale: 1.04, zIndex: 10 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          variants={fadeUp}
        >
          {/* swap with real <img> when you have photos */}
          <div className={styles.photoPlaceholder}>
            <span className={styles.photoEmoji}>📸</span>
          </div>
          <p className={styles.photoCaption}>{p.caption}</p>
        </motion.div>
      ))}
    </div>
  )
}

/* ── scrolling stat ticker ───────────────────── */
const STATS = [
  '🏔️ mountains reset everything',
  '☕ java (the language) hooked me first',
  '🏆 top 5% out of 60k in Java certification',
  '🎓 dean\'s scholar @ clark',
  '🌍 hyderabad → boston',
  '🔬 deep fake detection research',
  '🎙️ occasional singer. not very good.',
  '🍳 discovered cooking by accident',
  '🏕️ will always say yes to camping',
  '⚡ 1.5 yrs shipping real production systems',
]

function StatTicker() {
  const repeated = [...STATS, ...STATS]
  return (
    <div className={styles.tickerWrap} aria-hidden>
      <div className={styles.tickerTrack}>
        {repeated.map((s, i) => (
          <span key={i} className={styles.tickerItem}>{s}</span>
        ))}
      </div>
    </div>
  )
}

/* ── pull quote ──────────────────────────────── */
function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <motion.blockquote className={styles.pullQuote} variants={fadeUp}>
      {children}
    </motion.blockquote>
  )
}

/* ── section marker ──────────────────────────── */
function Marker({ label }: { label: string }) {
  return (
    <motion.p className={styles.sectionMarker} variants={fadeUp}>
      {label}
    </motion.p>
  )
}

/* ══════════════════════════════════════════════
   PAGE
   ══════════════════════════════════════════════ */
export default function AboutPage() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <PageHeader />

        {/* ── HERO ───────────────────────────── */}
        <Section>
          <motion.h1 className={styles.heroTitle} variants={fadeUp}>
            I build things.<br />
            I break things.<br />
            <H color="yellow">I figure it out.</H>
          </motion.h1>

          <motion.div className={styles.factsRow} variants={fadeUp}>
            <span className={styles.fact}>📍 Boston → anywhere in the U.S.</span>
            <span className={styles.fact}>🎓 Dean's Scholar, Clark University</span>
            <span className={styles.fact}>🌍 Open Source Contributor</span>
          </motion.div>
        </Section>

        {/* ── TICKER ─────────────────────────── */}
        <StatTicker />

        {/* ── PHOTOS ─────────────────────────── */}
        <Section>
          <PhotoStrip />
        </Section>

        {/* ── WHO ────────────────────────────── */}
        <Section>
          <Marker label="01 / who" />

          <motion.p className={styles.lead} variants={fadeUp}>
            My name is <H color="mint">Uma Maheswari Chinnam</H>. Most people call me Uma —
            short, sweet, easy to remember. I am a software engineer who spends most of my time
            building things on the internet: AI tools, distributed systems, full-stack apps.
            Things that solve{' '}
            <H color="sky">real problems</H> for real people.
          </motion.p>

          <PullQuote>
            "I am not just someone who writes code. I am someone who actually cares
            about what the code <em>does</em>."
          </PullQuote>

          <motion.p className={styles.body} variants={fadeUp}>
            I love turning ideas into working products — whether that is through hackathons,
            side projects, or open-source collaboration. I document the process. I share what
            I learn. I build alongside other curious developers who care about the craft.
          </motion.p>
        </Section>

        {/* ── RIGHT NOW ──────────────────────── */}
        <Section>
          <Marker label="02 / right now" />

          <motion.p className={styles.lead} variants={fadeUp}>
            Final semester. Capstone in progress. Actively{' '}
            <H color="peach">looking for my first full-time role in tech</H>. In between, I am
            networking (yes, the human kind), attending events, and struggling to not start
            five new side projects at once.
          </motion.p>

          <motion.p className={styles.body} variants={fadeUp}>
            The uncertainty is real. But so is the momentum. I am persistent, and I actually
            put in the effort — so I am hopeful about whatever comes next.
          </motion.p>
        </Section>

        {/* ── ORIGIN ─────────────────────────── */}
        <Section>
          <Marker label="03 / origin story" />

          <motion.p className={styles.lead} variants={fadeUp}>
            I grew up in <H color="lavender">Hyderabad, India</H>. I was a math kid.
            Genuinely nerdy about it. Then undergrad happened, and code happened — slowly
            at first, then all at once.
          </motion.p>

          <motion.p className={styles.body} variants={fadeUp}>
            By second year, Java had me hooked. Not just the syntax — I wanted to understand
            <em> why</em> everything worked the way it did. I sat a certification exam and placed
            in the{' '}
            <H color="yellow">top 5% out of roughly 60,000 participants</H>. That was the
            moment I knew this was the thing.
          </motion.p>

          <motion.p className={styles.body} variants={fadeUp}>
            From there: more projects, STEM events, networking. That led to Quinbay Technologies —
            a fast-growing startup — and then a full-time position at HCL Software building
            production data pipelines and RAG-powered AI tools at enterprise scale.
          </motion.p>
        </Section>

        {/* ── EDUCATION ──────────────────────── */}
        <Section>
          <Marker label="04 / education" />

          <motion.p className={styles.lead} variants={fadeUp}>
            I am doing my Master's in Computer Science at Clark University, where I am a{' '}
            <H color="mint">Dean's Scholar</H>. I also work as a research assistant —
            analysing deep fake detection models alongside Professor Rand Alfaris,
            benchmarking performance, and exploring ways to push the field forward.
          </motion.p>

          <motion.p className={styles.body} variants={fadeUp}>
            Before that, I did my undergrad in Computer Science at R.V.R & J.C College in India,
            where I graduated as a university rank holder. Apparently I have a habit of ending up
            near the top of lists.
          </motion.p>
        </Section>

        {/* ── OUTSIDE CODE ───────────────────── */}
        <Section>
          <Marker label="05 / outside the terminal" />

          <motion.p className={styles.lead} variants={fadeUp}>
            I love music more than I can explain, and I sing occasionally —
            <H color="pink"> not very well</H>, but with a lot of feeling. I love hiking
            and camping. There is something about being in the mountains that resets
            everything no code review ever could.
          </motion.p>

          <motion.p className={styles.body} variants={fadeUp}>
            And somewhere between leaving home and landing in the U.S., I discovered I
            actually enjoy cooking. Did not see that one coming. Hyderabadi biryani is
            still the benchmark I cook everything else against.
          </motion.p>
        </Section>

        {/* ── HONEST SNAPSHOT ────────────────── */}
        <Section>
          <Marker label="06 / honest snapshot" />

          <PullQuote>
            "Pretty good, honestly. Busy in the way that feels productive. Building,
            learning, job hunting, figuring things out — which is exactly where I want to be."
          </PullQuote>

          <motion.p className={styles.body} variants={fadeUp}>
            If that sounds like someone you'd want on your team —{' '}
            <a href="/contact">let's talk</a>.
          </motion.p>
        </Section>

      </div>
    </div>
  )
}