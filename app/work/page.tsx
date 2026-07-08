'use client'

import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import styles from './work.module.css'

interface Entry {
  side: 'left' | 'right'
  logo: string
  period: string
  company: string
  role: string
  badgeLabel: string
  badgeColor: string
  context: string
  tech: string[]
}

const ENTRIES: Entry[] = [
  {
    side: 'left',
    logo: '🔬',
    period: 'Jan 2026 – Apr 2026',
    company: 'Clark University',
    role: 'Independent Research',
    badgeLabel: 'Research',
    badgeColor: 'var(--hl-lavender)',
    context: "Continued deep fake detection research independently, building on earlier work with Professor Rand Alfaris at Clark University. Analysed and benchmarked deep fake detection models across multiple architectures against real-world constraints including latency, accuracy, and compute cost, and organised relevant publications into a structured literature review mapping gaps and trends in the detection landscape.",
    tech: ['Python', 'Deep Learning', 'Computer Vision', 'TensorFlow', 'Research Methods'],
  },
  {
    side: 'right',
    logo: '🎓',
    period: 'Aug 2024 – May 2026',
    company: 'Clark University',
    role: 'Master of Science, Computer Science',
    badgeLabel: "Dean's Scholar",
    badgeColor: 'var(--hl-mint)',
    context: "Full-time MS programme at Clark University, where I was awarded the Dean's Scholarship for academic excellence. Core coursework spanned distributed systems, machine learning, algorithms, and advanced software engineering, balanced alongside independent research analysing deep fake detection models with Professor Rand Alfaris.",
    tech: ['Distributed Systems', 'Machine Learning', 'Algorithms', 'Software Engineering'],
  },
  {
    side: 'left',
    logo: '🛠️',
    period: 'Jun 2025 – Dec 2025',
    company: 'DFX',
    role: 'Software Engineer Intern',
    badgeLabel: 'Boston, MA',
    badgeColor: 'var(--hl-yellow)',
    context: 'Software Engineer Intern on a small 6-engineer team in Boston, MA, building internal tooling and automation across the SDLC. Built a Python automation framework that cut QA environment setup time by 60% and streamlined CI/CD release traceability with GitHub Actions, and shipped an agentic chatbot that improved internal sales efficiency by 20%.',
    tech: ['Python', 'FastAPI', 'OOP Design', 'GitHub Actions', 'CI/CD', 'Agentic Workflows'],
  },
  {
    side: 'right',
    logo: '🏢',
    period: 'Aug 2023 – Jul 2024',
    company: 'HCL Software',
    role: 'Software Engineer, BigFix Endpoint Security',
    badgeLabel: 'Enterprise · Cross-timezone',
    badgeColor: 'var(--hl-sky)',
    context: 'Part of the BigFix Data Analytics team, working across time zones with engineers in the U.S., India, and Europe. Designed and operated real-time distributed Spark ETL pipelines on AWS processing telemetry from 10,000+ enterprise endpoints, reducing data processing time by 40%. Engineered a RAG-powered internal AI assistant using LangChain, integrating GenAI tools directly into the developer workflow, and built observability infrastructure using CloudWatch and Prometheus to monitor service health and improve incident response times.',
    tech: ['Apache Spark', 'AWS', 'Python', 'Docker', 'LangChain', 'RAG', 'CloudWatch', 'Prometheus', 'CI/CD'],
  },
  {
    side: 'left',
    logo: '🚀',
    period: 'Jan 2023 – Jul 2023',
    company: 'Quinbay Technologies',
    role: 'Software Engineer Intern, E-Commerce Platform',
    badgeLabel: 'Startup · Fast-paced',
    badgeColor: 'var(--hl-peach)',
    context: 'Quinbay is a fast-growing startup building e-commerce infrastructure for Southeast Asian markets. Built 25+ RESTful APIs using Spring Boot across 5 microservices for an Indonesian e-commerce platform, achieving 93% unit test coverage. Integrated Apache Kafka for async event-driven communication and Apache Solr for full-text search, improving message throughput by 40%, and shipped 10+ features for flash sale retail pricing using AWS and SQL/NoSQL, boosting system performance by 20%.',
    tech: ['Java', 'Spring Boot', 'Apache Kafka', 'Apache Solr', 'AWS', 'SQL', 'MongoDB', 'Microservices'],
  },
  {
    side: 'right',
    logo: '🤖',
    period: 'Jan 2022 – Apr 2022',
    company: 'Indian Servers',
    role: 'Machine Learning Intern',
    badgeLabel: 'ML / Research',
    badgeColor: 'var(--hl-pink)',
    context: 'An early experience working at the intersection of data and machine learning, analysing and evaluating machine learning models across multiple domains for accuracy, robustness, and edge-case behaviour. Built supporting systems and tooling to operationalise model outputs for downstream applications, gaining end-to-end experience across the ML lifecycle from data preparation through evaluation and deployment.',
    tech: ['Python', 'Machine Learning', 'Data Analysis', 'Model Evaluation'],
  },
]

/* ---- Single timeline item ---- */
function TimelineItem({
  entry,
  isOpen,
  onToggle,
}: {
  entry: Entry
  isOpen: boolean
  onToggle: () => void
}) {
  const card = (
    <div>
      {/* Collapsed header, always visible */}
      <button
        className={styles.cardBtn}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className={styles.cardLogo}>{entry.logo}</span>
        <span className={styles.cardPeriod}>{entry.period}</span>
        <span className={styles.cardCompany}>{entry.company}</span>
        <span className={styles.cardRole}>{entry.role}</span>
        <span className={styles.badge} style={{ background: entry.badgeColor }}>
          {entry.badgeLabel}
        </span>
        <span className={styles.hint}>{isOpen ? '↑ collapse' : '↓ expand'}</span>
      </button>

      {/* Smooth expand: CSS transition only, no remount */}
      <div className={`${styles.panel} ${isOpen ? styles.open : ''}`}>
        <div className={styles.panelInner}>
          <p className={styles.context}>{entry.context}</p>
          <div className={styles.techRow}>
            {entry.tech.map(t => (
              <span key={t} className={styles.tech}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className={`${styles.item} ${entry.side}`}>
      <div className={styles.slotLeft}>
        {entry.side === 'left' && card}
      </div>

      <div className={styles.slotCenter}>
        <div
          className={`${styles.dot} ${isOpen ? styles.dotOpen : ''}`}
          onClick={onToggle}
        />
      </div>

      <div className={styles.slotRight}>
        {entry.side === 'right' && card}
      </div>
    </div>
  )
}

export default function WorkPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function handleToggle(i: number) {
    setOpenIndex(prev => (prev === i ? null : i))
  }

  return (
    <div className={styles.page}>
      <div className={styles.content}>

        <h1 className={styles.title}>Experience</h1>
        <p className={styles.subtitle}>Click any card to see the full story.</p>

        <div className={styles.timeline}>
          {ENTRIES.map((entry, i) => (
            <TimelineItem
              key={i}
              entry={entry}
              isOpen={openIndex === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>

      </div>
    </div>
  )
}