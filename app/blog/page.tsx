import type { Metadata } from 'next'
import Link from 'next/link'
import PageWrapper from '../../components/PageWrapper'
import styles from './blog.module.css'

export const metadata: Metadata = { title: 'Blog' }

interface Post {
  slug:        string
  title:       string
  date:        string
  description: string
}

const POSTS: Post[] = [
  {
    slug:        '',
    title:       '',
    date:        '',     // e.g. "March 2025"
    description: '',
  },
  {
    slug:        '',
    title:       '',
    date:        '',
    description: '',
  },
]

export default function BlogPage() {
  return (
    <PageWrapper>

      <h1>Writing</h1>

      <p style={{ marginBottom: '2.5rem' }}>
        [WHY YOU WRITE / WHAT PEOPLE WILL FIND HERE]
      </p>

      {POSTS.length > 0 ? (
        <div className={styles.posts}>
          {POSTS.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.post}>
              <span className={styles.postDate}>{post.date}</span>
              <div>
                <h3 className={styles.postTitle}>{post.title}</h3>
                <p className={styles.postDesc}>{post.description}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p style={{ color: 'var(--color-muted)', fontStyle: 'italic' }}>
          Nothing yet — but something&apos;s coming.
        </p>
      )}

    </PageWrapper>
  )
}
