'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './hire.module.css'

/* ── CountUp animation ─────────────────────────────────────── */
function CountUp({ to, suffix = '', prefix = '' }: { to: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true
          let start = 0
          const steps = 50
          const increment = to / steps
          const interval = 1200 / steps
          const timer = setInterval(() => {
            start += increment
            if (start >= to) {
              setCount(to)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, interval)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [to])

  return <span ref={ref}>{prefix}{count}{suffix}</span>
}

/* ── Data ───────────────────────────────────────────────────── */
const PROOF_STATS = [
  {
    number: 40,
    suffix: '%',
    label: 'cut in ETL pipeline latency',
    context: 'HCL Software · PySpark on AWS · 10,000+ enterprise endpoints',
  },
  {
    number: 53,
    suffix: '%',
    label: 'developer productivity increase',
    context: 'HCL Software · LangChain + RAG documentation assistant',
  },
  {
    number: 60,
    suffix: '%',
    label: 'cut in QA environment setup time',
    context: 'DFX · Python automation framework · 6 hrs to 1 hr',
  },
  {
    number: 90,
    suffix: '%',
    label: 'JUnit test coverage',
    context: 'Quinbay Technologies · 120+ tests across 5 microservices',
  },
]

/* ── Page ───────────────────────────────────────────────────── */
export default function HireMePage() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>

        {/* ── HERO ── */}
        <div className={styles.hero}>
          <div className={styles.heroBadge}>
            <span className={styles.pulseDot} />
            Actively interviewing · Available immediately
          </div>
          <h1 className={styles.heroTitle}>
            I build things.<br />
            <span className={styles.heroAccent}>I ship things.</span>
          </h1>
          <p className={styles.heroSub}>
            I've built distributed systems processing telemetry from 10,000+ enterprise
            endpoints, an AI documentation assistant that lifted developer productivity by
            53%, and APIs supporting 100K+ customer transactions in production.
          </p>
          <div className={styles.heroCta}>
            <a href="/contact" className={styles.ctaPrimary}>Let's talk →</a>
            <a href="/resume.docx" download className={styles.ctaSecondary}>Download resume</a>
          </div>
        </div>

        {/* ── PROOF STATS ── */}
        <div className={styles.proofSection}>
          <p className={styles.sectionLabel}>Real numbers. Real work.</p>
          <div className={styles.statsGrid}>
            {PROOF_STATS.map((s, i) => (
              <div key={i} className={styles.statCard}>
                <div className={styles.statNumber}>
                  <CountUp to={s.number} suffix={s.suffix} />
                </div>
                <div className={styles.statLabel}>{s.label}</div>
                <div className={styles.statContext}>{s.context}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── ELIGIBILITY ── */}
        <div className={styles.section}>
          <p className={styles.sectionLabel}>Work eligibility</p>
          <div className={styles.eligibilityGrid}>
            <div className={styles.eligCard}>
              <span className={styles.eligFlag}>🇺🇸</span>
              <div>
                <p className={styles.eligTitle}>Authorized to work immediately</p>
                <p className={styles.eligBody}>
                  On <strong>OPT + STEM extension</strong>, up to 3 years, no sponsorship needed to start.
                  Eligible for H-1B thereafter.
                </p>
              </div>
            </div>
            <div className={styles.eligCard}>
              <span className={styles.eligFlag}>📍</span>
              <div>
                <p className={styles.eligTitle}>Based in Boston</p>
                <p className={styles.eligBody}>
                  Open to roles anywhere in the U.S. Hybrid or in-office both work.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── FINAL CTA ── */}
        <div className={styles.finalCta}>
          <p className={styles.finalCtaText}>
            If your team is building something worth caring about, I want to hear about it.
          </p>
          <div className={styles.heroCta}>
            <a href="/contact" className={styles.ctaPrimary}>Get in touch →</a>
            <a href="/work" className={styles.ctaSecondary}>See my experience</a>
          </div>
        </div>

      </div>
    </div>
  )
}