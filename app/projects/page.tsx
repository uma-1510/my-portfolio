'use client'

import { useEffect, useRef } from 'react'
import type { Metadata } from 'next'
import styles from './projects.module.css'

/* ---- Animated project card ---- */
function ProjectCard({ title, desc, tech, github, emoji, delay = 0 }: {
  title: string
  desc: string
  tech: string[]
  github: string
  emoji: string
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
    <div ref={ref} className={styles.card}>

      {/* Preview area — drop an <img> or <video> here when ready */}
      <div className={styles.cardPreview}>
        {/*
          TO ADD AN IMAGE:
          <img src="/images/your-project.png" alt={title} />

          TO ADD A VIDEO:
          <video src="/videos/your-demo.mp4" autoPlay muted loop playsInline />
        */}
        <div className={styles.previewPlaceholder}>
          <span className={styles.previewEmoji}>{emoji}</span>
          <span className={styles.previewLabel}>add screenshot or demo</span>
        </div>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cardLink}
            title="View on GitHub"
          >
            ↗
          </a>
        </div>

        <p className={styles.cardDesc}>{desc}</p>

        <div className={styles.techRow}>
          {tech.map(t => (
            <span key={t} className={styles.tech}>{t}</span>
          ))}
        </div>
      </div>

    </div>
  )
}

/* ============================================
   SKILLS DATA
   ============================================ */
const SKILLS = [
  { icon: '🐍', label: 'Python' },
  { icon: '☕', label: 'Java' },
  { icon: '⚡', label: 'FastAPI' },
  { icon: '🌱', label: 'Spring Boot' },
  { icon: '⚛️', label: 'React' },
  { icon: '▲', label: 'Next.js' },
  { icon: '🐳', label: 'Docker' },
  { icon: '☁️', label: 'AWS' },
  { icon: '🔥', label: 'Apache Spark' },
  { icon: '📨', label: 'Apache Kafka' },
  { icon: '🗄️', label: 'PostgreSQL' },
  { icon: '🍃', label: 'MongoDB' },
  { icon: '🔴', label: 'Redis' },
  { icon: '🤖', label: 'LangChain' },
  { icon: '🧠', label: 'RAG / GenAI' },
  { icon: '📊', label: 'TensorFlow' },
  { icon: '🔧', label: 'gRPC' },
  { icon: '🏗️', label: 'Terraform' },
  { icon: '📈', label: 'Prometheus' },
  { icon: '🔍', label: 'Apache Solr' },
]

/* ============================================
   PROJECTS DATA
   ============================================ */
const PROJECTS = [
  {
    title:  'Resume OS',
    emoji:  '📄',
    desc:   'A browser extension that reads a live job posting and instantly rewrites your resume to match it — 100% client-side, no data ever leaves your machine. Built for job seekers who are tired of tailoring resumes manually.',
    tech:   ['Node.js', 'React', 'LLMs', 'DOCX generation'],
    github: 'https://github.com/[YOUR_HANDLE]/resume-os',
  },
  {
    title:  'RAG-Powered Medical Assistant',
    emoji:  '🏥',
    desc:   'A full-stack medical Q&A assistant that retrieves grounded answers from a document corpus using FAISS vector search. Semantic caching cuts API costs by 70% and guardrails prevent hallucinations in a healthcare context.',
    tech:   ['FastAPI', 'React', 'FAISS', 'Sentence-Transformers', 'Gemini'],
    github: 'https://github.com/[YOUR_HANDLE]/rag-medical-assistant',
  },
  {
    title:  'Distributed Task Queue',
    emoji:  '⚙️',
    desc:   'A distributed job scheduler with a consistent hash ring that routes jobs to worker nodes without a central bottleneck. Heartbeat-based failure detection auto-reassigns jobs when a node dies — zero task loss under failure.',
    tech:   ['Python', 'gRPC', 'Redis', 'PostgreSQL', 'REST API'],
    github: 'https://github.com/[YOUR_HANDLE]/distributed-task-queue',
  },
  {
    title:  'Async Job Manager Platform',
    emoji:  '🚀',
    desc:   'A Python/FastAPI async execution platform with a 5-state job lifecycle, mid-execution cancellation, and real-time stdout/stderr streaming. Zero-downtime EC2 deployments via CodeDeploy and Terraform-managed infra.',
    tech:   ['FastAPI', 'AWS EC2', 'CodeDeploy', 'Terraform', 'OpenAPI'],
    github: 'https://github.com/[YOUR_HANDLE]/async-job-manager',
  },
  {
    title:  'Database Backup Utility CLI',
    emoji:  '🗃️',
    desc:   'A modular CLI supporting 4 database types via an adapter pattern, with SHA-256 checksum validation, gzip compression, structured logging, and S3 cloud storage. Reduces database-specific code dependency by 60%.',
    tech:   ['Python', 'AWS S3', 'CLI', 'PostgreSQL', 'MongoDB'],
    github: 'https://github.com/[YOUR_HANDLE]/db-backup-cli',
  },
  {
    title:  'Sign Language Detection',
    emoji:  '🤟',
    desc:   'A CNN-based gesture recognition system that captures real-time webcam input and classifies hand gestures into 10 classes. Reached 99%+ training accuracy within 5 epochs using TensorFlow/Keras.',
    tech:   ['Python', 'TensorFlow', 'CNN', 'OpenCV'],
    github: 'https://github.com/[YOUR_HANDLE]/sign-language-detection',
  },
]

export default function ProjectsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>

        <h1 className={styles.title}>Projects & Skills</h1>
        <p className={styles.subtitle}>
          Things I have built, technologies I work with, and problems I found interesting enough to solve.
        </p>

        {/* ============================================
            SKILLS
            ============================================ */}
        <p className={styles.sectionLabel}>Technologies</p>
        <div className={styles.skillsGrid}>
          {SKILLS.map(({ icon, label }) => (
            <div key={label} className={styles.skillChip}>
              <span className={styles.skillIcon}>{icon}</span>
              {label}
            </div>
          ))}
        </div>

        {/* ============================================
            PROJECTS
            ============================================ */}
        <div className={styles.projectsHeader}>
          <p className={styles.sectionLabel} style={{ margin: 0 }}>Selected Projects</p>
          <a
            href="https://github.com/[YOUR_HANDLE]"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            {/* GitHub SVG icon */}
            <svg height="16" width="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            Connect on GitHub
          </a>
        </div>

        <div className={styles.projectsGrid}>
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={i}
              {...project}
              delay={i * 60}
            />
          ))}
        </div>

      </div>
    </div>
  )
}