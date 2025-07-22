import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'inkwell',
  description: 'your personal digest',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-mono bg-[#FAF9F6] text-[#23272A]">{children}</body>
    </html>
  )
}
