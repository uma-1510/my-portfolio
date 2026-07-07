import type { Metadata } from 'next'
import '../styles/globals.css'
import Sidebar from '../components/Sidebar'
import NavControls from '../components/NavControls'
import ThemeProvider from '../components/ThemeProvider'

export const metadata: Metadata = {
  title: {
    template: '%s — Uma Chinnam',
    default:  'Uma Chinnam',
  },
  description: 'Software engineer, builder, MS CS candidate at Clark University.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{document.documentElement.setAttribute('data-theme', localStorage.getItem('theme') || 'dark')}catch(e){}`,
          }}
        />
        <ThemeProvider>
          <div className="layout">
            <div className="layout__nav">
              <Sidebar />
            </div>
            <main className="layout__main">
              {children}
            </main>
          </div>
          {/* Prev / Next navigation — outside the scroll container so it stays fixed */}
          <NavControls />
        </ThemeProvider>
      </body>
    </html>
  )
}