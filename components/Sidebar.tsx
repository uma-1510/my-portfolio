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
    icon: <svg {...iconProps}><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5" /></svg>,
  },
  {
    href: '/about', label: 'About',
    icon: <svg {...iconProps}><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" /></svg>,
  },
  {
    href: '/hire', label: 'Hire Me',
    icon: <svg {...iconProps}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1="3" y1="13" x2="21" y2="13" /></svg>,
  },
  {
    href: '/work', label: 'Work',
    icon: <svg {...iconProps}><rect x="3" y="3" width="7" height="9" rx="1" /><rect x="14" y="3" width="7" height="5" rx="1" /><rect x="14" y="12" width="7" height="9" rx="1" /><rect x="3" y="16" width="7" height="5" rx="1" /></svg>,
  },
  {
    href: '/projects', label: 'Projects',
    icon: <svg {...iconProps}><polyline points="8 6 2 12 8 18" /><polyline points="16 6 22 12 16 18" /></svg>,
  },
  {
    href: '/blog', label: 'Blog',
    icon: <svg {...iconProps}><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>,
  },
  {
    href: '/contact', label: 'Contact',
    icon: <svg {...iconProps}><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>,
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
