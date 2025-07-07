import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lets Convert',
  description: 'Using Next js, React js, tailwnd css'}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
