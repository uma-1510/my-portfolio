import type { Metadata } from 'next'
import H from '../components/Highlight'
import PageWrapper from '../components/PageWrapper'

export const metadata: Metadata = {
  title:       '[YOUR NAME]',
  description: '[YOUR ONE-LINE DESCRIPTION]',
}

export default function HomePage() {
  return (
    <PageWrapper>

      <section style={{ marginBottom: '3rem' }}>
        <p style={{ fontSize: '1.15rem', lineHeight: 1.85, marginBottom: '1.25rem' }}>
          I am a{' '}
          <H color="yellow">[DEGREE / YEAR]</H>
          {' '}who{' '}
          <H color="mint">[THINGS I DO #1]</H>
          ,{' '}
          <H color="sky">[THINGS I DO #2]</H>
          , and tries to{' '}
          <H color="pink">[THINGS I TRY TO DO]</H>
          .
        </p>

        <p style={{ fontSize: '1.15rem', lineHeight: 1.85 }}>
          [SECOND SENTENCE — what I&apos;am doing / looking for]
        </p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <p>
          [MY STORY — how you got here]
        </p>

        <p>
          [WHAT I CARE ABOUT / WHAT KIND OF WORK EXCITES ME]
        </p>

        <p>
          [WHO I ARE OUTSIDE OF TECH]
        </p>
      </section>

      <section>
        <p>
          [CLOSING LINE — invite them to explore]
        </p>

        <p style={{ marginTop: '0.5rem' }}>
          Find me on{' '}
          <a href="https://github.com/[]" target="_blank" rel="noopener noreferrer">GitHub</a>
          {' · '}
          <a href="https://linkedin.com/in/[]" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          {' · '}
          <a href="mailto:[]">Email</a>
        </p>
      </section>

    </PageWrapper>
  )
}
