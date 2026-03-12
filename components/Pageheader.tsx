'use client'

import styles from './Pageheader.module.css'

export default function PageHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <span className={styles.emoji}>👩‍💻</span>
        <span className={styles.dot}>·</span>
        <span className={styles.me}>me</span>
      </div>
      <div className={styles.headerName}>
        The digital space of <strong>Uma Chinnam</strong>
      </div>
    </header>
  )
}