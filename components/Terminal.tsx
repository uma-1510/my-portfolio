'use client'

import { useEffect, useState, useRef } from 'react'
import styles from './Terminal.module.css'

const LINES = [
  { delay: 0,    type: 'cmd',     text: './hire_uma.sh' },
  { delay: 600,  type: 'output',  text: 'Loading candidate profile...' },
  { delay: 1100, type: 'blank',   text: '' },
  { delay: 1200, type: 'label',   text: 'NAME         Uma Maheswari Chinnam' },
  { delay: 1400, type: 'label',   text: 'ROLE         Software Engineer (New Grad)' },
  { delay: 1600, type: 'label',   text: 'LOCATION     Boston, MA — open to relocate' },
  { delay: 1800, type: 'label',   text: 'STATUS       ● Actively interviewing' },
  { delay: 2000, type: 'blank',   text: '' },
  { delay: 2100, type: 'label',   text: 'STACK        Java · Python · Go (learning)' },
  { delay: 2300, type: 'label',   text: '             Spring Boot · FastAPI · Next.js' },
  { delay: 2500, type: 'label',   text: '             Spark · Kafka · LangChain · AWS' },
  { delay: 2700, type: 'blank',   text: '' },
  { delay: 2800, type: 'output',  text: 'Running eligibility check...' },
  { delay: 3300, type: 'success', text: '✓ OPT + STEM — no sponsorship needed to start' },
  { delay: 3500, type: 'success', text: '✓ Available immediately' },
  { delay: 3700, type: 'success', text: '✓ Dean\'s Scholar, Clark University MS CS' },
  { delay: 3900, type: 'blank',   text: '' },
  { delay: 4000, type: 'output',  text: 'Opening contact channels...' },
  { delay: 4500, type: 'link',    text: 'EMAIL        mailto:[YOUR_EMAIL]',       href: 'mailto:[YOUR_EMAIL]' },
  { delay: 4700, type: 'link',    text: 'LINKEDIN     linkedin.com/in/[YOUR_HANDLE]', href: 'https://linkedin.com/in/[YOUR_HANDLE]' },
  { delay: 4900, type: 'link',    text: 'RESUME       /resume.pdf',               href: '/resume.pdf' },
  { delay: 5100, type: 'blank',   text: '' },
  { delay: 5200, type: 'prompt',  text: '' },
]

export default function Terminal() {
  const [visibleCount, setVisibleCount] = useState(0)
  const [started, setStarted] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Start when scrolled into view
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect() } },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const timers: ReturnType<typeof setTimeout>[] = []
    LINES.forEach((line, i) => {
      timers.push(setTimeout(() => setVisibleCount(i + 1), line.delay))
    })
    return () => timers.forEach(clearTimeout)
  }, [started])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }, [visibleCount])

  const visibleLines = LINES.slice(0, visibleCount)

  return (
    <div ref={containerRef} className={styles.terminal}>
      {/* Window chrome */}
      <div className={styles.titleBar}>
        <span className={styles.dot} style={{ background: '#ff5f57' }} />
        <span className={styles.dot} style={{ background: '#febc2e' }} />
        <span className={styles.dot} style={{ background: '#28c840' }} />
        <span className={styles.title}>bash — uma@portfolio</span>
      </div>

      <div className={styles.body}>
        {/* Prompt line */}
        <div className={styles.line}>
          <span className={styles.prompt}>uma@portfolio:~$</span>
          {visibleCount > 0 && (
            <span className={styles.cmd}> {LINES[0].text}</span>
          )}
        </div>

        {visibleLines.slice(1).map((line, i) => {
          if (line.type === 'blank') return <div key={i} className={styles.blank} />

          if (line.type === 'link') {
            const [labelPart, ...rest] = line.text.split(/\s{2,}/)
            const value = rest.join('  ')
            return (
              <div key={i} className={`${styles.line} ${styles.fadeIn}`}>
                <span className={styles.lineLabel}>{labelPart}</span>
                <span className={styles.lineSep}>  </span>
                <a href={line.href} target={line.href?.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer" className={styles.link}>
                  {value}
                </a>
              </div>
            )
          }

          if (line.type === 'label') {
            const parts = line.text.match(/^(\S+)\s+(.+)$/)
            if (parts) {
              return (
                <div key={i} className={`${styles.line} ${styles.fadeIn}`}>
                  <span className={styles.lineLabel}>{parts[1]}</span>
                  <span className={styles.lineSep}>  </span>
                  <span className={styles.lineValue}>{parts[2]}</span>
                </div>
              )
            }
          }

          if (line.type === 'success') {
            return (
              <div key={i} className={`${styles.line} ${styles.success} ${styles.fadeIn}`}>
                {line.text}
              </div>
            )
          }

          if (line.type === 'prompt') {
            return (
              <div key={i} className={`${styles.line} ${styles.fadeIn}`}>
                <span className={styles.prompt}>uma@portfolio:~$</span>
                <span className={styles.cursor} />
              </div>
            )
          }

          return (
            <div key={i} className={`${styles.line} ${styles.muted} ${styles.fadeIn}`}>
              {line.text}
            </div>
          )
        })}
        <div ref={bottomRef} />
      </div>
    </div>
  )
}