import type { Metadata } from 'next'
import styles from './blog.module.css'

export const metadata: Metadata = { title: 'Writing' }

export default function BlogPage() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>

        <h1 className={styles.title}>Writing</h1>

        <p className={styles.lead}>
          I occasionally write on Medium and other platforms — about engineering,
          systems I have built, and ideas I can not stop thinking about. I genuinely
          believe in learning in public: the act of writing something down forces
          clarity that no amount of thinking alone can produce.
        </p>

        <p className={styles.body}>
          On LinkedIn, I share updates about my work, certifications I have earned,
          projects I am building, and honest thoughts on tech and career. It is where
          I am most active and most myself.
        </p>

        {/* Coming soon card */}
        <div className={styles.comingSoon}>
          <span className={styles.comingSoonEmoji}>✍️</span>
          <div>
            <p className={styles.comingSoonTitle}>Articles — coming soon</p>
            <p className={styles.comingSoonSub}>
              I am working on a few pieces. Distributed systems, GenAI in production,
              lessons from building at scale. Watch this space — or follow along on
              LinkedIn in the meantime.
            </p>
          </div>
        </div>

        {/* LinkedIn CTA */}
        <p className={styles.cta}>
          Until then —{' '}
          <a
            href="https://linkedin.com/in/[YOUR_LINKEDIN]"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkedinLink}
          >
            check out my LinkedIn ↗
          </a>
          {' '}where I post regularly.
        </p>

      </div>
    </div>
  )
}