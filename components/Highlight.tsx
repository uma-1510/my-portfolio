import styles from './Highlight.module.css'

type HighlightColor = 'yellow' | 'mint' | 'sky' | 'pink' | 'lavender' | 'peach'

interface HProps {
  color?: HighlightColor
  children: React.ReactNode
}

export default function H({ color = 'yellow', children }: HProps) {
  return (
    <span className={`${styles.highlight} ${styles[color]}`}>
      {children}
    </span>
  )
}
