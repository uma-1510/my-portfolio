'use client'

import { useEffect, useRef } from 'react'
import type { Metadata } from 'next'
import styles from './hire.module.css'

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

const WHAT_YOU_CAN_DO = [
  {
    title: 'Full stack',
    body: `I am proficient in multiple programming languages (such as JavaScript & variants, Go, and Python, on top of knowing Java and PHP) and various web frameworks (such as Next.js & React & friends, Django & Flask & FastAPI, etc.). I have also worked with relational (SQLite, PostgreSQL and MySQL) and document (MongoDB & variants) databases, as well as AWS and Google Cloud environments. I often apply various best practices, including REST APIs and caching, as well as DevOps (especially CI/CD). Often I do development work as part of a larger system.`,
    tags: ['Java', 'Python', 'Spring Boot', 'FastAPI', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'CI/CD'],
  },
  {
    title: 'AI & Intelligent Systems',
    body: `I have hands-on experience building GenAI-powered applications - not just calling APIs, but designing systems around them. I built a RAG-powered AI assistant using LangChain, worked on deep fake detection research, and built a medical Q&A assistant with FAISS vector search and semantic caching. I understand how to make AI work in production: grounded, efficient, and reliable.`,
    tags: ['LangChain', 'RAG', 'FAISS', 'TensorFlow', 'Gemini', 'Sentence-Transformers', 'Prompt Engineering'],
  },
  {
    title: 'Data Engineering & Pipelines',
    body: `On top of backend skills, I have real production experience with distributed data infrastructure. I designed Spark ETL pipelines on AWS, integrated Kafka for event-driven architectures, and used ElasticSearch for large-scale search.`,
    tags: ['Apache Spark', 'Apache Kafka', 'ElasticSearch', 'ETL', 'AWS', 'Prometheus', 'CloudWatch'],
  },
]

