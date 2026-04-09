'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Pageheader.module.css'

const NAV_LINKS = [
  { href: '/',         label: 'Home' },
  { href: '/about',    label: 'A Bit about Myself' },
  { href: '/hire',     label: 'Hire Me!' },
  { href: '/work',     label: 'Work' },
  { href: '/projects', label: 'Skills and Projects' },
  { href: '/blog',     label: 'Blog' },
  { href: '/contact',  label: 'Contact Me' },
]

export default function PageHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerLogo}>
          <span className={styles.emoji}>👩‍💻</span>
          <span className={styles.dot}>·</span>
          <span className={styles.me}>me</span>
        </div>
        <div className={styles.headerName}>
          The digital space of <strong>Uma Chinnam</strong>
        </div>

        {/* Hamburger — only visible on mobile */}
        <button
          className={`${styles.menuBtn} ${menuOpen ? styles.menuBtnOpen : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* Mobile dropdown menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`${styles.mobileLink} ${pathname === href ? styles.mobileLinkActive : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            <span className={styles.mobileLinkArrow}>→</span>
            {label}
          </Link>
        ))}
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  )
}