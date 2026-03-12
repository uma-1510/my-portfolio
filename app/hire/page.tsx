'use client'

import { useEffect, useRef } from 'react'
import type { Metadata } from 'next'
import styles from './hire.module.css'

/* ---- Animated card that fades up on scroll ---- */
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
    title: 'Backend & Data Engineering',
    emoji: '⚙️',
    body: `I am proficient in Java, Python, and TypeScript — and actively learning Go. I build RESTful APIs and microservices using Spring Boot, FastAPI, and Node.js, with solid knowledge of both relational databases (PostgreSQL, MySQL) and document stores (MongoDB). I know my way around AWS, Docker, and CI/CD pipelines. I have shipped production systems that process telemetry from tens of thousands of endpoints, and I take reliability seriously.`,
    tags: ['Java', 'Python', 'Spring Boot', 'FastAPI', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'CI/CD'],
  },
  {
    title: 'AI & Intelligent Systems',
    emoji: '🧠',
    body: `I have hands-on experience building GenAI-powered applications — not just calling APIs, but designing systems around them. I built a RAG-powered AI assistant using LangChain, worked on deep fake detection research, and built a medical Q&A assistant with FAISS vector search and semantic caching. I understand how to make AI work in production: grounded, efficient, and reliable.`,
    tags: ['LangChain', 'RAG', 'FAISS', 'TensorFlow', 'Gemini', 'Sentence-Transformers', 'Prompt Engineering'],
  },
  {
    title: 'Data Engineering & Pipelines',
    emoji: '🔥',
    body: `On top of backend skills, I have real production experience with distributed data infrastructure. I designed Spark ETL pipelines on AWS, integrated Kafka for event-driven architectures, and used Solr for large-scale search. I have a strong interest in data — collecting it, transforming it, and making it useful. If your team cares about data quality and pipeline reliability, I fit in naturally.`,
    tags: ['Apache Spark', 'Apache Kafka', 'Apache Solr', 'ETL', 'AWS', 'Prometheus', 'CloudWatch'],
  },
  {
    title: 'Full-Stack Development',
    emoji: '⚛️',
    body: `I build frontends too — React, Next.js, and TypeScript are tools I use regularly. I care about the full picture: clean APIs that are easy to consume, UIs that are fast and clear, and systems where the frontend and backend are genuinely well-connected. I have shipped full-stack applications that real users depend on.`,
    tags: ['React', 'Next.js', 'TypeScript', 'REST APIs', 'Responsive Design'],
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
            at real companies — across data engineering, distributed infrastructure, and
            AI — and I am genuinely hungry to keep going deeper.
          </p>
        </div>

     
        <h2 className={styles.sectionHeading}>TL;DR</h2>
        <ul className={styles.tldr}>
          <li>
            <strong>Quick, self-directed learner.</strong> I have picked up new languages,
            frameworks, and tools on the fly across every role I have held. I do not wait
            to be taught — I figure it out and then make it production-ready.
          </li>
          <li>
            <strong>Full-stack engineer with a backend-first mindset.</strong> I am proficient
            in Java and Python, actively learning Go, and comfortable with TypeScript, React,
            and Next.js. I know how to build end-to-end — from schema design to UI.
          </li>
          <li>
            <strong>Distributed systems and data engineering experience.</strong> I have
            shipped Spark ETL pipelines, Kafka-based event systems, and RAG-powered AI
            assistants in real production environments. This is not classroom knowledge.
          </li>
          <li>
            <strong>Strong DevOps fluency.</strong> Docker, CI/CD, AWS deployments, CloudWatch,
            Prometheus — I understand the full deployment lifecycle and take operational
            reliability seriously.
          </li>
          <li>
            <strong>Genuine interest in AI and system design.</strong> I think about how
            systems are architected, not just how they are coded. I have research experience
            in deep fake detection and hands-on experience building intelligent applications.
          </li>
        </ul>

        {/* ---- What can I do ---- */}
        <h2 className={styles.sectionHeading}>What can you do?</h2>
        <p className={styles.sectionIntro}>
          These areas are not siloed — most of my best work sits at the intersection of several.
          I am <em>up to the challenge</em> of combining them.
        </p>

        <div className={styles.cards}>
          {WHAT_YOU_CAN_DO.map(({ title, emoji, body, tags }, i) => (
            <AnimCard key={title} delay={i * 80}>
              <div className={styles.cardHead}>
                <span className={styles.cardEmoji}>{emoji}</span>
                <h3 className={styles.cardTitle}>{title}</h3>
              </div>
              <p className={styles.cardBody}>{body}</p>
              <div className={styles.tagRow}>
                {tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
              </div>
            </AnimCard>
          ))}
        </div>

        {/* ---- More about my experience ---- */}
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
        </div>

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
            I am actively interviewing. Do not hesitate to reach out — I would love to
            learn more about what your team is building.
          </p>
          <div className={styles.ctaLinks}>
            <a href="/contact" className={styles.ctaPrimary}>Get in touch →</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.ctaSecondary}>
              Download resume
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}