export default function HireMePage() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>

        
        <div className={styles.hero}>
          <h1 className={styles.title}>Hire me!</h1>
          <p className={styles.tagline}>
            Interested in hiring me? Read here to see what I can do!
          </p>
          <div className={styles.meta}>
            <span className={styles.metaItem}>Actively interviewing</span>
            <span className={styles.metaDot}>·</span>
            <span className={styles.metaItem}>Available immediately</span>
          </div>
        </div>

       
        <div className={styles.introBlock}>
          <p>
            Thank you for your interest! I am actively looking for a{' '}
            <strong>new grad / entry-level software engineering role</strong>{' '}
            and available to start <strong>immediately</strong>. I have built real systems
            at multiple companies across data engineering, distributed infrastructure, and
            AI and I am ready to learn more and contribute to the team and help you achieve your goals!
          </p>
        </div>

     
        <h2 className={styles.sectionHeading}>TL;DR</h2>
        <ul className={styles.tldr}>
          <li>
            <strong>Quick, self-directed learner.</strong> I have picked up new languages,
            frameworks, and tools on the fly across every role I have held. Always curious about new technical solutions.
          </li>
          <li>
            <strong>Full-stack development </strong> I am proficient
            in Java, Python, JS/TS and familiar with Go.
            Good at databse technologies and implemented them in production like cachine and indexing.
          </li>
          <li>
            <strong>Distributed systems and data engineering experience.</strong> I have
            shipped Spark ETL pipelines, Kafka-based event systems, and RAG-powered AI
            assistants in real production environments. Not just classroom knowledge.
          </li>
          <li>
            I understand the full deployment lifecycle and have experience with <strong>CI/CD and dockerization</strong>, 
            as well as deploying in both traditional UNIX and cloud "serverless" environments.
          </li>
        </ul>

        {/* ---- What can I do ---- */}
        <h2 className={styles.sectionHeading}>What can you do?</h2>
        <p className={styles.sectionIntro}>
          These areas are not siloed — most of my best work sits at the intersection of several.
          I am <em>up to the challenge</em> of combining them.
        </p>

        <div className={styles.cards}>
          {WHAT_YOU_CAN_DO.map(({ title, body, tags }, i) => (
            <AnimCard key={title} delay={i * 80}>
              <div className={styles.cardHead}>
                <h3 className={styles.cardTitle}>{title}</h3>
              </div>
              <p className={styles.cardBody}>{body}</p>
              <div className={styles.tagRow}>
                {tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
              </div>
            </AnimCard>
          ))}
        </div>

        {/* ---- More about my experience ----
        <h2 className={styles.sectionHeading}>More about my experience</h2>

        <div className={styles.expBlock}>
          <h3 className={styles.expSubhead}>Engineering</h3>
          <ul className={styles.expList}>
            <li>
              At <strong>HCL Software</strong>, I was part of the BigFix Data Analytics team
              — designing Spark ETL pipelines on AWS, building a RAG-powered AI assistant
              using LangChain, and shipping containerised Python microservices with full
              observability (CloudWatch + Prometheus). Real enterprise scale, real ownership.
            </li>
            <li>
              At <strong>Quinbay Technologies</strong>, I built 25+ REST APIs across 5
              microservices for an Indonesian e-commerce platform — achieving 93% test coverage,
              integrating Kafka and Solr, and shipping flash sale features that users depended on.
            </li>
            <li>
              My <strong>research at Clark University</strong> involved benchmarking deep fake
              detection models against real-world constraints alongside Professor Rand Alfaris —
              the kind of rigorous, cross-disciplinary work that sharpens both technical and
              analytical thinking.
            </li>
          </ul>
        </div> */}

        <div className={styles.expBlock}>
          <h3 className={styles.expSubhead}>Projects</h3>
          <ul className={styles.expList}>
            <li>
              Built a <strong>distributed task queue</strong> with consistent hash ring routing
              and heartbeat-based failure detection — zero task loss under node failure.
            </li>
            <li>
              Built a <strong>RAG-powered medical assistant</strong> with FAISS vector search
              and semantic caching — 70% reduction in API costs, with hallucination guardrails.
            </li>
            <li>
              Built an <strong>async job manager platform</strong> with 5-state lifecycle
              management, mid-execution cancellation, and real-time stdout/stderr streaming
              on AWS EC2 with Terraform-managed infra.
            </li>
          </ul>
        </div>

        {/* ---- Location & Eligibility ---- */}
        <h2 className={styles.sectionHeading}>Location & Work Eligibility</h2>

        <div className={styles.eligibilityGrid}>
          <div className={styles.eligCard}>
            <span className={styles.eligFlag}>🇺🇸</span>
            <div>
              <p className={styles.eligTitle}>United States</p>
              <p className={styles.eligBody}>
                Authorised to work on <strong>OPT + STEM extension</strong> (up to 3 years)
                immediately. No sponsorship needed to start. Eligible for H-1B sponsorship
                thereafter. There is no need for the employer to pay $100,000 fee to sponsor 
                my H1B since I am transitioning from F1 to H1B.
              </p>
            </div>
          </div>
          <div className={styles.eligCard}>
            <span className={styles.eligFlag}>📍</span>
            <div>
              <p className={styles.eligTitle}>Location Preference</p>
              <p className={styles.eligBody}>
                Based in Boston. Open to roles anywhere in the U.S. with reasonable relocation
                time. Open to hybrid or in-office.
              </p>
            </div>
          </div>
        </div>

        {/* ---- CTA ---- */}
        <div className={styles.cta}>
          <p>
            I am actively interviewing. Do not hesitate to reach out, I would love to
            learn more about what your team is building.
          </p>
          <div className={styles.ctaLinks}>
            <a href="/contact" className={styles.ctaPrimary}>Get in touch →</a>
            <a href="/resume.docx" target="_blank" rel="noopener noreferrer" className={styles.ctaSecondary}>
              Download resume
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}