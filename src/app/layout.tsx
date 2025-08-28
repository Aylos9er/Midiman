import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Blackbox by Midi Man',
  description: 'Interactive React application for MIDI enthusiasts and music creators',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen">
        <Navigation />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}