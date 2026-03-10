'use client'

import { useEffect, useRef } from 'react'
import type { Metadata } from 'next'
import styles from './work.module.css'

/* ---- Animated timeline item ---- */
function TimelineItem({
  role, company, product, period, envLabel, envColor,
  context, bullets, tech, delay = 0
}: {
  role: string
  company: string
  product: string
  period: string
  envLabel: string
  envColor: string
  context: string
  bullets: string[]
  tech: string[]
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add(styles.visible), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.08 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={styles.item}>
      <div className={styles.card}>

        <div className={styles.cardHeader}>
          <span className={styles.role}>{role}</span>
          <span className={styles.period}>{period}</span>
        </div>

        <p className={styles.company}>
          <strong>{company}</strong> — {product}
        </p>

        <span
          className={styles.envTag}
          style={{ background: envColor, color: '#1a1a18' }}
        >
          {envLabel}
        </span>

        <p className={styles.context}>{context}</p>

        <ul className={styles.bullets}>
          {bullets.map((b, i) => (
            <li key={i} className={styles.bullet}>{b}</li>
          ))}
        </ul>

        <div className={styles.techRow}>
          {tech.map(t => (
            <span key={t} className={styles.tech}>{t}</span>
          ))}
        </div>

      </div>
    </div>
  )
}

/* ---- All experience data ---- */
const EXPERIENCE = [
  {
    role:     'Software Engineer',
    company:  'HCL Software',
    product:  'BigFix Endpoint Security',
    period:   'Aug 2023 – Jul 2024',
    envLabel: 'Enterprise · Cross-timezone',
    envColor: 'var(--hl-sky)',
    context:  'Part of the BigFix Data Analytics team, working across time zones with engineers in the U.S., India, and Europe. The work sat at the intersection of data engineering, cloud infrastructure, and AI — designing pipelines, orchestrating them, writing KPIs, and making data ready for dashboards that enterprise clients depended on.',
    bullets: [
      'Designed and operated real-time distributed Spark ETL pipelines on AWS that processed telemetry from 10,000+ enterprise endpoints, reducing data processing time by 40%.',
      'Engineered a RAG-powered internal AI assistant using LangChain to surface knowledge-base content intelligently, integrating GenAI tools directly into the developer workflow.',
      'Built and deployed containerized Python microservices using Docker via CI/CD pipelines, with automated unit and integration testing ensuring production reliability.',
      'Built observability infrastructure using CloudWatch and Prometheus to monitor service health and improve incident response times.',
    ],
    tech: ['Apache Spark', 'AWS', 'Python', 'Docker', 'LangChain', 'RAG', 'CloudWatch', 'Prometheus', 'CI/CD'],
    delay: 0,
  },
  {
    role:     'Software Engineer Intern',
    company:  'Quinbay Technologies',
    product:  'E-Commerce Platform',
    period:   'Jan 2023 – Jul 2023',
    envLabel: 'Startup · Fast-paced',
    envColor: 'var(--hl-mint)',
    context:  'Quinbay is a fast-growing startup building e-commerce infrastructure for Southeast Asian markets. As an intern, I wore multiple hats — writing backend APIs, collaborating with design and product teams, and shipping features that real users in Indonesia interacted with daily. The pace was real and the ownership was real.',
    bullets: [
      'Built 25+ RESTful APIs using Spring Boot to connect frontend and backend across 5 microservices for an Indonesian e-commerce platform, achieving 93% unit test coverage in an Agile setting.',
      'Integrated Apache Kafka for asynchronous event-driven communication and Apache Solr for full-text search across distributed microservices, improving message throughput by 40% and reducing latency.',
      'Implemented 10+ new features for flash sale retail pricing using AWS and SQL/NoSQL databases, boosting system performance by 20%.',
      'Collaborated closely with product managers and design teams to translate requirements into reliable, user-facing features on tight deadlines.',
    ],
    tech: ['Java', 'Spring Boot', 'Apache Kafka', 'Apache Solr', 'AWS', 'SQL', 'MongoDB', 'Microservices'],
    delay: 120,
  },
  {
    role:     'Machine Learning Intern',
    company:  'Indian Servers',
    product:  'ML Systems',
    period:   '2022',
    envLabel: 'Research-oriented',
    envColor: 'var(--hl-lavender)',
    context:  'An early experience working at the intersection of data and machine learning — analyzing models, testing their performance, and building systems around them. This is where I first got hands-on with ML outside of a classroom and realized it was an area I genuinely wanted to keep going deeper in.',
    bullets: [
      'Analyzed and evaluated machine learning models across multiple problem domains, testing for accuracy, robustness, and edge-case behavior.',
      'Built supporting systems and tooling to operationalize model outputs and make results usable in downstream applications.',
      'Gained foundational experience working across the full ML lifecycle — from data preparation through evaluation and deployment.',
    ],
    tech: ['Python', 'Machine Learning', 'Data Analysis', 'Model Evaluation'],
    delay: 240,
  },
]

const SKILLS = [
  'Software Engineering', 'Data Engineering', 'Machine Learning', 'GenAI / RAG',
  'Distributed Systems', 'Cloud (AWS)', 'Backend APIs', 'Microservices',
]

export default function WorkPage() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>

        <h1 className={styles.title}>Work</h1>
        <p className={styles.subtitle}>
          Across software engineering, data, and AI — here is what I have built and where.
        </p>

        {/* ---- Skill area pills ---- */}
        <div className={styles.skillRow}>
          {SKILLS.map(s => (
            <span key={s} className={styles.skillPill}>{s}</span>
          ))}
        </div>

        {/* ---- Timeline ---- */}
        <div className={styles.timeline}>
          {EXPERIENCE.map((exp, i) => (
            <TimelineItem key={i} {...exp} />
          ))}
        </div>

        {/* ---- Resume CTA ---- */}
        <p className={styles.cta}>
          Want the full picture?{' '}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Download my résumé
          </a>
          {' '}or{' '}
          <a href="/contact">reach out directly</a>.
        </p>

      </div>
    </div>
  )
}