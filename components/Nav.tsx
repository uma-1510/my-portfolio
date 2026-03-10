'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Nav.module.css'

interface NavLink {
  href: string
  label: string
}

const NAV_LINKS: NavLink[] = [
  { href: '/',        label: 'Home' },
  { href: '/about',   label: 'A Bit about Myself' },
  { href: '/work',    label: 'Work' },
  {href: '/projects', label: "Skills and Projects"},
  { href: '/blog',    label: 'Blog' },
  { href: '/contact', label: 'Contact Me' }
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className={styles.nav}>

      <div>

        <div className={styles.links}>
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`${styles.link} ${isActive ? styles.active : ''}`}
              >
                <span className={styles.arrow}>→</span>
                {label}
              </Link>
            )
          })}
        </div>
      </div>

      <div className={styles.navFooter}>
        <p className={styles.footerText}>
          [SHORT FOOTER NOTE]  
        </p>
      </div>
    </nav>
  )
}
