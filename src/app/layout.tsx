import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const domain = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata: Metadata = {
  title: 'Say No to Genocide Josh Shapiro!',
  description:
    'We need a strong, pro-working class, pro-ceasefire Democratic ticket this year. Tell Harris to say no to Genocide Josh Shapiro for VP!',
  icons: `${domain}/favicon.png`,
  twitter: {
    card: 'summary_large_image',
    site: '@nogenocidejosh',
    images: `${domain}/img/protest-text.png`,
  },
  themeColor: '#fef9ec',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
