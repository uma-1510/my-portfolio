'use client'

import { usePathname, useRouter } from 'next/navigation'
import styles from './NavControls.module.css'

const NAV_ORDER = [
  { href: '/',         label: 'Home' },
  { href: '/about',    label: 'About' },
  { href: '/hire',     label: 'Hire Me' },
  { href: '/work',     label: 'Work' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog',     label: 'Blog' },
  { href: '/contact',  label: 'Contact' },
]

export default function NavControls() {
  const pathname = usePathname()
  const router = useRouter()

  const currentIndex = NAV_ORDER.findIndex(n => n.href === pathname)
  const prev = currentIndex > 0 ? NAV_ORDER[currentIndex - 1] : null
  const next = currentIndex < NAV_ORDER.length - 1 ? NAV_ORDER[currentIndex + 1] : null

  if (!prev && !next) return null

  return (
    <div className={styles.controls}>
      {prev ? (
        <button
          className={styles.btn}
          onClick={() => router.push(prev.href)}
          aria-label={`Go to ${prev.label}`}
          title={prev.label}
        >
          <span className={styles.arrow}>←</span>
          <span className={styles.label}>{prev.label}</span>
        </button>
      ) : (
        <div /> /* spacer to keep next on the right */
      )}

      {next ? (
        <button
          className={`${styles.btn} ${styles.btnNext}`}
          onClick={() => router.push(next.href)}
          aria-label={`Go to ${next.label}`}
          title={next.label}
        >
          <span className={styles.label}>{next.label}</span>
          <span className={styles.arrow}>→</span>
        </button>
      ) : (
        <div />
      )}
    </div>
  )
}