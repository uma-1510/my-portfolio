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
    context: "Continued deep fake detection research independently, building on earlier work with Professor Rand Alfaris at Clark University. Designed and open-sourced a deepfake detection benchmark pipeline applying EfficientNet-B0 and custom algorithm development to process large-scale image datasets, self-initiated and published on GitHub.",
    tech: ['Python', 'PyTorch', 'EfficientNet-B0', 'Computer Vision', 'Deep Learning'],
  },
  {
    side: 'right',
    logo: '🎓',
    period: 'Aug 2024 – May 2026',
    company: 'Clark University',
    role: 'Master of Science, Computer Science',
    badgeLabel: "Dean's Scholar · 3.8 GPA",
    badgeColor: 'var(--hl-mint)',
    context: "Full-time MS programme at Clark University (GPA: 3.8), where I was awarded the Dean's Scholarship for academic excellence. Core coursework spanned distributed systems, machine learning, algorithms, and advanced software engineering, balanced alongside independent research analysing deep fake detection models with Professor Rand Alfaris.",
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
    role: 'Software Engineer',
    badgeLabel: 'Remote',
    badgeColor: 'var(--hl-sky)',
    context: 'Engineered fault-tolerant PySpark ETL pipelines with real-time telemetry from 10,000+ enterprise endpoints on AWS and Docker, reducing end-to-end latency by 40%. Improved production uptime from 99.5% to 99.8%, a 3x reduction in downtime, by instrumenting Grafana and CloudWatch observability across distributed systems. Developed an AI assistant using LangChain and RAG for documentation access and automated troubleshooting, cutting token usage 30% while lifting developer productivity 53% across the team. Refactored the codebase for an 18% improvement in page load times and integrated a CI/CD pipeline with Jenkins for seamless deployments.',
    tech: ['Python', 'PySpark', 'AWS', 'Docker', 'LangChain', 'RAG', 'Grafana', 'CloudWatch', 'Jenkins', 'CI/CD'],
  },
  {
    side: 'left',
    logo: '🚀',
    period: 'Jan 2023 – Jul 2023',
    company: 'Quinbay Technologies',
    role: 'Software Engineer Intern',
    badgeLabel: 'Remote',
    badgeColor: 'var(--hl-peach)',
    context: 'Developed and maintained 25+ RESTful APIs using Java and Spring Boot for an Indonesian e-commerce platform, enabling communication across 5 microservices and improving service reliability for 100K+ customer transactions in an Agile environment. Optimized Spring Boot services and SQL/NoSQL database queries for retail pricing and flash sale workflows on AWS, reducing query latency by 25% while authoring 120+ JUnit tests that achieved 90% code coverage. Built and enhanced the platform UI using React, Redux, and TypeScript, implementing reusable components, hooks, and state management to support 10+ production releases, improving maintainability and performance by 30%. Also contributed through regular code reviews and pair programming, improving code quality by 18%.',
    tech: ['Java', 'Spring Boot', 'AWS', 'SQL', 'MongoDB', 'React', 'Redux', 'TypeScript', 'JUnit'],
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
        <p className={styles.subtitle}>My career trajectory</p>

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