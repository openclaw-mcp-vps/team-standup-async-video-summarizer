import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'StandupSync — Async Video Standup Summarizer',
  description: 'Convert team video standup recordings into structured text summaries with action items and blockers. Built for remote engineering teams.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0fc7b348-3fac-4bb3-9e7e-b7762060dadd"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
