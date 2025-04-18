import './globals.css'

import type { Metadata } from 'next'

import Providers from '@/app/providers'
import { BASE_METADATA } from '@/contents/metadata'
import { Inter, ClashDisplay } from '@/lib/font'
import { cn } from '@/lib/utils'

import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  ...BASE_METADATA,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="shortcut icon"
          href="/images/favicon.png"
          type="image/x-icon"
        />
      </head>
      <body className={cn(Inter.variable, ClashDisplay.variable)}>
        <Providers>{children}</Providers>
        <GoogleAnalytics gaId="" />
      </body>
    </html>
  )
}
