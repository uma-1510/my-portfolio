'use client'

import { useState, useEffect } from 'react'
import styles from './Buildingticker.module.css'

// ── Update this whenever you start something new ──────────────────
const CURRENT = [
  'Capstone project @ Clark',
  'Distributed task queue',
  'This portfolio',
]
// ─────────────────────────────────────────────────────────────────

export default function BuildingTicker() {
  const [idx, setIdx] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (CURRENT.length <= 1) return
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIdx(i => (i + 1) % CURRENT.length)
        setVisible(true)
      }, 350)
    }, 3200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.ticker}>
      <span className={styles.label}>building</span>
      <span className={`${styles.value} ${visible ? styles.in : styles.out}`}>
        {CURRENT[idx]}
      </span>
    </div>
  )
}