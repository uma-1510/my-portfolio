import type { Metadata } from 'next'
import '../styles/globals.css'
import Nav from '../components/Nav'

export const metadata: Metadata = {
  title: {
    template: '%s — Uma Chinnam',
    default:  'Uma Chinnam',
  },
  description: '[YOUR ONE-LINE DESCRIPTION]',
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
          <main className="layout__main" style={{ overflowY: "auto", height: "100vh" }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}