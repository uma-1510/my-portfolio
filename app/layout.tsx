import type { Metadata } from 'next'
import '../styles/globals.css'
import Nav from '../components/Nav'
import PageHeader from '../components/Pageheader'
import NavControls from '../components/NavControls'

export const metadata: Metadata = {
  title: {
    template: '%s — Uma Chinnam',
    default:  'Uma Chinnam',
  },
  description: 'Software engineer, builder, MS CS candidate at Clark University.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="layout">
          <div className="layout__nav">
            <Nav />
          </div>
          <main className="layout__main">
            {/* Fixed header — sits above every page, content scrolls beneath */}
            <PageHeader />
            {children}
          </main>
        </div>
        {/* Prev / Next navigation — outside the scroll container so it stays fixed */}
        <NavControls />
      </body>
    </html>
  )
}