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

/* ── Animated scroll-in card ───────────────────────────────── */
function AnimCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => el.classList.add(styles.cardVisible), delay)
          obs.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={styles.card}>
      {children}
    </div>
  )
}

/* ── Data ───────────────────────────────────────────────────── */
const PROOF_STATS = [
  {
    number: 40,
    suffix: '%',
    label: 'reduction in data processing time',
    context: 'HCL Software · Spark ETL on AWS · 10,000+ enterprise endpoints',
  },
  {
    number: 93,
    suffix: '%',
    label: 'unit test coverage',
    context: 'Quinbay · 25+ REST APIs across 5 microservices',
  },
  {
    number: 70,
    suffix: '%',
    label: 'cut in AI API costs',
    context: 'RAG Medical Assistant · FAISS + semantic caching',
  },
  {
    number: 5,
    suffix: '%',
    prefix: 'top ',
    label: 'Java certification',
    context: 'Out of ~60,000 participants · That\'s when I knew.',
  },
]

const WHAT_I_DO = [
  {
    emoji: '⚙️',
    title: 'Backend & Distributed Systems',
    body: `I have shipped real distributed infrastructure: a consistent hash ring task queue with heartbeat-based failure detection, Spark ETL pipelines processing telemetry from 10,000+ endpoints, and Kafka-based event systems in production. This is not classroom knowledge. I have seen these systems fail and I have fixed them.`,
    tags: ['Java', 'Python', 'Spring Boot', 'FastAPI', 'gRPC', 'PostgreSQL', 'Redis'],
  },
  {
    emoji: '🤖',
    title: 'AI & GenAI in Production',
    body: `I have built GenAI applications that actually work in production, not just API wrappers. A RAG-powered internal assistant at HCL using LangChain. A medical Q&A system with FAISS vector search and hallucination guardrails. Semantic caching that cut costs 70%. I understand the gap between "it works in a notebook" and "it works at scale."`,
    tags: ['LangChain', 'RAG', 'FAISS', 'Sentence-Transformers', 'Gemini', 'Prompt Engineering'],
  },
  {
    emoji: '☁️',
    title: 'Cloud Infrastructure & DevOps',
    body: `I manage the whole lifecycle, not just the code. Zero-downtime EC2 deployments via CodeDeploy. Terraform-managed infra. CI/CD pipelines with automated testing. Observability with Prometheus and CloudWatch. I care about what happens after the merge.`,
    tags: ['AWS', 'Docker', 'Terraform', 'CI/CD', 'Prometheus', 'CloudWatch', 'CodeDeploy'],
  },
]

const WHAT_I_WANT = [
  'A team that argues about the right way to do things, because they actually care.',
  'Problems where the stakes are real. Systems that people depend on.',
  'Engineers I can learn from. I am not the smartest person in any room and I am fine with that.',
  'A place where good work is noticed, not just shipped and forgotten.',
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
            I have built distributed systems at enterprise scale, RAG-powered AI tools
            that work in production, and APIs that real users in Indonesia depended on
            every day. I am a new grad with the mentality of someone who has already
            been in the fire.
          </p>
          <div className={styles.heroCta}>
            <a href="/contact" className={styles.ctaPrimary}>Let's talk →</a>
            <a href="/resume.docx" download className={styles.ctaSecondary}>Download resume</a>
          </div>
        </div>

        {/* ── STATEMENT ── */}
        <div className={styles.statement}>
          <p>
            I am not looking for a company to take a chance on me.
            I am looking for a team where I can do the <em>best work of my life.</em>
          </p>
        </div>

        {/* ── PROOF STATS ── */}
        <div className={styles.proofSection}>
          <p className={styles.sectionLabel}>Real numbers. Real work.</p>
          <div className={styles.statsGrid}>
            {PROOF_STATS.map((s, i) => (
              <div key={i} className={styles.statCard}>
                <div className={styles.statNumber}>
                  <CountUp to={s.number} suffix={s.suffix} prefix={s.prefix} />
                </div>
                <div className={styles.statLabel}>{s.label}</div>
                <div className={styles.statContext}>{s.context}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── WHAT I DO ── */}
        <div className={styles.section}>
          <p className={styles.sectionLabel}>What I actually do</p>
          <p className={styles.sectionNote}>
            These are not separate tracks. My best work lives at the intersection of all three.
          </p>
          <div className={styles.doCards}>
            {WHAT_I_DO.map(({ emoji, title, body, tags }, i) => (
              <AnimCard key={title} delay={i * 100}>
                <div className={styles.doEmoji}>{emoji}</div>
                <h3 className={styles.doTitle}>{title}</h3>
                <p className={styles.doBody}>{body}</p>
                <div className={styles.tagRow}>
                  {tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                </div>
              </AnimCard>
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
                  Open to roles anywhere in the U.S. I believe being young is the best time
                  to move somewhere new. Hybrid or in-office, I am in.
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