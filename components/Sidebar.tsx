'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'
import styles from './Sidebar.module.css'

interface NavLink {
  href: string
  label: string
  icon: React.ReactNode
}

const iconProps = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

const NAV_LINKS: NavLink[] = [
  {
    href: '/', label: 'Home',
    icon: <svg {...iconProps}><path d="M20 13c0 5-3.5 7.5-7.35 8.95a1 1 0 0 1-.6.01C8.5 20.5 5 18 5 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C15.51 3.81 18 5 20 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg>,
  },
  {
    href: '/about', label: 'About',
    icon: <svg {...iconProps}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>,
  },
  {
    href: '/hire', label: 'Hire Me',
    icon: <svg {...iconProps}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1="3" y1="13" x2="21" y2="13" /></svg>,
  },
  {
    href: '/work', label: 'Work',
    icon: <svg {...iconProps}><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2" /></svg>,
  },
  {
    href: '/projects', label: 'Projects',
    icon: <svg {...iconProps}><path d="M10 2v2M14 2v2" /><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" /></svg>,
  },
  {
    href: '/blog', label: 'Blog',
    icon: <svg {...iconProps}><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>,
  },
  {
    href: '/contact', label: 'Contact',
    icon: <svg {...iconProps}><path d="m21.854 2.147-10.94 10.939" /><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" /></svg>,
  },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <aside className={styles.sidebar}>
      <div className={styles.topRow}>
        <div className={styles.identity}>
          <div className={styles.avatarWrap}>
            <img src="/avatar.jpg" alt="Uma Chinnam" className={styles.avatar} />
            <span className={styles.onlineDot} />
          </div>
          <div>
            <p className={styles.name}>Uma Chinnam</p>
            <p className={styles.handle}>@uma-1510</p>
          </div>
        </div>

        <button
          className={`${styles.menuBtn} ${menuOpen ? styles.menuBtnOpen : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={styles.roleRow}>
        <span className={styles.roleDot} />
        <span className={styles.roleLabel}>Software Engineer</span>
        <ThemeToggle />
      </div>

      <nav className={`${styles.links} ${menuOpen ? styles.linksOpen : ''}`}>
        {NAV_LINKS.map(({ href, label, icon }) => {
          const isActive = pathname === href
          return (
            <Link
              key={href}
              href={href}
              className={`${styles.link} ${isActive ? styles.active : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              <span className={styles.icon}>{icon}</span>
              {label}
              <span className={styles.arrow}>→</span>
            </Link>
          )
        })}
      </nav>

      <div className={styles.footer}>
        <p className={styles.footerText}>© 2026 with ❤ by Uma</p>
      </div>
    </aside>
  )
}
