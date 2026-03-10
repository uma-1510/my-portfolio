import type { Metadata } from 'next'
import PageWrapper from '../../components/PageWrapper'
import styles from './work.module.css'

export const metadata: Metadata = { title: 'Work' }

interface Project {
  title:       string
  year:        string
  description: string
  tags:        string[]
  link:        string | null
  linkLabel:   string | null
}

const PROJECTS: Project[] = [
  {
    title:       '[PROJECT NAME]',
    year:        '[YEAR]',
    description: '[2–3 sentences. What did you build? What problem did it solve? What did you learn?]',
    tags:        ['[TECH 1]', '[TECH 2]', '[TECH 3]'],
    link:        'https://github.com/[YOUR_HANDLE]/[REPO]',
    linkLabel:   'View on GitHub',
  },
  {
    title:       '[PROJECT NAME]',
    year:        '[YEAR]',
    description: '[2–3 sentences]',
    tags:        ['[TECH 1]', '[TECH 2]'],
    link:        'https://github.com/[YOUR_HANDLE]/[REPO]',
    linkLabel:   'View on GitHub',
  },
  {
    title:       '[PROJECT NAME]',
    year:        '[YEAR]',
    description: '[2–3 sentences]',
    tags:        ['[TECH 1]', '[TECH 2]'],
    link:        null,       // ← set null if no link yet
    linkLabel:   null,
  },
]

export default function WorkPage() {
  return (
    <PageWrapper>

      <h1>Work</h1>

      <p style={{ marginBottom: '2.5rem' }}>
        [YOUR INTRO — what kind of builder are you?]
      </p>

      <div className={styles.projects}>
        {PROJECTS.map((project, i) => (
          <article key={i} className={styles.project}>

            <span className={styles.projectYear}>{project.year}</span>

            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>
                {project.link
                  ? <a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a>
                  : project.title
                }
              </h3>
              <p className={styles.projectDesc}>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>

          </article>
        ))}
      </div>

      <div className={styles.divider}>
        <p>
          Want the full picture?{' '}
          <a href="/[YOUR-RESUME].pdf" target="_blank" rel="noopener noreferrer">
            Download my résumé
          </a>
          {' '}or{' '}
          <a href="/contact">reach out directly</a>.
        </p>
      </div>

    </PageWrapper>
  )
}
