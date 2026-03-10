import type { Metadata } from 'next'
import H from '../../components/Highlight'
import PageWrapper from '../../components/PageWrapper'

export const metadata: Metadata = { title: 'Contact' }

export default function ContactPage() {
  return (
    <PageWrapper>

      <h1>Say Hello</h1>

      <p>
        [YOUR OPENER — make people want to reach out]
      </p>

      <p>
        The best way to reach me is{' '}
        <a href="mailto:[YOUR_EMAIL]">
          <H color="yellow">[YOUR_EMAIL]</H>
        </a>
        .{' '}
        [RESPONSE TIME / EXPECTATION]
      </p>

      <h2>Find me elsewhere</h2>

      <ul style={{ listStyle: 'none', paddingLeft: 0, lineHeight: 2.2 }}>
        <li>
          <a href="https://github.com/[YOUR_HANDLE]" target="_blank" rel="noopener noreferrer">GitHub</a>
          {' — '}
          <span style={{ color: 'var(--color-muted)' }}>
            [ONE PHRASE — e.g. "where my code lives"]
          </span>
        </li>
        <li>
          <a href="https://linkedin.com/in/[YOUR_HANDLE]" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          {' — '}
          <span style={{ color: 'var(--color-muted)' }}>[ONE PHRASE]</span>
        </li>
      </ul>

      <p style={{ marginTop: '2.5rem', fontStyle: 'italic', color: 'var(--color-muted)' }}>
        [OPTIONAL CLOSING NOTE]
      </p>

    </PageWrapper>
  )
}
