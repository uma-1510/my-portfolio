import type { Metadata } from 'next'
import '../styles/globals.css'
import Nav from '../components/Nav'

export const metadata: Metadata = {
  title: {
    template: '%s — [YOUR NAME]',     
    default:  '[YOUR NAME]',
  },
  description: '[ONE LINE ABOUT YOU]',  
  openGraph: {
    title:       '[YOUR NAME]',
    description: '[ONE LINE ABOUT YOU]',
    url:         'https://[yoursite].com',
    siteName:    '[YOUR NAME]',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="layout">
          <div className="layout__nav">
            <Nav />
          </div>
          <main className="layout__main">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
