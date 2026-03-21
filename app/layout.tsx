import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Eleonora Sanchez | Business Consulting Manager',
  description: 'Business Consulting Manager with 7+ years of experience at Ernst & Young and KPMG, specializing in marketing strategy, customer experience, and business transformation.',
  metadataBase: new URL('https://www.eleonorasanchez.it'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Eleonora Sanchez | Business Consulting Manager',
    description: 'Business Consulting Manager with 7+ years of experience at Ernst & Young and KPMG, specializing in marketing strategy, customer experience, and business transformation.',
    url: 'https://www.eleonorasanchez.it',
    siteName: 'Eleonora Sanchez',
    locale: 'it_IT',
    type: 'profile',
  },
  twitter: {
    card: 'summary',
    title: 'Eleonora Sanchez | Business Consulting Manager',
    description: 'Business Consulting Manager with 7+ years of experience at Ernst & Young and KPMG.',
  },
  verification: {
    google: 'd0DVWzw3VGbgdbbgXLoMa1A8iAwgzaDVVDiC0OmjSU0',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
